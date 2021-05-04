let cached_enabled = null;
let replacements = 0;
let active_tab_id = null;

function checkLastError(response) {
    if (browser.runtime.lastError) {
        console.error(`Error: ${browser.runtime.lastError}`);
    }
}

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
        status.className = "running";
        toggle.innerHTML = "Stop";

        counter.style.visibility = "visible";
        document.getElementById("elements-fixed-prefix").textContent = "Fixed ";
        document.getElementById("elements-fixed").textContent = replacements.toString();
        document.getElementById("elements-fixed-suffix").textContent = (
            " element" + (replacements == 1 ? "" : "s") + " on this page");

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
        status.innerHTML = "not running"
        status.className = "not-running";
        toggle.innerHTML = "Start";

       	counter.style.visibility = "hidden";
 
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

function request_send_status_updates() {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, tabs => {
        if (tabs.length > 0) {
            active_tab_id = tabs[0].id;
            chrome.tabs.sendMessage(active_tab_id, {what: "send_status_updates"}, checkLastError);
        }
    });
}

function request_halt_status_updates() {
    if (active_tab_id) {
        chrome.tabs.sendMessage(active_tab_id, {what: "halt_status_updates"}, checkLastError);
        active_tab_id = null;
    }
}

function set_enabled(enabled) {
    if (enabled !== cached_enabled) {
        if (cached_enabled !== null) {
            chrome.storage.local.set({enabled: enabled});
        }
        cached_enabled = enabled;
        update();
        request_send_status_updates(); // if enabling/disabling triggers a reload, updates will stop
    }
}

function enabled_toggled() {
    set_enabled(!cached_enabled);
}

window.onload = function(){
    cached_enabled = null
    update();
    request_send_status_updates();

    chrome.runtime.onMessage.addListener(process_message);

    chrome.storage.local.get({"enabled": true}, value => {
        set_enabled(value.enabled);
    });
    let toggle = document.getElementById("enable-toggle");
    toggle.addEventListener("click", enabled_toggled);
};

window.onUnload = function(){
    chrome.runtime.onMessage.removeListener(process_message);
    request_halt_status_updates();
    replacements = null;
}
