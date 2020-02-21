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
        this.replacements = 0;
    }

    scan_node(node) {
        if (node.nodeType == Node.TEXT_NODE) {
            // Don't replace in text entry areas
            if (!node.parentNode || node.parentNode.nodeName != "TEXTAREA") {
                const text = node.textContent;
                const fixed = fix_text(text);
                if (text !== fixed) {
                    node.textContent = fixed;
                    this.replacements++;
                }
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
        if (this.replacements > 0) {
            location.reload(true);
            this.replacements = 0;
        }
    }

    send_replacement_count() {
        const count = this.enabled ? this.replacements : null;
        browser.runtime.sendMessage({what: "replacements", replacements: count});
    }
}
