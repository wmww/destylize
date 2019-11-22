import sys

text = sys.stdin.read()
blocks = [block.split('▌', 1)[0] for block in text.split('▐')[1:]]
mappings = []
for block in blocks:
    chars = block.split('▄')
    assert len(chars) == 95
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
    print("    ['" + c[0] + "', '" + c[1] + "'],")
print(']);')
