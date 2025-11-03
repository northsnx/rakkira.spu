if (localStorage.getItem("cookieAccepted") === "true") {
    document.getElementById("cookie-banner").style.display = "none";
}
document.getElementById("accept-cookies").addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true");
    document.getElementById("cookie-banner").style.display = "none";
});