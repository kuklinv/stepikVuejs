var _a, _b, _c, _d, _e;
import { themeStorage } from './theme.js';
import { FooterComponent } from './footer-component.js';
export { Tooltip } from './tooltip.js';
let footerElement = document.querySelector('#footer-component');
new FooterComponent(footerElement);
let allContentWindow = document.querySelector(".content-wrapper"); // window
let niceMenuBtn = document.querySelector(".menu-btn"); //* slideToggle menu !!//
let menuWraper = document.querySelector(".menu-wrapper");
let menuSwitcher = false;
(_a = niceMenuBtn) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
    var _a, _b;
    let target = event.target;
    if (!target) {
        return;
    }
    menuSwitcher = !menuSwitcher;
    if (menuSwitcher) {
        (_a = menuWraper) === null || _a === void 0 ? void 0 : _a.style.display = 'block';
    }
    else {
        (_b = menuWraper) === null || _b === void 0 ? void 0 : _b.style.display = 'none';
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
let preview = document.querySelector(".preview-wrapper");
let themeSelectors = [...document.querySelectorAll(".theme-select")];
let themeSelectorsWraper = document.querySelector(".theme-selects_wrapper");
let currentTheme = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdde4',
};
(_b = themeSelectorsWraper) === null || _b === void 0 ? void 0 : _b.addEventListener("click", e => {
    var _a, _b, _c;
    for (let element of themeSelectors) {
        element.classList.remove("selected-theme");
    }
    let currentTarget = e.target;
    if (((_a = currentTarget) === null || _a === void 0 ? void 0 : _a.id) === "indigo") {
        (_b = preview) === null || _b === void 0 ? void 0 : _b.classList.value = "preview-wrapper indigo-theme";
        currentTheme.themeType = 'indigo-theme';
    }
    else {
        (_c = preview) === null || _c === void 0 ? void 0 : _c.classList.value = "preview-wrapper black-theme";
        currentTheme.themeType = 'black-theme';
    }
});
(_c = allContentWindow) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
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
(_d = previewRadioGroup) === null || _d === void 0 ? void 0 : _d.addEventListener('click', (event) => {
    let target = event.target.closest('.radio-item>label>span');
    if (!target) {
        return;
    }
    let tColor = target.style.color;
    previewChildes().forEach((e) => e.style.backgroundColor = tColor);
    currentTheme.secondaryColor = target.style.color;
    return;
});
document.addEventListener('DOMContentLoaded', function () {
    let sColor = localStorage.getItem('secondaryColor'); // its result !!!!!! main result
    let themeType = localStorage.getItem('themeType');
    if (sColor !== null && themeType !== null) {
        themeStorage.secondaryColor = sColor;
        themeStorage.themeType = themeType;
    }
    themeStorage.update();
});
(_e = document.querySelector("#save-theme-btn")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    themeStorage.themeType = currentTheme.themeType;
    themeStorage.secondaryColor = currentTheme.secondaryColor;
    themeStorage.update();
});
let toolTipElement = document.querySelector('.tooltip_wrapper'); // for tooltip - popup
let tooltipTarget = document.querySelector('#text');
let isTooltipActive = false;
tooltipTarget.addEventListener('mouseover', () => {
    toolTipElement.style.display = 'block';
});
tooltipTarget.addEventListener('mouseleave', () => {
    setTimeout(function () {
        if (!isTooltipActive) {
            toolTipElement.style.display = 'none';
        }
    }, 1000);
});
toolTipElement.addEventListener('mouseover', () => {
    isTooltipActive = true;
});
toolTipElement.addEventListener('mouseleave', () => {
    toolTipElement.style.display = 'none';
});
