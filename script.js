document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("authenticated") !== "true") {
        checkPassword();
    }
});

function checkPassword() {
    let correctPassword = "amirnz";
    let userPassword = prompt("رمز ورود به سایت را وارد کنید:");

    if (userPassword === correctPassword) {
        localStorage.setItem("authenticated", "true");
    } else {
        document.body.innerHTML = "<h1 style='text-align:center; color:red;'>دسترسی غیرمجاز!</h1>";
    }
}