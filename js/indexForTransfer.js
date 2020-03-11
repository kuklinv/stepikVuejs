// файл для переноса наработок с рабочей машины, где нет npm и tsc соответственно
// думать как будто это index.ts

// import * as TweenMax from "./TweenMax.min.js";

// right angle menu TODO: jast not worked at moment
var niceMenuBtn = document.querySelector(".menu-btn"); //* slideToggle menu
console.log(niceMenuBtn);
var menuWraper = document.querySelector(".menu-wrapper");

// niceMenuBtn.addEventListener("click", () => {  //* TODO: i think good var: https://javascript.ru/forum/misc/45183-slidetoggle-bez-ispolzovaniya-jquery.html
//   menuWraper.classList.toggle("collapsed");
// });

// niceMenuBtn.addEventListener("click", function() {
//   if (menuWraper.clientHeight === 0) {
//     // max-height of a number "larger-than-necessary" in order to be dynamic
//     gsap.to(".menu-wrapper", 0.5, { css: { maxHeight: 500 } });
//   } else {
//     gsap.to(".menu-wrapper", 0.25, { css: { maxHeight: 0 } });
//   }
// });
// console.log(menuWraper);
niceMenuBtn.addEventListener("click", () => {
  console.assert("yes");
  menuWraper.classList.toggle("show");
});
// var menuWraper = gsap.from(".menu-wrapper", 1, {
//   height: 0,
//   paused: true,
//   reversed: true
// });
// niceMenuBtn.addEventListener("click", doSlideToggle);
// function doSlideToggle() {
//   menuWraper.reversed() ? menuWraper.play() : menuWraper.reverse();
// }

// change theme
var editPopupSwitcher = false;
var editPopup = document.querySelector(".edit-popup");
var chThemeBtn = document.querySelector("#edit"); //* change theme button
chThemeBtn === null || chThemeBtn === void 0
  ? void 0
  : chThemeBtn.addEventListener("click", function(event) {
      var target = event.target;
      target.classList.remove("pulse"); //* not pulse button when first click
      editPopupSwitcher = !editPopupSwitcher;
      if (editPopupSwitcher) {
        gsap.to(editPopup, 1, {
          x: "2%",
          display: "block",
          height: "50vh",
          width: "50%",
          ease: Back.easeOut
        });
      } else {
        gsap.to(editPopup, 1, {
          x: "-200%",
          display: "block",
          height: "0vh",
          width: "50%",
          ease: Power3.easeOut
        });
      }
    });
