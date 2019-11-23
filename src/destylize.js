function fix_text(text) {
    replacements = []
    for (const c of text) {
        if (a = char_map.get(c)) {
            replacements.push([c, a]);
        }
    }
    for (r of replacements) {
        text = text.replace(r[0], r[1]);
    }
    return text;
}

function scan_node(node) {
    if (node.nodeType == Node.TEXT_NODE) {
        // Don't replace in text entry areas
        if (!node.parentNode || node.parentNode.nodeName != 'TEXTAREA') {
            node.textContent = fix_text(node.textContent);
        }
    } else {
        node.childNodes.forEach(scan_node);
    }
}

console.log("Started Destylize!");
scan_node(document.body);
