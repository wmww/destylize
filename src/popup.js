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
        cached_enabled = enabled;
    }
}

function enabled_toggled() {
    set_enabled(!cached_enabled);
}

window.onload = function(){
    set_enabled(cached_enabled);
    let toggle = document.getElementById("enable-toggle");
    toggle.addEventListener("click", enabled_toggled);
};
