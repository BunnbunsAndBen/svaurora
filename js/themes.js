window.onload = function () {
    document.getElementById("load").style.display = "none";
    document.getElementById("thepage").style.display = "";
    var poststy = localStorage.pfpstyles;
    if (poststy == undefined) {
        poststy = true; localStorage.pfpstyles = "true";
    }
    if (poststy == "true") { poststy = true; } else { poststy = false; }
    document.getElementById("pfptoggle").checked = poststy;
    document.getElementById("pfptoggle").onchange = function () {
        localStorage.pfpstyles = document.getElementById("pfptoggle").checked;
    }
    var udp = localStorage.pollsystem;
    if (udp == undefined) {
        udp = true; localStorage.pollsystem = "true"
    }
    if (udp == "true") { udp = true; } else { udp = false; }
    document.getElementById("polltoggle").checked = udp;
    document.getElementById("polltoggle").onchange = function () {
        localStorage.pollsystem = document.getElementById("polltoggle").checked;
    }
    var co = localStorage.postorder;
    if (co == undefined) {
        co == true; localStorage.postorder = "true";
    }
    if (co == "true") { co = true; } else { co = false; }
    document.getElementById("commentstoggle").checked = co;
    document.getElementById("commentstoggle").onchange = function () {
        localStorage.postorder = document.getElementById("commentstoggle").checked;
    }
}