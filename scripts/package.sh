#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

echo "This script packages the extension into a .zip folder, only tested on Linux"

if test ! -f "manifest.json"; then
    echo "Please run from the root project directory"
    exit 1
fi

ZIP_DEST='./data/destylize.zip'
echo "$ZIP_DEST will be created/overwitten"
echo "[Enter]: Continue, [Ctrl]+[C]: Quit"
read

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
    -not -path './release-process.md' \
    | xargs zip "$ZIP_DEST"

echo "Please read the above list of included files. If any should not be there add them to the ignore list in this script and re-run"
