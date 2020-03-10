// файл для переноса наработок с рабочей машины, где нет npm и tsc соответственно
// думать как будто это index.ts

// import { BasicPrpperties } from "./commonComponents.js";

// const toggle = () => BasicPrpperties.toggle;

// function hide(e) {
//   e.setAttribute("hidden", true);
// }

// function show(e) {
//   e.setAttribute("hidden", false);
// }

// function toggle(e) {
//   e.toggleAttribute("hidden");
// }

// function hide(e) {
//   e.classList.add("show");
// }

// function show(e) {
//   e.classList.remove("show");
// }

// function mtoggle(e) {
//   e.classList.toggle("show");
// }

let niceMenuBtn = document.querySelector(".menu-btn");
// show(niceMenuBtn);
// show(niceMenuBtn);
// niceMenuBtn.classList.add("hide");
niceMenuBtn.addEventListener("click", function(e) {
  let target = e.target;
  target.classList.toggle("hide");
});
