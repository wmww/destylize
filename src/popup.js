let cached_enabled = true;

function set_enabled(enabled) {
    let status = document.getElementById("status");
    let toggle = document.getElementById("enable-toggle");
    if (enabled) {
        status.innerHTML = "running";
        status.style.color = "green";
        toggle.innerHTML = "Stop";
    }
    else {
        status.innerHTML = "not running"
        status.style.color = "red";
        toggle.innerHTML = "Start";
    }
    if (enabled != cached_enabled) {
        console.log("Setting enabled to " + enabled);
        browser.storage.local.set({enabled: enabled});
        cached_enabled = enabled;
    }
}

function enabled_toggled() {
    set_enabled(!cached_enabled);
}

window.onload = function(){
    browser.storage.local.get("enabled", value => {
        let enabled = ("enabled" in value) ? value.enabled : true;
        console.log("Enabled initially read as " + enabled);
        cached_enabled = enabled;
        set_enabled(enabled);
    });
    let toggle = document.getElementById("enable-toggle");
    toggle.addEventListener("click", enabled_toggled);
};
