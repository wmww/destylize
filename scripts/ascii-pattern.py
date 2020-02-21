#!/usr/bin/env python3
'''
Prints ascii characters from space (32) to tilda (126)
Starts with a right half block (▐), ends with a right half (▌) and separates characters with a lower half (▄)
'''
print('▐' + '▄'.join(chr(i) for i in range(32, 127)) + '▌')
