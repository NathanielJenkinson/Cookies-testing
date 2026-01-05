function acceptCookies() {
    document.cookie = "poseidonCookieConsent=true; max-age=31536000; path=/";
    document.getElementById("cookie-banner").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const cookies = document.cookie.split(";");
    let consentGiven = false;

    for (let cookie of cookies) {
        if (cookie.trim().startsWith("poseidonCookieConsent=true")) {
            consentGiven = true;
            break;
        }
    }

    if (consentGiven) {
        document.getElementById("cookie-banner").style.display = "none";
    }
});
