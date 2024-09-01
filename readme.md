# Destylize
A browser extension to replace stylized Unicode "fonts" with accessible ASCII text

[Install on Firefox](https://addons.mozilla.org/firefox/addon/destylize/)

[Install on Chrome](https://chrome.google.com/webstore/detail/ailchnlcihmbjhdikpfmeclpejbaggcp)

## Problem
Many social media sites and other platforms don't let users select the font or otherwise customize their posts. For this reason, it has become popular to replace normal ASCII characters with Unicode equivalents of a given style. Text can be made to look bold, italic or hand-written this way, but the system isn't perfect. Particularly, it introduces problems for accessibility tools and older devices which don't support such characters, or expect them to have a different meaning.

## Solution
Replace all characters commonly used for this purpose with their ASCII equivalents. Destylize's current approach is rather crude, replacing *all* characters it knows about regardless of context. There may be false positives, but I hope it can still useful.

## How you can help
Please let me know if you find this useful, any problems you encounter and any ideas about how to make it better. I'm not personally a user of screen readers or other accessibility tools, so feedback from people who are is crucial. Feel free to open a GitHub issue, tweet or DM me at [@__wmww](https://twitter.com/__wmww), Reddit message me at [u/william01110111](https://www.reddit.com/message/compose/?to=william01110111) or email me at wm@wmww.sh.
