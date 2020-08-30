#!/usr/bin/env python3

import sys
from collections import OrderedDict
import unicodedata

def is_ascii(char):
    return ord(char) <= 127

def verify_mapping(unicode_chr, ascii_chr):
    assert isinstance(unicode_chr, str)
    assert isinstance(ascii_chr, str)
    assert len(unicode_chr) == 1
    assert len(ascii_chr) == 1
    assert not is_ascii(unicode_chr)
    assert is_ascii(ascii_chr)

def js_map_element(unicode_chr, ascii_chr):
    '''returns a string containing a JS list [unicode, ascii]'''
    assert isinstance(flat_map, list)
    verify_mapping(unicode_chr=unicode_chr, ascii_chr=ascii_chr)
    ascii_chr = ascii_chr.replace('\\', '\\\\')
    ascii_chr = ascii_chr.replace('"', '\\"')
    return '["' + unicode_chr + '", "' + ascii_chr + '"]'

def js_map(flat_map):
    assert isinstance(flat_map, list)
    result = 'let char_map = new Map([\n'
    for c in flat_map:
        result += '    ' + js_map_element(c[0], c[1]) + ',\n'
    result += ']);'
    return result

def parse_block(block):
    assert isinstance(block, str)
    chars = block.split('▄')
    if len(chars) != 95:
        raise RuntimeError('Block "' + block + '" is of incorrect length ' + str(len(chars)))
    assert len(chars) == 95, chars
    mapping = []
    for i in range(len(chars)):
        ascii_val = i + 32
        if len(chars[i]) != 1:
            print('Multicharacter unicode "' + chars[i] + '"', file=sys.stderr)
        elif ord(chars[i]) > 127:
            mapping.append((chars[i], chr(ascii_val)))
    return mapping

def parse(text, path):
    '''returns a list of (unicode, ascii) tuples'''
    assert isinstance(text, str)
    assert isinstance(path, str)
    blocks = [block.split('▌', 1)[0] for block in text.split('▐')[1:]]
    flat_map = []
    for block in blocks:
        try:
            flat_map += parse_block(block)
        except RuntimeError as e:
            print(str(e) + ' in ' + path, file=sys.stderr)
    return flat_map

def parse_file(path):
    assert isinstance(path, str)
    return parse(open(path).read(), path)

def is_capital(char):
    if 'CAPITAL' in unicodedata.name(char):
        return True
    elif 'SMALL' in unicodedata.name(char):
        return False
    # More heuristics can go here
    else:
        return False

def unique(flat_map):
    seen = OrderedDict()
    for i in flat_map:
        if i[0] not in seen:
            seen[i[0]] = i[1]
        elif seen[i[0]] == i[1]:
            pass
        elif seen[i[0]].lower() == i[1].lower():
            if is_capital(i[0]):
                seen[i[0]] = i[1].upper()
            else:
                seen[i[0]] = i[1].lower()
        else:
            print('\'' + i[0] + '\' (' + hex(ord(i[0])) + ') maps to both \'' + i[1] + '\' and \'' + seen[i[0]] + '\'', file=sys.stderr)
    return [(k, v) for k, v in seen.items()]

def remove_diacritics(flat_map):
    result = []
    for uni, asc in flat_map:
        add = True
        norm = unicodedata.normalize('NFKD', uni) # Split diacritics from base letters
        if (len(norm) == 2 and
            unicodedata.category(norm[1]) == 'Mn' and # Is a diacritic, I guess?
            is_ascii(norm[0])):
            add = False
        if add:
            result.append((uni, asc))
    return result

if __name__ == '__main__':
    flat_map = []
    for path in sys.argv[1:]:
        flat_map += parse_file(path)
    flat_map = unique(flat_map)
    flat_map = remove_diacritics(flat_map)
    print(js_map(flat_map))
