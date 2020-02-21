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

class Scanner {
    constructor() {
        this.observer = new MutationObserver((mutations) => {
            for (let i = 0; i < mutations.length; i++) {
                let m = mutations[i];
                if (m.type == "characterData") {
                    this.scan_node(m.target);
                }
                if (m.addedNodes) {
                    for (let node of m.addedNodes) {
                        this.scan_node(node);
                    }
                }
            }
        });
        this.enabled = false;
    }

    scan_node(node) {
        if (node.nodeType == Node.TEXT_NODE) {
            // Don't replace in text entry areas
            if (!node.parentNode || node.parentNode.nodeName != "TEXTAREA") {
                node.textContent = fix_text(node.textContent);
            }
        } else {
            for (let i = 0; i < node.childNodes.length; i++) {
                let child = node.childNodes[i];
                this.scan_node(child);
            }
        }
    }

    enable() {
        if (this.enabled) {
            return;
        }
        // initial scan
        this.scan_node(document.body);
        this.observer.observe(document.body, {childList: true, subtree: true});
        this.enabled = true;
    }

    disable() {
        if (!this.enabled) {
            return;
        }
        this.observer.disconnect();
        this.enabled = false;
        location.reload(true);
    }
}
