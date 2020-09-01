#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

echo "This script regenerates src/char_map.js using scripts/unicode-patterns-to-js-map.py and the data in data/data-*.txt"

if test ! -f "manifest.json"; then
    echo "Please run from the root project directory"
    exit 1
fi

scripts/unicode-patterns-to-js-map.py data/data-*.txt > src/char_map.js
