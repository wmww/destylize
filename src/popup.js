let cached_enabled = true;
let replacements = null;
let active_tab_id = null;

function process_message(message) {
    switch (message.what) {
        case "replacements":
            replacements = message.replacements;
            update();
            break;

        default:
            break;
    }
}

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

function request_send_status_updates() {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(tabs => {
        if (tabs.length > 0) {
            active_tab_id = tabs[0].id;
            browser.tabs.sendMessage(active_tab_id, {what: "send_status_updates"});
        }
    });
}

function request_halt_status_updates() {
    browser.tabs.sendMessage(active_tab_id, {what: "halt_status_updates"});
    active_tab_id = null;
}

function set_enabled(enabled) {
    if (enabled != cached_enabled) {
        browser.storage.local.set({enabled: enabled});
        cached_enabled = enabled;
        update();
        request_send_status_updates(); // if enabling/disabling triggers a reload, updates will stop
    }
}

function enabled_toggled() {
    set_enabled(!cached_enabled);
}

window.onload = function(){
    update();
    request_send_status_updates();

    browser.runtime.onMessage.addListener(process_message);

    browser.storage.local.get("enabled", value => {
        let enabled = ("enabled" in value) ? value.enabled : true;
        console.log("Enabled initially read as " + enabled);
        cached_enabled = enabled;
        set_enabled(enabled);
    });
    let toggle = document.getElementById("enable-toggle");
    toggle.addEventListener("click", enabled_toggled);
};

window.onUnload = function(){
    browser.runtime.onMessage.removeListener(process_message);
    request_halt_status_updates();
    replacements = null;
}
