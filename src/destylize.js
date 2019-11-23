function fix_text(text) {
    replacements = []
    for (let c of text) {
        if (a = char_map.get(c)) {
            replacements.push([c, a]);
        }
    }
    for (let r of replacements) {
        text = text.replace(r[0], r[1]);
    }
    return text;
}

function scan_node(node) {
    if (node.nodeType == Node.TEXT_NODE) {
        // Don't replace in text entry areas
        if (!node.parentNode || node.parentNode.nodeName != "TEXTAREA") {
            node.textContent = fix_text(node.textContent);
        }
    } else {
        node.childNodes.forEach(scan_node);
    }
}

console.log("Started Destylize!");

scan_node(document.body);

const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
        if (m.type == "characterData") {
            scan_node(m.target);
        }
        if (m.addedNodes) {
            for (let node of m.addedNodes) {
                scan_node(node);
            }
        }
    });
});

observer.observe(document.body, {childList: true, subtree: true});
