// from main.js
/*
// $(function(){
//     let includes = $('[data-include]');
//     //document.querySelector("[data-include]").innerText;
//     jQuery.each(includes, function(){
//         let file = 'components/' + $(this).data('include') + '.html';
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

let allContentWindow = document.querySelector(".content-wrapper"); // window

let niceMenuBtn = document.querySelector(".menu-btn"); //* slideToggle menu
// console.log(niceMenuBtn);
let menuWraper = document.querySelector(".menu-wrapper");
niceMenuBtn?.addEventListener("click", () => {
    menuWraper?.classList.toggle("show");
});

// niceMenuBtn.addEventListener("click", () => {  //* TODO: i think good let: https://javascript.ru/forum/misc/45183-slidetoggle-bez-ispolzovaniya-jquery.html
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

// let menuWraper = gsap.from(".menu-wrapper", 1, {
//   height: 0,
//   paused: true,
//   reversed: true
// });
// niceMenuBtn.addEventListener("click", doSlideToggle);
// function doSlideToggle() {
//   menuWraper.reversed() ? menuWraper.play() : menuWraper.reverse();
// }

let editPopupSwitcher = false;
let editPopup = document.querySelector(".edit-popup");
let chThemeBtn = document.querySelector("#edit"); //* change theme button
chThemeBtn === null || chThemeBtn === void 0
    ? void 0
    : chThemeBtn.addEventListener("click", function (event) {
        // let target = event.target;
        // console.log(target);
        this.classList.remove("pulse"); //* not pulse button when first click
        editPopupSwitcher = !editPopupSwitcher;
        if (editPopupSwitcher) {
            gsap.to(editPopup, 1, {
                //*! gsap => not TweenMax
                x: "2%",
                display: "block",
                height: "70vh",
                width: "50%",
                ease: Back.easeOut
            });
        } else {
            gsap.to(editPopup, 1, {
                x: "-200%",
                display: "block",
                height: "0vh",
                width: "80%",
                ease: Power3.easeOut
            });
        }
    });

let preview = document.querySelector(".preview-wrapper");
let themeSelectors = [...document.querySelectorAll(".theme-select")];
let themeSelectorsWraper = document.querySelector(".theme-selects_wrapper");

themeSelectorsWraper?.addEventListener("click", e => {
    for (let element of themeSelectors) {
        element.classList.remove("selected-theme");
    }
    let currentTarget = e.target;
    if (currentTarget?.id === "indigo") {
        preview?.classList.value = "preview-wrapper indigo-theme";
    } else {
        preview?.classList.value = "preview-wrapper black-theme";
    }
});

allContentWindow?.addEventListener("click", () => {
    gsap.to(editPopup, 1, {
        x: "-200%",
        display: "block",
        height: "0vh",
        width: "80%",
        ease: Power3.easeOut
    });
});

let switchPreviewColorRadioBtn = [
    ...document.querySelectorAll(".radio-item>label>span")
];
console.log(switchPreviewColorRadioBtn);
let previewChildes = function () {
    let previewNodes = [];
    let progressLine = document.querySelector('#progress-line-preview');
    let previewBtn = document.querySelector('#preview-btn');
    previewNodes.push(progressLine);
    previewNodes.push(previewBtn);
    return previewNodes;
};

switchPreviewColorRadioBtn?.addEventListener('click'); //*? TODO: not eventListener on element[]
