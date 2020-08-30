let char_map = new Map([
    ["⊛", "*"],
    ["⊕", "+"],
    ["⊖", "-"],
    ["⨀", "."],
    ["⊘", "/"],
    ["①", "1"],
    ["②", "2"],
    ["③", "3"],
    ["④", "4"],
    ["⑤", "5"],
    ["⑥", "6"],
    ["⑦", "7"],
    ["⑧", "8"],
    ["⑨", "9"],
    ["⧀", "<"],
    ["⊜", "="],
    ["⧁", ">"],
    ["Ⓐ", "A"],
    ["Ⓑ", "B"],
    ["Ⓒ", "C"],
    ["Ⓓ", "D"],
    ["Ⓔ", "E"],
    ["Ⓕ", "F"],
    ["Ⓖ", "G"],
    ["Ⓗ", "H"],
    ["Ⓘ", "I"],
    ["Ⓙ", "J"],
    ["Ⓚ", "K"],
    ["Ⓛ", "L"],
    ["Ⓜ", "M"],
    ["Ⓝ", "N"],
    ["Ⓞ", "O"],
    ["Ⓟ", "P"],
    ["Ⓠ", "Q"],
    ["Ⓡ", "R"],
    ["Ⓢ", "S"],
    ["Ⓣ", "T"],
    ["Ⓤ", "U"],
    ["Ⓥ", "V"],
    ["Ⓦ", "W"],
    ["Ⓧ", "X"],
    ["Ⓨ", "Y"],
    ["Ⓩ", "Z"],
    ["⦸", "\\"],
    ["ⓐ", "a"],
    ["ⓑ", "b"],
    ["ⓒ", "c"],
    ["ⓓ", "d"],
    ["ⓔ", "e"],
    ["ⓕ", "f"],
    ["ⓖ", "g"],
    ["ⓗ", "h"],
    ["ⓘ", "i"],
    ["ⓙ", "j"],
    ["ⓚ", "k"],
    ["ⓛ", "l"],
    ["ⓜ", "m"],
    ["ⓝ", "n"],
    ["ⓞ", "o"],
    ["ⓟ", "p"],
    ["ⓠ", "q"],
    ["ⓡ", "r"],
    ["ⓢ", "s"],
    ["ⓣ", "t"],
    ["ⓤ", "u"],
    ["ⓥ", "v"],
    ["ⓦ", "w"],
    ["ⓧ", "x"],
    ["ⓨ", "y"],
    ["ⓩ", "z"],
    ["⦶", "|"],
    ["⓿", "0"],
    ["🅐", "A"],
    ["🅑", "B"],
    ["🅒", "C"],
    ["🅓", "D"],
    ["🅔", "E"],
    ["🅕", "F"],
    ["🅖", "G"],
    ["🅗", "H"],
    ["🅘", "I"],
    ["🅙", "J"],
    ["🅚", "K"],
    ["🅛", "L"],
    ["🅜", "M"],
    ["🅝", "N"],
    ["🅞", "O"],
    ["🅟", "P"],
    ["🅠", "Q"],
    ["🅡", "R"],
    ["🅢", "S"],
    ["🅣", "T"],
    ["🅤", "U"],
    ["🅥", "V"],
    ["🅦", "W"],
    ["🅧", "X"],
    ["🅨", "Y"],
    ["🅩", "Z"],
    ["！", "!"],
    ["＃", "#"],
    ["＄", "$"],
    ["％", "%"],
    ["＆", "&"],
    ["＇", "'"],
    ["（", "("],
    ["）", ")"],
    ["＊", "*"],
    ["＋", "+"],
    ["，", ","],
    ["－", "-"],
    ["．", "."],
    ["／", "/"],
    ["０", "0"],
    ["１", "1"],
    ["２", "2"],
    ["３", "3"],
    ["４", "4"],
    ["５", "5"],
    ["６", "6"],
    ["７", "7"],
    ["８", "8"],
    ["９", "9"],
    ["：", ":"],
    ["；", ";"],
    ["＝", "="],
    ["？", "?"],
    ["＠", "@"],
    ["Ａ", "A"],
    ["Ｂ", "B"],
    ["Ｃ", "C"],
    ["Ｄ", "D"],
    ["Ｅ", "E"],
    ["Ｆ", "F"],
    ["Ｇ", "G"],
    ["Ｈ", "H"],
    ["Ｉ", "I"],
    ["Ｊ", "J"],
    ["Ｋ", "K"],
    ["Ｌ", "L"],
    ["Ｍ", "M"],
    ["Ｎ", "N"],
    ["Ｏ", "O"],
    ["Ｐ", "P"],
    ["Ｑ", "Q"],
    ["Ｒ", "R"],
    ["Ｓ", "S"],
    ["Ｔ", "T"],
    ["Ｕ", "U"],
    ["Ｖ", "V"],
    ["Ｗ", "W"],
    ["Ｘ", "X"],
    ["Ｙ", "Y"],
    ["Ｚ", "Z"],
    ["［", "["],
    ["＼", "\\"],
    ["］", "]"],
    ["＾", "^"],
    ["＿", "_"],
    ["｀", "`"],
    ["ａ", "a"],
    ["ｂ", "b"],
    ["ｃ", "c"],
    ["ｄ", "d"],
    ["ｅ", "e"],
    ["ｆ", "f"],
    ["ｇ", "g"],
    ["ｈ", "h"],
    ["ｉ", "i"],
    ["ｊ", "j"],
    ["ｋ", "k"],
    ["ｌ", "l"],
    ["ｍ", "m"],
    ["ｎ", "n"],
    ["ｏ", "o"],
    ["ｐ", "p"],
    ["ｑ", "q"],
    ["ｒ", "r"],
    ["ｓ", "s"],
    ["ｔ", "t"],
    ["ｕ", "u"],
    ["ｖ", "v"],
    ["ｗ", "w"],
    ["ｘ", "x"],
    ["ｙ", "y"],
    ["ｚ", "z"],
    ["｛", "{"],
    ["｜", "|"],
    ["｝", "}"],
    ["～", "~"],
    ["𝟎", "0"],
    ["𝟏", "1"],
    ["𝟐", "2"],
    ["𝟑", "3"],
    ["𝟒", "4"],
    ["𝟓", "5"],
    ["𝟔", "6"],
    ["𝟕", "7"],
    ["𝟖", "8"],
    ["𝟗", "9"],
    ["𝐀", "A"],
    ["𝐁", "B"],
    ["𝐂", "C"],
    ["𝐃", "D"],
    ["𝐄", "E"],
    ["𝐅", "F"],
    ["𝐆", "G"],
    ["𝐇", "H"],
    ["𝐈", "I"],
    ["𝐉", "J"],
    ["𝐊", "K"],
    ["𝐋", "L"],
    ["𝐌", "M"],
    ["𝐍", "N"],
    ["𝐎", "O"],
    ["𝐏", "P"],
    ["𝐐", "Q"],
    ["𝐑", "R"],
    ["𝐒", "S"],
    ["𝐓", "T"],
    ["𝐔", "U"],
    ["𝐕", "V"],
    ["𝐖", "W"],
    ["𝐗", "X"],
    ["𝐘", "Y"],
    ["𝐙", "Z"],
    ["𝐚", "a"],
    ["𝐛", "b"],
    ["𝐜", "c"],
    ["𝐝", "d"],
    ["𝐞", "e"],
    ["𝐟", "f"],
    ["𝐠", "g"],
    ["𝐡", "h"],
    ["𝐢", "i"],
    ["𝐣", "j"],
    ["𝐤", "k"],
    ["𝐥", "l"],
    ["𝐦", "m"],
    ["𝐧", "n"],
    ["𝐨", "o"],
    ["𝐩", "p"],
    ["𝐪", "q"],
    ["𝐫", "r"],
    ["𝐬", "s"],
    ["𝐭", "t"],
    ["𝐮", "u"],
    ["𝐯", "v"],
    ["𝐰", "w"],
    ["𝐱", "x"],
    ["𝐲", "y"],
    ["𝐳", "z"],
    ["𝕬", "A"],
    ["𝕭", "B"],
    ["𝕮", "C"],
    ["𝕯", "D"],
    ["𝕰", "E"],
    ["𝕱", "F"],
    ["𝕲", "G"],
    ["𝕳", "H"],
    ["𝕴", "I"],
    ["𝕵", "J"],
    ["𝕶", "K"],
    ["𝕷", "L"],
    ["𝕸", "M"],
    ["𝕹", "N"],
    ["𝕺", "O"],
    ["𝕻", "P"],
    ["𝕼", "Q"],
    ["𝕽", "R"],
    ["𝕾", "S"],
    ["𝕿", "T"],
    ["𝖀", "U"],
    ["𝖁", "V"],
    ["𝖂", "W"],
    ["𝖃", "X"],
    ["𝖄", "Y"],
    ["𝖅", "Z"],
    ["𝖆", "a"],
    ["𝖇", "b"],
    ["𝖈", "c"],
    ["𝖉", "d"],
    ["𝖊", "e"],
    ["𝖋", "f"],
    ["𝖌", "g"],
    ["𝖍", "h"],
    ["𝖎", "i"],
    ["𝖏", "j"],
    ["𝖐", "k"],
    ["𝖑", "l"],
    ["𝖒", "m"],
    ["𝖓", "n"],
    ["𝖔", "o"],
    ["𝖕", "p"],
    ["𝖖", "q"],
    ["𝖗", "r"],
    ["𝖘", "s"],
    ["𝖙", "t"],
    ["𝖚", "u"],
    ["𝖛", "v"],
    ["𝖜", "w"],
    ["𝖝", "x"],
    ["𝖞", "y"],
    ["𝖟", "z"],
    ["𝑨", "A"],
    ["𝑩", "B"],
    ["𝑪", "C"],
    ["𝑫", "D"],
    ["𝑬", "E"],
    ["𝑭", "F"],
    ["𝑮", "G"],
    ["𝑯", "H"],
    ["𝑰", "I"],
    ["𝑱", "J"],
    ["𝑲", "K"],
    ["𝑳", "L"],
    ["𝑴", "M"],
    ["𝑵", "N"],
    ["𝑶", "O"],
    ["𝑷", "P"],
    ["𝑸", "Q"],
    ["𝑹", "R"],
    ["𝑺", "S"],
    ["𝑻", "T"],
    ["𝑼", "U"],
    ["𝑽", "V"],
    ["𝑾", "W"],
    ["𝑿", "X"],
    ["𝒀", "Y"],
    ["𝒁", "Z"],
    ["𝒂", "a"],
    ["𝒃", "b"],
    ["𝒄", "c"],
    ["𝒅", "d"],
    ["𝒆", "e"],
    ["𝒇", "f"],
    ["𝒈", "g"],
    ["𝒉", "h"],
    ["𝒊", "i"],
    ["𝒋", "j"],
    ["𝒌", "k"],
    ["𝒍", "l"],
    ["𝒎", "m"],
    ["𝒏", "n"],
    ["𝒐", "o"],
    ["𝒑", "p"],
    ["𝒒", "q"],
    ["𝒓", "r"],
    ["𝒔", "s"],
    ["𝒕", "t"],
    ["𝒖", "u"],
    ["𝒗", "v"],
    ["𝒘", "w"],
    ["𝒙", "x"],
    ["𝒚", "y"],
    ["𝒛", "z"],
    ["𝓐", "A"],
    ["𝓑", "B"],
    ["𝓒", "C"],
    ["𝓓", "D"],
    ["𝓔", "E"],
    ["𝓕", "F"],
    ["𝓖", "G"],
    ["𝓗", "H"],
    ["𝓘", "I"],
    ["𝓙", "J"],
    ["𝓚", "K"],
    ["𝓛", "L"],
    ["𝓜", "M"],
    ["𝓝", "N"],
    ["𝓞", "O"],
    ["𝓟", "P"],
    ["𝓠", "Q"],
    ["𝓡", "R"],
    ["𝓢", "S"],
    ["𝓣", "T"],
    ["𝓤", "U"],
    ["𝓥", "V"],
    ["𝓦", "W"],
    ["𝓧", "X"],
    ["𝓨", "Y"],
    ["𝓩", "Z"],
    ["𝓪", "a"],
    ["𝓫", "b"],
    ["𝓬", "c"],
    ["𝓭", "d"],
    ["𝓮", "e"],
    ["𝓯", "f"],
    ["𝓰", "g"],
    ["𝓱", "h"],
    ["𝓲", "i"],
    ["𝓳", "j"],
    ["𝓴", "k"],
    ["𝓵", "l"],
    ["𝓶", "m"],
    ["𝓷", "n"],
    ["𝓸", "o"],
    ["𝓹", "p"],
    ["𝓺", "q"],
    ["𝓻", "r"],
    ["𝓼", "s"],
    ["𝓽", "t"],
    ["𝓾", "u"],
    ["𝓿", "v"],
    ["𝔀", "w"],
    ["𝔁", "x"],
    ["𝔂", "y"],
    ["𝔃", "z"],
    ["𝟘", "0"],
    ["𝟙", "1"],
    ["𝟚", "2"],
    ["𝟛", "3"],
    ["𝟜", "4"],
    ["𝟝", "5"],
    ["𝟞", "6"],
    ["𝟟", "7"],
    ["𝟠", "8"],
    ["𝟡", "9"],
    ["𝔸", "A"],
    ["𝔹", "B"],
    ["ℂ", "C"],
    ["𝔻", "D"],
    ["𝔼", "E"],
    ["𝔽", "F"],
    ["𝔾", "G"],
    ["ℍ", "H"],
    ["𝕀", "I"],
    ["𝕁", "J"],
    ["𝕂", "K"],
    ["𝕃", "L"],
    ["𝕄", "M"],
    ["ℕ", "N"],
    ["𝕆", "O"],
    ["ℙ", "P"],
    ["ℚ", "Q"],
    ["ℝ", "R"],
    ["𝕊", "S"],
    ["𝕋", "T"],
    ["𝕌", "U"],
    ["𝕍", "V"],
    ["𝕎", "W"],
    ["𝕏", "X"],
    ["𝕐", "Y"],
    ["ℤ", "Z"],
    ["𝕒", "a"],
    ["𝕓", "b"],
    ["𝕔", "c"],
    ["𝕕", "d"],
    ["𝕖", "e"],
    ["𝕗", "f"],
    ["𝕘", "g"],
    ["𝕙", "h"],
    ["𝕚", "i"],
    ["𝕛", "j"],
    ["𝕜", "k"],
    ["𝕝", "l"],
    ["𝕞", "m"],
    ["𝕟", "n"],
    ["𝕠", "o"],
    ["𝕡", "p"],
    ["𝕢", "q"],
    ["𝕣", "r"],
    ["𝕤", "s"],
    ["𝕥", "t"],
    ["𝕦", "u"],
    ["𝕧", "v"],
    ["𝕨", "w"],
    ["𝕩", "x"],
    ["𝕪", "y"],
    ["𝕫", "z"],
    ["𝟶", "0"],
    ["𝟷", "1"],
    ["𝟸", "2"],
    ["𝟹", "3"],
    ["𝟺", "4"],
    ["𝟻", "5"],
    ["𝟼", "6"],
    ["𝟽", "7"],
    ["𝟾", "8"],
    ["𝟿", "9"],
    ["𝙰", "A"],
    ["𝙱", "B"],
    ["𝙲", "C"],
    ["𝙳", "D"],
    ["𝙴", "E"],
    ["𝙵", "F"],
    ["𝙶", "G"],
    ["𝙷", "H"],
    ["𝙸", "I"],
    ["𝙹", "J"],
    ["𝙺", "K"],
    ["𝙻", "L"],
    ["𝙼", "M"],
    ["𝙽", "N"],
    ["𝙾", "O"],
    ["𝙿", "P"],
    ["𝚀", "Q"],
    ["𝚁", "R"],
    ["𝚂", "S"],
    ["𝚃", "T"],
    ["𝚄", "U"],
    ["𝚅", "V"],
    ["𝚆", "W"],
    ["𝚇", "X"],
    ["𝚈", "Y"],
    ["𝚉", "Z"],
    ["𝚊", "a"],
    ["𝚋", "b"],
    ["𝚌", "c"],
    ["𝚍", "d"],
    ["𝚎", "e"],
    ["𝚏", "f"],
    ["𝚐", "g"],
    ["𝚑", "h"],
    ["𝚒", "i"],
    ["𝚓", "j"],
    ["𝚔", "k"],
    ["𝚕", "l"],
    ["𝚖", "m"],
    ["𝚗", "n"],
    ["𝚘", "o"],
    ["𝚙", "p"],
    ["𝚚", "q"],
    ["𝚛", "r"],
    ["𝚜", "s"],
    ["𝚝", "t"],
    ["𝚞", "u"],
    ["𝚟", "v"],
    ["𝚠", "w"],
    ["𝚡", "x"],
    ["𝚢", "y"],
    ["𝚣", "z"],
    ["𝟢", "0"],
    ["𝟣", "1"],
    ["𝟤", "2"],
    ["𝟥", "3"],
    ["𝟦", "4"],
    ["𝟧", "5"],
    ["𝟨", "6"],
    ["𝟩", "7"],
    ["𝟪", "8"],
    ["𝟫", "9"],
    ["𝖠", "A"],
    ["𝖡", "B"],
    ["𝖢", "C"],
    ["𝖣", "D"],
    ["𝖤", "E"],
    ["𝖥", "F"],
    ["𝖦", "G"],
    ["𝖧", "H"],
    ["𝖨", "I"],
    ["𝖩", "J"],
    ["𝖪", "K"],
    ["𝖫", "L"],
    ["𝖬", "M"],
    ["𝖭", "N"],
    ["𝖮", "O"],
    ["𝖯", "P"],
    ["𝖰", "Q"],
    ["𝖱", "R"],
    ["𝖲", "S"],
    ["𝖳", "T"],
    ["𝖴", "U"],
    ["𝖵", "V"],
    ["𝖶", "W"],
    ["𝖷", "X"],
    ["𝖸", "Y"],
    ["𝖹", "Z"],
    ["𝖺", "a"],
    ["𝖻", "b"],
    ["𝖼", "c"],
    ["𝖽", "d"],
    ["𝖾", "e"],
    ["𝖿", "f"],
    ["𝗀", "g"],
    ["𝗁", "h"],
    ["𝗂", "i"],
    ["𝗃", "j"],
    ["𝗄", "k"],
    ["𝗅", "l"],
    ["𝗆", "m"],
    ["𝗇", "n"],
    ["𝗈", "o"],
    ["𝗉", "p"],
    ["𝗊", "q"],
    ["𝗋", "r"],
    ["𝗌", "s"],
    ["𝗍", "t"],
    ["𝗎", "u"],
    ["𝗏", "v"],
    ["𝗐", "w"],
    ["𝗑", "x"],
    ["𝗒", "y"],
    ["𝗓", "z"],
    ["𝟬", "0"],
    ["𝟭", "1"],
    ["𝟮", "2"],
    ["𝟯", "3"],
    ["𝟰", "4"],
    ["𝟱", "5"],
    ["𝟲", "6"],
    ["𝟳", "7"],
    ["𝟴", "8"],
    ["𝟵", "9"],
    ["𝗔", "A"],
    ["𝗕", "B"],
    ["𝗖", "C"],
    ["𝗗", "D"],
    ["𝗘", "E"],
    ["𝗙", "F"],
    ["𝗚", "G"],
    ["𝗛", "H"],
    ["𝗜", "I"],
    ["𝗝", "J"],
    ["𝗞", "K"],
    ["𝗟", "L"],
    ["𝗠", "M"],
    ["𝗡", "N"],
    ["𝗢", "O"],
    ["𝗣", "P"],
    ["𝗤", "Q"],
    ["𝗥", "R"],
    ["𝗦", "S"],
    ["𝗧", "T"],
    ["𝗨", "U"],
    ["𝗩", "V"],
    ["𝗪", "W"],
    ["𝗫", "X"],
    ["𝗬", "Y"],
    ["𝗭", "Z"],
    ["𝗮", "a"],
    ["𝗯", "b"],
    ["𝗰", "c"],
    ["𝗱", "d"],
    ["𝗲", "e"],
    ["𝗳", "f"],
    ["𝗴", "g"],
    ["𝗵", "h"],
    ["𝗶", "i"],
    ["𝗷", "j"],
    ["𝗸", "k"],
    ["𝗹", "l"],
    ["𝗺", "m"],
    ["𝗻", "n"],
    ["𝗼", "o"],
    ["𝗽", "p"],
    ["𝗾", "q"],
    ["𝗿", "r"],
    ["𝘀", "s"],
    ["𝘁", "t"],
    ["𝘂", "u"],
    ["𝘃", "v"],
    ["𝘄", "w"],
    ["𝘅", "x"],
    ["𝘆", "y"],
    ["𝘇", "z"],
    ["𝘼", "A"],
    ["𝘽", "B"],
    ["𝘾", "C"],
    ["𝘿", "D"],
    ["𝙀", "E"],
    ["𝙁", "F"],
    ["𝙂", "G"],
    ["𝙃", "H"],
    ["𝙄", "I"],
    ["𝙅", "J"],
    ["𝙆", "K"],
    ["𝙇", "L"],
    ["𝙈", "M"],
    ["𝙉", "N"],
    ["𝙊", "O"],
    ["𝙋", "P"],
    ["𝙌", "Q"],
    ["𝙍", "R"],
    ["𝙎", "S"],
    ["𝙏", "T"],
    ["𝙐", "U"],
    ["𝙑", "V"],
    ["𝙒", "W"],
    ["𝙓", "X"],
    ["𝙔", "Y"],
    ["𝙕", "Z"],
    ["𝙖", "a"],
    ["𝙗", "b"],
    ["𝙘", "c"],
    ["𝙙", "d"],
    ["𝙚", "e"],
    ["𝙛", "f"],
    ["𝙜", "g"],
    ["𝙝", "h"],
    ["𝙞", "i"],
    ["𝙟", "j"],
    ["𝙠", "k"],
    ["𝙡", "l"],
    ["𝙢", "m"],
    ["𝙣", "n"],
    ["𝙤", "o"],
    ["𝙥", "p"],
    ["𝙦", "q"],
    ["𝙧", "r"],
    ["𝙨", "s"],
    ["𝙩", "t"],
    ["𝙪", "u"],
    ["𝙫", "v"],
    ["𝙬", "w"],
    ["𝙭", "x"],
    ["𝙮", "y"],
    ["𝙯", "z"],
    ["𝘈", "A"],
    ["𝘉", "B"],
    ["𝘊", "C"],
    ["𝘋", "D"],
    ["𝘌", "E"],
    ["𝘍", "F"],
    ["𝘎", "G"],
    ["𝘏", "H"],
    ["𝘐", "I"],
    ["𝘑", "J"],
    ["𝘒", "K"],
    ["𝘓", "L"],
    ["𝘔", "M"],
    ["𝘕", "N"],
    ["𝘖", "O"],
    ["𝘗", "P"],
    ["𝘘", "Q"],
    ["𝘙", "R"],
    ["𝘚", "S"],
    ["𝘛", "T"],
    ["𝘜", "U"],
    ["𝘝", "V"],
    ["𝘞", "W"],
    ["𝘟", "X"],
    ["𝘠", "Y"],
    ["𝘡", "Z"],
    ["𝘢", "a"],
    ["𝘣", "b"],
    ["𝘤", "c"],
    ["𝘥", "d"],
    ["𝘦", "e"],
    ["𝘧", "f"],
    ["𝘨", "g"],
    ["𝘩", "h"],
    ["𝘪", "i"],
    ["𝘫", "j"],
    ["𝘬", "k"],
    ["𝘭", "l"],
    ["𝘮", "m"],
    ["𝘯", "n"],
    ["𝘰", "o"],
    ["𝘱", "p"],
    ["𝘲", "q"],
    ["𝘳", "r"],
    ["𝘴", "s"],
    ["𝘵", "t"],
    ["𝘶", "u"],
    ["𝘷", "v"],
    ["𝘸", "w"],
    ["𝘹", "x"],
    ["𝘺", "y"],
    ["𝘻", "z"],
    ["⑴", "1"],
    ["⑵", "2"],
    ["⑶", "3"],
    ["⑷", "4"],
    ["⑸", "5"],
    ["⑹", "6"],
    ["⑺", "7"],
    ["⑻", "8"],
    ["⑼", "9"],
    ["⒜", "a"],
    ["⒝", "b"],
    ["⒞", "c"],
    ["⒟", "d"],
    ["⒠", "e"],
    ["⒡", "f"],
    ["⒢", "g"],
    ["⒣", "h"],
    ["⒤", "i"],
    ["⒥", "j"],
    ["⒦", "k"],
    ["⒧", "l"],
    ["⒨", "m"],
    ["⒩", "n"],
    ["⒪", "o"],
    ["⒫", "p"],
    ["⒬", "q"],
    ["⒭", "r"],
    ["⒮", "s"],
    ["⒯", "t"],
    ["⒰", "u"],
    ["⒱", "v"],
    ["⒲", "w"],
    ["⒳", "x"],
    ["⒴", "y"],
    ["⒵", "z"],
    ["🇦", "a"],
    ["🇧", "b"],
    ["🇨", "c"],
    ["🇩", "d"],
    ["🇪", "e"],
    ["🇫", "f"],
    ["🇬", "g"],
    ["🇭", "h"],
    ["🇮", "i"],
    ["🇯", "j"],
    ["🇰", "k"],
    ["🇱", "l"],
    ["🇲", "m"],
    ["🇳", "n"],
    ["🇴", "o"],
    ["🇵", "p"],
    ["🇶", "q"],
    ["🇷", "r"],
    ["🇸", "s"],
    ["🇹", "t"],
    ["🇺", "u"],
    ["🇻", "v"],
    ["🇼", "w"],
    ["🇽", "x"],
    ["🇾", "y"],
    ["🇿", "z"],
    ["⧆", "*"],
    ["⊞", "+"],
    ["⊟", "-"],
    ["⊡", "."],
    ["⧄", "/"],
    ["🄰", "A"],
    ["🄱", "B"],
    ["🄲", "C"],
    ["🄳", "D"],
    ["🄴", "E"],
    ["🄵", "F"],
    ["🄶", "G"],
    ["🄷", "H"],
    ["🄸", "I"],
    ["🄹", "J"],
    ["🄺", "K"],
    ["🄻", "L"],
    ["🄼", "M"],
    ["🄽", "N"],
    ["🄾", "O"],
    ["🄿", "P"],
    ["🅀", "Q"],
    ["🅁", "R"],
    ["🅂", "S"],
    ["🅃", "T"],
    ["🅄", "U"],
    ["🅅", "V"],
    ["🅆", "W"],
    ["🅇", "X"],
    ["🅈", "Y"],
    ["🅉", "Z"],
    ["⧅", "\\"],
    ["🅰", "A"],
    ["🅱", "B"],
    ["🅲", "C"],
    ["🅳", "D"],
    ["🅴", "E"],
    ["🅵", "F"],
    ["🅶", "G"],
    ["🅷", "H"],
    ["🅸", "I"],
    ["🅹", "J"],
    ["🅺", "K"],
    ["🅻", "L"],
    ["🅼", "M"],
    ["🅽", "N"],
    ["🅾", "O"],
    ["🅿", "P"],
    ["🆀", "Q"],
    ["🆁", "R"],
    ["🆂", "S"],
    ["🆃", "T"],
    ["🆄", "U"],
    ["🆅", "V"],
    ["🆆", "W"],
    ["🆇", "X"],
    ["🆈", "Y"],
    ["🆉", "Z"],
    ["󠀠", " "],
    ["󠀡", "!"],
    ["󠀣", "#"],
    ["󠀤", "$"],
    ["󠀥", "%"],
    ["󠀦", "&"],
    ["󠀧", "'"],
    ["󠀨", "("],
    ["󠀩", ")"],
    ["󠀪", "*"],
    ["󠀫", "+"],
    ["󠀬", ","],
    ["󠀭", "-"],
    ["󠀮", "."],
    ["󠀯", "/"],
    ["󠀰", "0"],
    ["󠀱", "1"],
    ["󠀲", "2"],
    ["󠀳", "3"],
    ["󠀴", "4"],
    ["󠀵", "5"],
    ["󠀶", "6"],
    ["󠀷", "7"],
    ["󠀸", "8"],
    ["󠀹", "9"],
    ["󠀺", ":"],
    ["󠀻", ";"],
    ["󠀽", "="],
    ["󠀿", "?"],
    ["󠁀", "@"],
    ["󠁁", "A"],
    ["󠁂", "B"],
    ["󠁃", "C"],
    ["󠁄", "D"],
    ["󠁅", "E"],
    ["󠁆", "F"],
    ["󠁇", "G"],
    ["󠁈", "H"],
    ["󠁉", "I"],
    ["󠁊", "J"],
    ["󠁋", "K"],
    ["󠁌", "L"],
    ["󠁍", "M"],
    ["󠁎", "N"],
    ["󠁏", "O"],
    ["󠁐", "P"],
    ["󠁑", "Q"],
    ["󠁒", "R"],
    ["󠁓", "S"],
    ["󠁔", "T"],
    ["󠁕", "U"],
    ["󠁖", "V"],
    ["󠁗", "W"],
    ["󠁘", "X"],
    ["󠁙", "Y"],
    ["󠁚", "Z"],
    ["󠁛", "["],
    ["󠁜", "\\"],
    ["󠁝", "]"],
    ["󠁞", "^"],
    ["󠁟", "_"],
    ["󠁠", "`"],
    ["󠁡", "a"],
    ["󠁢", "b"],
    ["󠁣", "c"],
    ["󠁤", "d"],
    ["󠁥", "e"],
    ["󠁦", "f"],
    ["󠁧", "g"],
    ["󠁨", "h"],
    ["󠁩", "i"],
    ["󠁪", "j"],
    ["󠁫", "k"],
    ["󠁬", "l"],
    ["󠁭", "m"],
    ["󠁮", "n"],
    ["󠁯", "o"],
    ["󠁰", "p"],
    ["󠁱", "q"],
    ["󠁲", "r"],
    ["󠁳", "s"],
    ["󠁴", "t"],
    ["󠁵", "u"],
    ["󠁶", "v"],
    ["󠁷", "w"],
    ["󠁸", "x"],
    ["󠁹", "y"],
    ["󠁺", "z"],
    ["󠁻", "{"],
    ["󠁼", "|"],
    ["󠁽", "}"],
    ["󠁾", "~"],
    ["Ӳ", "Y"],
    ["ӳ", "y"],
    ["ﾑ", "a"],
    ["乃", "b"],
    ["乇", "e"],
    ["ｷ", "f"],
    ["ん", "h"],
    ["ﾉ", "i"],
    ["ﾌ", "j"],
    ["ズ", "k"],
    ["ﾚ", "l"],
    ["ﾶ", "m"],
    ["刀", "n"],
    ["ｱ", "p"],
    ["尺", "r"],
    ["丂", "s"],
    ["ｲ", "t"],
    ["√", "v"],
    ["ﾒ", "x"],
    ["ﾘ", "y"],
    ["乙", "z"],
    ["܁", "."],
    ["ค", "a"],
    ["๒", "b"],
    ["ƈ", "c"],
    ["ɗ", "d"],
    ["ﻉ", "e"],
    ["ि", "f"],
    ["ﻭ", "g"],
    ["ɦ", "h"],
    ["ٱ", "i"],
    ["ﻝ", "j"],
    ["ᛕ", "k"],
    ["ɭ", "l"],
    ["๓", "m"],
    ["ก", "n"],
    ["ѻ", "o"],
    ["ρ", "p"],
    ["۹", "q"],
    ["ɼ", "r"],
    ["ร", "s"],
    ["Շ", "T"],
    ["પ", "u"],
    ["۷", "v"],
    ["ฝ", "w"],
    ["ซ", "x"],
    ["ץ", "y"],
    ["չ", "z"],
    ["α", "a"],
    ["в", "b"],
    ["¢", "c"],
    ["∂", "d"],
    ["є", "e"],
    ["ƒ", "f"],
    ["н", "h"],
    ["ι", "i"],
    ["נ", "j"],
    ["к", "k"],
    ["ℓ", "l"],
    ["м", "m"],
    ["η", "n"],
    ["σ", "o"],
    ["я", "r"],
    ["ѕ", "s"],
    ["т", "t"],
    ["υ", "u"],
    ["ν", "v"],
    ["ω", "w"],
    ["χ", "x"],
    ["у", "y"],
    ["ς", "c"],
    ["๔", "d"],
    ["Ŧ", "F"],
    ["ﻮ", "g"],
    ["ђ", "h"],
    ["เ", "i"],
    ["ן", "j"],
    ["ภ", "n"],
    ["๏", "o"],
    ["ק", "p"],
    ["ợ", "q"],
    ["г", "r"],
    ["ย", "u"],
    ["ש", "v"],
    ["ฬ", "w"],
    ["א", "x"],
    ["Д", "A"],
    ["Б", "B"],
    ["Ҁ", "C"],
    ["ↁ", "d"],
    ["Є", "E"],
    ["Н", "H"],
    ["І", "I"],
    ["Ј", "J"],
    ["Ќ", "K"],
    ["М", "M"],
    ["И", "N"],
    ["Ф", "O"],
    ["Р", "P"],
    ["Я", "R"],
    ["Ѕ", "S"],
    ["Г", "T"],
    ["Ц", "U"],
    ["Щ", "W"],
    ["Ж", "X"],
    ["Ч", "Y"],
    ["а", "a"],
    ["ъ", "b"],
    ["с", "c"],
    ["э", "e"],
    ["Ђ", "h"],
    ["і", "i"],
    ["ј", "j"],
    ["и", "n"],
    ["о", "o"],
    ["р", "p"],
    ["ѓ", "r"],
    ["ц", "u"],
    ["ш", "w"],
    ["х", "x"],
    ["Ў", "y"],
    ["ል", "a"],
    ["ጌ", "b"],
    ["ር", "c"],
    ["ዕ", "d"],
    ["ቿ", "e"],
    ["ቻ", "f"],
    ["ኗ", "g"],
    ["ዘ", "h"],
    ["ጎ", "i"],
    ["ጋ", "j"],
    ["ጕ", "k"],
    ["ረ", "l"],
    ["ጠ", "m"],
    ["ክ", "n"],
    ["ዐ", "o"],
    ["የ", "p"],
    ["ዒ", "q"],
    ["ዪ", "r"],
    ["ነ", "s"],
    ["ፕ", "t"],
    ["ሁ", "u"],
    ["ሀ", "v"],
    ["ሠ", "w"],
    ["ሸ", "x"],
    ["ሃ", "y"],
    ["ጊ", "z"],
    ["𝔄", "A"],
    ["𝔅", "B"],
    ["ℭ", "C"],
    ["𝔇", "D"],
    ["𝔈", "E"],
    ["𝔉", "F"],
    ["𝔊", "G"],
    ["ℌ", "H"],
    ["ℑ", "I"],
    ["𝔍", "J"],
    ["𝔎", "K"],
    ["𝔏", "L"],
    ["𝔐", "M"],
    ["𝔑", "N"],
    ["𝔒", "O"],
    ["𝔓", "P"],
    ["𝔔", "Q"],
    ["ℜ", "R"],
    ["𝔖", "S"],
    ["𝔗", "T"],
    ["𝔘", "U"],
    ["𝔙", "V"],
    ["𝔚", "W"],
    ["𝔛", "X"],
    ["𝔜", "Y"],
    ["ℨ", "Z"],
    ["𝔞", "a"],
    ["𝔟", "b"],
    ["𝔠", "c"],
    ["𝔡", "d"],
    ["𝔢", "e"],
    ["𝔣", "f"],
    ["𝔤", "g"],
    ["𝔥", "h"],
    ["𝔦", "i"],
    ["𝔧", "j"],
    ["𝔨", "k"],
    ["𝔩", "l"],
    ["𝔪", "m"],
    ["𝔫", "n"],
    ["𝔬", "o"],
    ["𝔭", "p"],
    ["𝔮", "q"],
    ["𝔯", "r"],
    ["𝔰", "s"],
    ["𝔱", "t"],
    ["𝔲", "u"],
    ["𝔳", "v"],
    ["𝔴", "w"],
    ["𝔵", "x"],
    ["𝔶", "y"],
    ["𝔷", "z"],
    ["⸚", "-"],
    ["∵", "."],
    ["ӟ", "3"],
    ["Ё", "E"],
    ["Ї", "I"],
    ["ᴀ", "A"],
    ["ʙ", "B"],
    ["ᴄ", "C"],
    ["ᴅ", "D"],
    ["ᴇ", "E"],
    ["ꜰ", "F"],
    ["ɢ", "G"],
    ["ʜ", "H"],
    ["ɪ", "I"],
    ["ᴊ", "J"],
    ["ᴋ", "K"],
    ["ʟ", "L"],
    ["ᴍ", "M"],
    ["ɴ", "N"],
    ["ᴏ", "O"],
    ["ᴩ", "P"],
    ["ʀ", "R"],
    ["ꜱ", "S"],
    ["ᴛ", "T"],
    ["ᴜ", "U"],
    ["ᴠ", "V"],
    ["ᴡ", "W"],
    ["ᴢ", "Z"],
    ["ƻ", "2"],
    ["Ⱥ", "A"],
    ["Ƀ", "B"],
    ["Ȼ", "C"],
    ["Đ", "D"],
    ["Ɇ", "E"],
    ["Ǥ", "G"],
    ["Ħ", "H"],
    ["Ɨ", "I"],
    ["Ɉ", "J"],
    ["Ꝁ", "K"],
    ["Ł", "L"],
    ["Ø", "O"],
    ["Ᵽ", "P"],
    ["Ꝗ", "Q"],
    ["Ɍ", "R"],
    ["ᵾ", "U"],
    ["Ɏ", "Y"],
    ["Ƶ", "Z"],
    ["ƀ", "b"],
    ["ȼ", "c"],
    ["đ", "d"],
    ["ɇ", "e"],
    ["ǥ", "g"],
    ["ħ", "h"],
    ["ɨ", "i"],
    ["ɉ", "j"],
    ["ꝁ", "k"],
    ["ł", "l"],
    ["ø", "o"],
    ["ᵽ", "p"],
    ["ꝗ", "q"],
    ["ɍ", "r"],
    ["ŧ", "t"],
    ["ɏ", "y"],
    ["ƶ", "z"],
    ["₀", "0"],
    ["₁", "1"],
    ["₂", "2"],
    ["₃", "3"],
    ["₄", "4"],
    ["₅", "5"],
    ["₆", "6"],
    ["₇", "7"],
    ["₈", "8"],
    ["₉", "9"],
    ["ₐ", "a"],
    ["ₑ", "e"],
    ["ₕ", "h"],
    ["ᵢ", "i"],
    ["ⱼ", "j"],
    ["ₖ", "k"],
    ["ₗ", "l"],
    ["ₘ", "m"],
    ["ₙ", "n"],
    ["ₒ", "o"],
    ["ₚ", "p"],
    ["ᵣ", "r"],
    ["ₛ", "s"],
    ["ₜ", "t"],
    ["ᵤ", "u"],
    ["ᵥ", "v"],
    ["ₓ", "x"],
    ["⁰", "0"],
    ["¹", "1"],
    ["²", "2"],
    ["³", "3"],
    ["⁴", "4"],
    ["⁵", "5"],
    ["⁶", "6"],
    ["⁷", "7"],
    ["⁸", "8"],
    ["⁹", "9"],
    ["ᴬ", "A"],
    ["ᴮ", "B"],
    ["ᶜ", "c"],
    ["ᴰ", "D"],
    ["ᴱ", "E"],
    ["ᶠ", "f"],
    ["ᴳ", "G"],
    ["ᴴ", "H"],
    ["ᴵ", "I"],
    ["ᴶ", "J"],
    ["ᴷ", "K"],
    ["ᴸ", "L"],
    ["ᴹ", "M"],
    ["ᴺ", "N"],
    ["ᴼ", "O"],
    ["ᴾ", "P"],
    ["ᴿ", "R"],
    ["ˢ", "s"],
    ["ᵀ", "T"],
    ["ᵁ", "U"],
    ["ⱽ", "V"],
    ["ᵂ", "W"],
    ["ˣ", "x"],
    ["ʸ", "y"],
    ["ᶻ", "z"],
    ["ᵃ", "a"],
    ["ᵇ", "b"],
    ["ᵈ", "d"],
    ["ᵉ", "e"],
    ["ᵍ", "g"],
    ["ʰ", "h"],
    ["ⁱ", "i"],
    ["ʲ", "j"],
    ["ᵏ", "k"],
    ["ˡ", "l"],
    ["ᵐ", "m"],
    ["ⁿ", "n"],
    ["ᵒ", "o"],
    ["ᵖ", "p"],
    ["ʳ", "r"],
    ["ᵗ", "t"],
    ["ᵘ", "u"],
    ["ᵛ", "v"],
    ["ʷ", "w"],
    ["¡", "!"],
    ["⅋", "&"],
    ["‘", ","],
    ["¿", "?"],
    ["ɐ", "a"],
    ["ɔ", "c"],
    ["ǝ", "e"],
    ["ɟ", "f"],
    ["ƃ", "g"],
    ["ɥ", "h"],
    ["ı", "i"],
    ["ɾ", "j"],
    ["ʞ", "k"],
    ["ɯ", "m"],
    ["ɹ", "r"],
    ["ʇ", "t"],
    ["𐌡", "V"],
    ["ʍ", "w"],
    ["ʎ", "y"],
    ["ʌ", "v"],
    ["߁", "1"],
    ["⁏", ";"],
    ["⸮", "?"],
    ["Ↄ", "C"],
    ["Ǝ", "E"],
    ["ꟻ", "f"],
    ["⅃", "L"],
    ["ᴎ", "N"],
    ["ꟼ", "P"],
    ["ᴙ", "R"],
    ["Ꙅ", "S"],
    ["ↄ", "c"],
    ["ɘ", "e"],
    ["ꙅ", "s"],
    ["∽", "~"],
    ["℆", "%"],
    ["✸", "*"],
    ["ʘ", "0"],
    ["❶", "1"],
    ["❸", "3"],
    ["❹", "4"],
    ["➄", "5"],
    ["❻", "6"],
    ["❼", "7"],
    ["➈", "9"],
    ["⋐", "<"],
    ["⊒", ">"],
    ["𝒸", "c"],
    ["丅", "t"],
    ["〖", "["],
    ["〛", "]"],
    ["β", "b"],
    ["𝓂", "m"],
    ["ㄚ", "y"],
    ["𝒜", "A"],
    ["𝐵", "B"],
    ["𝒞", "C"],
    ["𝒟", "D"],
    ["𝐸", "E"],
    ["𝐹", "F"],
    ["𝒢", "G"],
    ["𝐻", "H"],
    ["𝐼", "I"],
    ["𝒥", "J"],
    ["𝒦", "K"],
    ["𝐿", "L"],
    ["𝑀", "M"],
    ["𝒩", "N"],
    ["𝒪", "O"],
    ["𝒫", "P"],
    ["𝒬", "Q"],
    ["𝑅", "R"],
    ["𝒮", "S"],
    ["𝒯", "T"],
    ["𝒰", "U"],
    ["𝒱", "V"],
    ["𝒲", "W"],
    ["𝒳", "X"],
    ["𝒴", "Y"],
    ["𝒵", "Z"],
    ["𝒶", "a"],
    ["𝒷", "b"],
    ["𝒹", "d"],
    ["𝑒", "e"],
    ["𝒻", "f"],
    ["𝑔", "g"],
    ["𝒽", "h"],
    ["𝒾", "i"],
    ["𝒿", "j"],
    ["𝓀", "k"],
    ["𝓁", "l"],
    ["𝓃", "n"],
    ["𝑜", "o"],
    ["𝓅", "p"],
    ["𝓆", "q"],
    ["𝓇", "r"],
    ["𝓈", "s"],
    ["𝓉", "t"],
    ["𝓊", "u"],
    ["𝓋", "v"],
    ["𝓌", "w"],
    ["𝓍", "x"],
    ["𝓎", "y"],
    ["𝓏", "z"],
    ["❣", "!"],
    ["❝", "\""],
    ["🌸", "0"],
    ["❁", "O"],
    ["💗", "o"],
    ["ᴘ", "P"],
    ["ʏ", "Y"],
    ["₍", "("],
    ["₎", ")"],
    ["₊", "+"],
    ["₋", "-"],
    ["₌", "="],
    ["⁽", "("],
    ["⁾", ")"],
    ["⁺", "+"],
    ["⁻", "-"],
    ["⁼", "="],
    ["Ⴆ", "b"],
    ["ԃ", "d"],
    ["ҽ", "e"],
    ["ϝ", "f"],
    ["ɠ", "g"],
    ["ԋ", "h"],
    ["ʝ", "j"],
    ["ƙ", "k"],
    ["ʅ", "l"],
    ["ɱ", "m"],
    ["ɳ", "n"],
    ["ϙ", "q"],
    ["ʂ", "s"],
    ["ƚ", "t"],
    ["ʋ", "v"],
    ["ყ", "y"],
    ["ȥ", "z"],
    ["ǟ", "a"],
    ["ɮ", "b"],
    ["ɖ", "d"],
    ["ɛ", "e"],
    ["ʄ", "f"],
    ["ӄ", "k"],
    ["ռ", "n"],
    ["օ", "o"],
    ["ք", "p"],
    ["զ", "q"],
    ["ֆ", "s"],
    ["ȶ", "t"],
    ["ʊ", "u"],
    ["ա", "w"],
    ["Ӽ", "X"],
    ["ʐ", "z"],
    ["Ꮧ", "a"],
    ["Ᏸ", "b"],
    ["ፈ", "c"],
    ["Ꮄ", "d"],
    ["Ꮛ", "e"],
    ["Ꭶ", "f"],
    ["Ꮆ", "g"],
    ["Ꮒ", "h"],
    ["Ꭵ", "i"],
    ["Ꮰ", "j"],
    ["Ꮶ", "k"],
    ["Ꮭ", "l"],
    ["Ꮇ", "m"],
    ["Ꮑ", "n"],
    ["Ꭷ", "o"],
    ["Ꭾ", "p"],
    ["Ꭴ", "q"],
    ["Ꮢ", "r"],
    ["Ꮥ", "s"],
    ["Ꮦ", "t"],
    ["Ꮼ", "u"],
    ["Ꮙ", "v"],
    ["Ꮗ", "w"],
    ["ጀ", "x"],
    ["Ꭹ", "y"],
    ["ፚ", "z"],
    ["ც", "b"],
    ["ɧ", "h"],
    ["Ɩ", "L"],
    ["ŋ", "n"],
    ["℘", "P"],
    ["ཞ", "r"],
    ["ɬ", "t"],
    ["ῳ", "w"],
    ["ҳ", "x"],
    ["ʑ", "z"],
    ["๖", "b"],
    ["໓", "d"],
    ["ງ", "g"],
    ["ว", "j"],
    ["ຖ", "n"],
    ["໐", "o"],
    ["๑", "q"],
    ["น", "u"],
    ["ง", "v"],
    ["ຟ", "w"],
    ["ฯ", "y"],
    ["ຊ", "z"],
    ["Λ", "A"],
    ["ᄃ", "c"],
    ["Σ", "E"],
    ["Ή", "H"],
    ["ᄂ", "l"],
    ["П", "N"],
    ["Ө", "O"],
    ["Ƨ", "S"],
    ["Ƭ", "T"],
    ["ß", "b"],
    ["Ð", "D"],
    ["£", "f"],
    ["þ", "p"],
    ["§", "s"],
    ["†", "t"],
    ["×", "x"],
    ["¥", "y"],
    ["ð", "o"],
    ["µ", "u"],
    ["₳", "a"],
    ["฿", "b"],
    ["₵", "c"],
    ["₣", "f"],
    ["₲", "g"],
    ["Ⱨ", "H"],
    ["₭", "k"],
    ["Ⱡ", "L"],
    ["₥", "m"],
    ["₦", "n"],
    ["₱", "p"],
    ["Ɽ", "R"],
    ["₴", "s"],
    ["₮", "t"],
    ["Ʉ", "U"],
    ["₩", "w"],
    ["Ӿ", "X"],
    ["Ⱬ", "Z"],
    ["卂", "a"],
    ["匚", "c"],
    ["ᗪ", "d"],
    ["千", "f"],
    ["卄", "h"],
    ["丨", "i"],
    ["Ҝ", "K"],
    ["ㄥ", "l"],
    ["爪", "m"],
    ["几", "n"],
    ["ㄖ", "o"],
    ["卩", "p"],
    ["Ɋ", "Q"],
    ["ㄒ", "t"],
    ["ㄩ", "u"],
    ["ᐯ", "v"],
    ["山", "w"],
    ["乂", "x"],
    ["り", "d"],
    ["ム", "g"],
    ["の", "o"],
    ["ゐ", "q"],
    ["ひ", "u"],
    ["　", " "],
    ["░", " "],
    ["Ξ", "E"],
    ["♢", "O"],
    ["ϩ", "2"],
    ["Ӡ", "3"],
    ["५", "4"],
    ["Ƽ", "5"],
    ["Ϭ", "6"],
    ["९", "9"],
    ["↻", "C"],
    ["Ꭰ", "D"],
    ["Ɛ", "E"],
    ["Ƒ", "F"],
    ["Ɠ", "G"],
    ["Ƕ", "H"],
    ["ل", "J"],
    ["Ҡ", "K"],
    ["Ꝉ", "L"],
    ["Ɱ", "M"],
    ["ហ", "N"],
    ["ට", "O"],
    ["φ", "P"],
    ["Ҩ", "Q"],
    ["འ", "R"],
    ["Ϛ", "S"],
    ["Ͳ", "T"],
    ["Ա", "U"],
    ["Ỽ", "V"],
    ["చ", "W"],
    ["ჯ", "X"],
    ["Ӌ", "Y"],
    ["ɀ", "Z"],
    ["ҍ", "b"],
    ["ժ", "d"],
    ["ց", "g"],
    ["հ", "h"],
    ["ҟ", "k"],
    ["Ӏ", "l"],
    ["ղ", "n"],
    ["է", "t"],
    ["մ", "u"],
    ["ѵ", "v"],
    ["վ", "y"],
    ["Հ", "z"],
    ["ᗩ", "a"],
    ["ᗷ", "b"],
    ["ᑕ", "c"],
    ["ᖴ", "f"],
    ["ᕼ", "h"],
    ["ᒍ", "j"],
    ["ᒪ", "l"],
    ["ᗰ", "m"],
    ["ᑎ", "n"],
    ["ᑭ", "p"],
    ["ᑫ", "q"],
    ["ᖇ", "r"],
    ["ᔕ", "s"],
    ["ᑌ", "u"],
    ["ᗯ", "w"],
    ["᙭", "x"],
    ["ᘔ", "z"],
    ["ᑢ", "c"],
    ["ᕲ", "d"],
    ["ᘿ", "e"],
    ["ᘜ", "g"],
    ["ᓰ", "i"],
    ["ᒚ", "j"],
    ["ᘻ", "m"],
    ["ᘉ", "n"],
    ["ᓍ", "o"],
    ["ᕵ", "p"],
    ["ᕴ", "q"],
    ["ᖶ", "t"],
    ["ᑘ", "u"],
    ["ᐺ", "v"],
    ["ᘺ", "w"],
    ["ᖻ", "y"],
    ["ᗱ", "z"],
    ["🙰", "j"],
    ["🙵", "k"],
    ["😍", "o"],
    ["❤", "o"],
    ["💮", "0"],
    ["🌺", "O"],
    ["🍪", "0"],
    ["❢", "!"],
    ["🍬", "0"],
    ["♡", "O"],
    ["🏵", "o"],
    ["℁", "%"],
    ["✨", "*"],
    ["Ѳ", "0"],
    ["➁", "2"],
    ["➃", "4"],
    ["❺", "5"],
    ["➅", "6"],
    ["➇", "8"],
    ["❮", "<"],
    ["⋟", ">"],
    ["ق", "G"],
    ["Ƥ", "P"],
    ["ү", "Y"],
    ["】", "]"],
    ["℀", "%"],
    ["➂", "3"],
    ["❾", "9"],
    ["＜", "<"],
    ["ғ", "f"],
    ["ᶰ", "N"],
    ["〗", "]"],
    ["ᗝ", "o"],
    ["✶", "*"],
    ["❽", "8"],
    ["≼", "<"],
    ["》", ">"],
    ["〚", "["],
    ["ά", "a"],
    ["Ỗ", "O"],
    ["Ữ", "u"],
    ["✼", "*"],
    ["❷", "2"],
    ["➆", "7"],
    ["⊏", "<"],
    ["＞", ">"],
    ["έ", "e"],
    ["ώ", "w"],
    ["【", "["],
    ["ᵠ", "q"],
    ["֍", "*"],
    ["➀", "1"],
    ["≪", "<"],
    ["⋝", ">"],
    ["〙", "]"],
    ["ڶ", "j"],
    ["℅", "%"],
    ["❄", "*"],
    ["⫷", "<"],
    ["〘", "["],
    ["ᒎ", "j"],
    ["✱", "*"],
    ["≽", ">"],
    ["ή", "n"],
    ["✷", "*"],
    ["≿", ">"],
    ["ᶤ", "I"],
    ["℃", "c"],
    ["✳", "*"],
    ["⊑", "<"],
    ["✽", "*"],
    ["❱", ">"],
    ["Ω", "Q"],
    ["Δ", "a"],
    ["ϻ", "m"],
    ["⅍", "%"],
    ["❃", "*"],
    ["≾", "<"],
    ["⊃", ">"],
    ["֎", "*"],
    ["€", "E"],
    ["ℱ", "F"],
    ["✪", "*"],
    ["❰", "<"],
    ["ί", "i"],
    ["ε", "E"],
    ["Μ", "m"],
    ["❀", "*"],
    ["Ƴ", "y"],
    ["★", "*"],
    ["⋑", ">"],
    ["⫸", ">"],
    ["✦", "*"],
    ["☽", ">"],
    ["Ǘ", "u"],
    ["✬", "*"],
    ["☾", "<"],
    ["≫", ">"],
    ["☯", "O"],
    ["💞", "o"],
    ["𝐴", "A"],
    ["𝐶", "C"],
    ["𝐷", "D"],
    ["𝐺", "G"],
    ["𝐽", "J"],
    ["𝐾", "K"],
    ["𝑁", "N"],
    ["𝑂", "O"],
    ["𝑃", "P"],
    ["𝑄", "Q"],
    ["𝑆", "S"],
    ["𝑇", "T"],
    ["𝑈", "U"],
    ["𝑉", "V"],
    ["𝑊", "W"],
    ["𝑋", "X"],
    ["𝑌", "Y"],
    ["𝑍", "Z"],
    ["𝑎", "a"],
    ["𝑏", "b"],
    ["𝑐", "c"],
    ["𝑑", "d"],
    ["𝑓", "f"],
    ["ℎ", "h"],
    ["𝑖", "i"],
    ["𝑗", "j"],
    ["𝑘", "k"],
    ["𝑙", "l"],
    ["𝑚", "m"],
    ["𝑛", "n"],
    ["𝑝", "p"],
    ["𝑞", "q"],
    ["𝑟", "r"],
    ["𝑠", "s"],
    ["𝑡", "t"],
    ["𝑢", "u"],
    ["𝑣", "v"],
    ["𝑤", "w"],
    ["𝑥", "x"],
    ["𝑦", "y"],
    ["𝑧", "z"],
    ["ℬ", "B"],
    ["ℰ", "E"],
    ["ℋ", "H"],
    ["ℐ", "I"],
    ["ℒ", "L"],
    ["ℳ", "M"],
    ["ℛ", "R"],
    ["ℯ", "e"],
    ["ℊ", "g"],
    ["ℴ", "o"],
    ["⓪", "0"],
    ["🄐", "A"],
    ["🄑", "B"],
    ["🄒", "C"],
    ["🄓", "D"],
    ["🄔", "E"],
    ["🄕", "F"],
    ["🄖", "G"],
    ["🄗", "H"],
    ["🄘", "I"],
    ["🄙", "J"],
    ["🄚", "K"],
    ["🄛", "L"],
    ["🄜", "M"],
    ["🄝", "N"],
    ["🄞", "O"],
    ["🄟", "P"],
    ["🄠", "Q"],
    ["🄡", "R"],
    ["🄢", "S"],
    ["🄣", "T"],
    ["🄤", "U"],
    ["🄥", "V"],
    ["🄦", "W"],
    ["🄧", "X"],
    ["🄨", "Y"],
    ["🄩", "Z"],
    ["＂", "\""],
    ["󠀢", "\""],
    ["󠀼", "<"],
    ["󠀾", ">"],
]);
