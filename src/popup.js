let cached_enabled = true;
let replacements = null;

browser.runtime.onMessage.addListener(message => {
    switch (message.what) {
        case "replacements":
            replacements = message.replacements;
            update();
            break;

        default:
            break;
    }
});

function update() {
    let status = document.getElementById("status");
    let counter = document.getElementById("counter");
    let toggle = document.getElementById("enable-toggle");

    if (cached_enabled) {
        status.innerHTML = "running";
        status.style.color = "green";
        toggle.innerHTML = "Stop";
    }
    else {
        status.innerHTML = "not running"
        status.style.color = "red";
        toggle.innerHTML = "Start";
    }

    if (replacements === null) {
        counter.style.display = "none";
    }
    else {
        counter.style.display = "block";
        counter.innerHTML =
        "Fixed <b>" + replacements.toString() +
        "</b> element" + (replacements == 1 ? "" : "s") +
        " on this page";
    }
}

function request_replacement_count() {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(tabs => {
        if (tabs.length > 0) {
            browser.tabs.sendMessage(tabs[0].id, {what: "request_status"});
        }
    });
}

function set_enabled(enabled) {
    if (enabled != cached_enabled) {
        console.log("Setting enabled to " + enabled);
        browser.storage.local.set({enabled: enabled});
        cached_enabled = enabled;
        request_replacement_count();
        update();
    }
}

function enabled_toggled() {
    set_enabled(!cached_enabled);
}

window.onload = function(){
    update();
    request_replacement_count();
    browser.storage.local.get("enabled", value => {
        let enabled = ("enabled" in value) ? value.enabled : true;
        console.log("Enabled initially read as " + enabled);
        cached_enabled = enabled;
        set_enabled(enabled);
    });
    let toggle = document.getElementById("enable-toggle");
    toggle.addEventListener("click", enabled_toggled);
};
