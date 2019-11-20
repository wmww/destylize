function fix_text(text) {
    text = text.replace('𝐟', 'f');
    text = text.replace('𝐨', 'o');
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

scan_node(document.body);
