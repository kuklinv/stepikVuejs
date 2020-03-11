// from main.js
/*
// $(function(){
//     var includes = $('[data-include]');
//     //document.querySelector("[data-include]").innerText;
//     jQuery.each(includes, function(){
//         var file = 'components/' + $(this).data('include') + '.html';
//         $(this).load(file);
//     });
// });
*/

// TODO: for mini menu in right corner - slideToggle onclick
// function open(element: HTMLElement): void {
//   element.classList.add("show");
// }
// function close(element: HTMLElement): void {
//   element.classList.remove("show");
// }
// function toggle(element: HTMLElement): void {
//   element.classList.toggle("show");
// }

// const niceMenuBtn = document.querySelector("ul.menu-btn");
// const menuWraper = document.querySelectorAll(".menu-wrapper");
// niceMenuBtn?.addEventListener("click", event => {
//   let target = event.target;
//   target;
// });
// slideToggle jquery analog:
//https://pavelivanov.ru/blog/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%B0%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3-jquery-slidetoggle-%D0%BD%D0%B0-%D1%87%D0%B8%D1%81%D1%82%D0%BE%D0%BC-javascri/

// export * from "./TweenMax.min.js";

const niceMenuBtn = document.querySelector("ul.menu-btn"); //* slideToggle menu

let editPopupSwitcher = false;

const editPopup = document.querySelector(".edit-popup");
const chThemeBtn = document.querySelector("#edit"); //* change theme button
chThemeBtn?.addEventListener("click", function(event) {
  let target = event.target;
  target.classList.remove("pulse"); //* not pulse button when first click
  editPopupSwitcher = !editPopupSwitcher;
  if (editPopupSwitcher) {
    TwinMax.to(editPopup, 1, {
      x: "2%",
      display: "block",
      height: "65vh",
      ease: Back.easeOut
    });
  } else {
    TwinMax.to(editPopup, 1, {
      x: "-200%",
      display: "block",
      height: "0vh",
      ease: Power3.easeOut
    });
  }
});
