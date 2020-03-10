const niceMenuBtn = document.querySelector(".menu-btn");
niceMenuBtn?.addEventListener("click", e => toggle(e));

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
