import sys

def verify_mapping(unicode_chr, ascii_chr):
    assert isinstance(unicode_chr, str)
    assert isinstance(ascii_chr, str)
    assert len(unicode_chr) == 1
    assert len(ascii_chr) == 1
    assert ord(unicode_chr) > 127
    assert ord(ascii_chr) <= 127

def js_codegen(unicode_chr, ascii_chr):
    verify_mapping(unicode_chr=unicode_chr, ascii_chr=ascii_chr)
    ascii_chr = ascii_chr.replace('\\', '\\\\')
    ascii_chr = ascii_chr.replace('\'', '\\\'')
    return "['" + unicode_chr + "', '" + ascii_chr + "']"

text = sys.stdin.read()
blocks = [block.split('▌', 1)[0] for block in text.split('▐')[1:]]
mappings = []
for block in blocks:
    chars = block.split('▄')
    assert len(chars) == 95, chars
    mapping = []
    for i in range(len(chars)):
        ascii_val = i + 32
        if ord(chars[i]) > 127:
            mapping.append((chars[i], chr(ascii_val)))
    mappings.append(mapping)
flat_map = []
for mapping in mappings:
    flat_map += mapping
print('let char_map = new Map([')
for c in flat_map:
    print('    ' + js_codegen(c[0], c[1]) + ',')
print(']);')
