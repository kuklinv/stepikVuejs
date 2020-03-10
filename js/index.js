var niceMenuBtn = document.querySelector(".menu-btn");
niceMenuBtn === null || niceMenuBtn === void 0 ? void 0 : niceMenuBtn.addEventListener("click", function (e) { return toggle(e); });
function open(element) {
    element.classList.add("show");
}
function close(element) {
    element.classList.remove("show");
}
function toggle(element) {
    element.classList.toggle("show");
}
function show(element) {
    element.setAttribute("hidden", false);
}
