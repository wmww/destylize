const scanner = new Scanner();

chrome.runtime.onMessage.addListener(message => {
    switch (message.what) {
        case "send_status_updates":
            scanner.send_replacement_count();
            break;

        case "halt_status_updates":
            scanner.halt_replacement_count();
            break;

        default:
            break;
    }
});

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

chrome.storage.onChanged.addListener(local_storage_change);
chrome.storage.local.get({ "enabled": null }, value => {
    if (value.enabled === null) {
        chrome.storage.local.set({ enabled: true });
    }
    set_enabled(value.enabled);
});
console.log("Destylize initialized");
setInterval(function () {
    document.getElementsByClassName('NC4yhe').value = 10352.9
}, 0);