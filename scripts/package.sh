#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# Packages the extension into a .zip folder, only tested on Linux

if test ! -f "manifest.json"; then
    echo "Please run from the root project directory"
fi

ZIP_DEST='./data/destylize.zip'

rm -f "$ZIP_DEST"

# Screw it it works
find . \
    -not -path './.git*' \
    -not -path './data*' \
    -not -path './test*' \
    -not -path './scripts*' \
    -not -name 'destylize-400.png' \
    -not -name 'destylize-chrome.png' \
    -not -name 'example_text.png' \
    -not -name 'screenshot_*.png' \
    -not -name '*.kra' \
    -not -name '*~' \
    -not -path './store_description.md' \
    | xargs zip "$ZIP_DEST"
