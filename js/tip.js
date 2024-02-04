document.addEventListener("DOMContentLoaded", function () {
    var customAlert = document.getElementById("custom-alert");

    setTimeout(function () {
        customAlert.style.display = "none";
    }, 15000); // 15秒后自动消失
});
