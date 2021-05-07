function set_enabled(enabled) {
    if (enabled) {
        chrome.browserAction.setIcon({
            path: {
                "16": "../icons/destylize-16.png",
                "32": "../icons/destylize-32.png",
                "48": "../icons/destylize-48.png",
                "96": "../icons/destylize-96.png"
            }
        });
    }
    else {
        chrome.browserAction.setIcon({
            path: {
                "16": "../icons/destylize-gray-16.png",
                "32": "../icons/destylize-gray-32.png",
                "48": "../icons/destylize-gray-48.png",
                "96": "../icons/destylize-gray-96.png"
            }
        });
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

chrome.storage.onChanged.addListener(local_storage_change);
chrome.storage.local.get({"enabled": null}, value => {
    set_enabled(value.enabled);
});
