const scanner = new Scanner();

function set_enabled(enabled) {
    if (enabled) {
        scanner.enable();
        console.log("Destylize enbled!");
    }
    else {
        scanner.disable();
        console.log("Destylize disabled");
    }
}

function local_storage_change(changes, area) {
    if (area != "local") {
        return;
    }

    if ("enabled" in changes) {
        if ("newValue" in changes.enabled) {
            set_enabled(changes.enabled.newValue);
        }
    }
}

browser.storage.onChanged.addListener(local_storage_change);
browser.storage.local.get("enabled", value => set_enabled(value.enabled));
console.log("Destylize initialized");
