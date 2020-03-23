import {themeStorage} from './theme.js';
import {FooterComponent} from './footer-component';

new FooterComponent(document.querySelector('.footer-component'));

let allContentWindow = document.querySelector(".content-wrapper"); // window
let niceMenuBtn = document.querySelector(".menu-btn"); //* slideToggle menu !!//
let menuWraper = document.querySelector(".menu-wrapper");
let menuSwitcher = false;
niceMenuBtn?.addEventListener("click", (event) => {
    let target = event.target;
    if (!target) {
        return;
    }
    menuSwitcher = !menuSwitcher;
    if (menuSwitcher) {
        menuWraper?.style.display = 'block';
    } else {
        menuWraper?.style.display = 'none';
    }
});

let editPopupSwitcher = false;
let editPopup = document.querySelector(".edit-popup");
let chThemeBtn = document.querySelector("#edit"); //* change theme button
chThemeBtn === null || chThemeBtn === void 0
    ? void 0
    : chThemeBtn.addEventListener("click", function (event) {
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

let currentTheme = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdde4',
}

themeSelectorsWraper?.addEventListener("click", e => {
    for (let element of themeSelectors) {
        element.classList.remove("selected-theme");
    }
    let currentTarget = e.target;
    if (currentTarget?.id === "indigo") {
        preview?.classList.value = "preview-wrapper indigo-theme";
        currentTheme.themeType = 'indigo-theme';
    } else {
        preview?.classList.value = "preview-wrapper black-theme";
        currentTheme.themeType = 'black-theme';
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
let previewRadioGroup = document.querySelector('#preview-radio-group');
let previewChildes = function () {
    let previewNodes = [];
    let progressLine = document.querySelector('#progress-line-preview');
    let previewBtn = document.querySelector('#preview-btn');
    previewNodes.push(progressLine);
    previewNodes.push(previewBtn);
    return previewNodes;
};
// * ! important
previewRadioGroup?.addEventListener('click', (event) => {
    let target = event.target.closest('.radio-item>label>span');
    if (!target) {
        return;
    }
    let tColor = target.style.color;
    previewChildes().forEach((e) => e.style.backgroundColor = tColor);
    currentTheme.secondaryColor = target.style.color;
    return;
});

document.addEventListener('DOMContentLoaded', function () { // for save theme betwean reloads page - -use localStorage!!!!!!!!!!
    let sColor = localStorage.getItem('secondaryColor');   // its result !!!!!! main result
    let themeType = localStorage.getItem('themeType');

    if (sColor !== null && themeType !== null) {
        themeStorage.secondaryColor = sColor;
        themeStorage.themeType = themeType;
    }
    themeStorage.update();
});

document.querySelector("#save-theme-btn")?.addEventListener("click", () => {
    themeStorage.themeType = currentTheme.themeType;
    themeStorage.secondaryColor = currentTheme.secondaryColor;
    themeStorage.update();
});
