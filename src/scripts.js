$(document).ready(function () {
    $(".hamburger").on("click", () => {
        $(".menu").toggleClass("menu--open");
    });
    $("a").on("click", () => {
        $(".menu").removeClass("menu--open");
    });
});
let PB = {};
document.addEventListener("DOMContentLoaded", () => {
    PB.barra = document.getElementById("progress");
    PB.html = document.documentElement;
    PB.barra.style.width = "0%";
});
window.addEventListener("scroll", progressFn);
function progressFn() {
    const scrollTotale = PB.html.scrollHeight - PB.html.clientHeight;
    PB.barra.style.width = (PB.html.scrollTop * 100) / scrollTotale + "%";
}
ScrollReveal().reveal(".reveal", { distance: "100px", duration: 1000, easing: "cubic-bezier(0.215, 0.610, 0.355, 1)", interval: 300 });
ScrollReveal().reveal(".zoom", { duration: 500, easing: "cubic-bezier(0.215, 0.610, 0.355, 1)", interval: 250, scale: 0.65 });
