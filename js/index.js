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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var allContentWindow = document.querySelector(".content-wrapper"); // window
var niceMenuBtn = document.querySelector(".menu-btn"); //* slideToggle menu
// console.log(niceMenuBtn);
var menuWraper = document.querySelector(".menu-wrapper");
niceMenuBtn === null || niceMenuBtn === void 0 ? void 0 : niceMenuBtn.addEventListener("click", function () {
    menuWraper === null || menuWraper === void 0 ? void 0 : menuWraper.classList.toggle("show");
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
var editPopupSwitcher = false;
var editPopup = document.querySelector(".edit-popup");
var chThemeBtn = document.querySelector("#edit"); //* change theme button
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
        }
        else {
            gsap.to(editPopup, 1, {
                x: "-200%",
                display: "block",
                height: "0vh",
                width: "80%",
                ease: Power3.easeOut
            });
        }
    });
var preview = document.querySelector(".preview-wrapper");
var themeSelectors = __spreadArrays(document.querySelectorAll(".theme-select"));
var themeSelectorsWraper = document.querySelector(".theme-selects_wrapper");
themeSelectorsWraper === null || themeSelectorsWraper === void 0 ? void 0 : themeSelectorsWraper.addEventListener("click", function (e) {
    for (var _i = 0, themeSelectors_1 = themeSelectors; _i < themeSelectors_1.length; _i++) {
        var element = themeSelectors_1[_i];
        element.classList.remove("selected-theme");
    }
    var currentTarget = e.target;
    if ((currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.id) === "indigo") {
        preview === null || preview === void 0 ? void 0 : preview.classList.value = "preview-wrapper indigo-theme";
    }
    else {
        preview === null || preview === void 0 ? void 0 : preview.classList.value = "preview-wrapper black-theme";
    }
});
allContentWindow === null || allContentWindow === void 0 ? void 0 : allContentWindow.addEventListener("click", function () {
    gsap.to(editPopup, 1, {
        x: "-200%",
        display: "block",
        height: "0vh",
        width: "80%",
        ease: Power3.easeOut
    });
});
var switchPreviewColorRadioBtn = __spreadArrays(document.querySelectorAll(".radio-item>label>span"));
var previewRadioGroup = document.querySelector('#preview-radio-group');
console.log(switchPreviewColorRadioBtn);
var previewChildes = function () {
    var previewNodes = [];
    var progressLine = document.querySelector('#progress-line-preview');
    var previewBtn = document.querySelector('#preview-btn');
    previewNodes.push(progressLine);
    previewNodes.push(previewBtn);
    return previewNodes;
};
// previewRadioGroup?.addEventListener('click', (e)=>{
//   let target = e.target;
//   console.log(target.innerText);
//   if(target.innerText == 'Blue'){
//
//   } else if(target.innerText == 'Orange'){
//
//   } else if(target.innerText == 'Cyan'){
//
//   }
// });
previewRadioGroup === null || previewRadioGroup === void 0 ? void 0 : previewRadioGroup.addEventListener('click', function (event) {
    var target = event.target.closest('.radio-item>label>span');
    if (!target) {
        return;
    }
    var tColor = target.style.color;
    previewChildes().forEach(function (e) { return e.style.backgroundColor = tColor; });
    return;
});
