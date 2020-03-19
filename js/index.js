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
var _a;
var allContentWindow = document.querySelector(".content-wrapper"); // window
var niceMenuBtn = document.querySelector(".menu-btn"); //* slideToggle menu !!//
var menuWraper = document.querySelector(".menu-wrapper");
var menuSwitcher = false;
niceMenuBtn === null || niceMenuBtn === void 0 ? void 0 : niceMenuBtn.addEventListener("click", function (event) {
    var target = event.target;
    if (!target) {
        return;
    }
    menuSwitcher = !menuSwitcher;
    if (menuSwitcher) {
        menuWraper === null || menuWraper === void 0 ? void 0 : menuWraper.style.display = 'block';
    }
    else {
        menuWraper === null || menuWraper === void 0 ? void 0 : menuWraper.style.display = 'none';
    }
});
var editPopupSwitcher = false;
var editPopup = document.querySelector(".edit-popup");
var chThemeBtn = document.querySelector("#edit"); //* change theme button
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
var preview = document.querySelector(".preview-wrapper");
var themeSelectors = __spreadArrays(document.querySelectorAll(".theme-select"));
var themeSelectorsWraper = document.querySelector(".theme-selects_wrapper");
var currentTheme = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdde4'
};
themeSelectorsWraper === null || themeSelectorsWraper === void 0 ? void 0 : themeSelectorsWraper.addEventListener("click", function (e) {
    for (var _i = 0, themeSelectors_1 = themeSelectors; _i < themeSelectors_1.length; _i++) {
        var element = themeSelectors_1[_i];
        element.classList.remove("selected-theme");
    }
    var currentTarget = e.target;
    if ((currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.id) === "indigo") {
        preview === null || preview === void 0 ? void 0 : preview.classList.value = "preview-wrapper indigo-theme";
        currentTheme.themeType = 'indigo-theme';
    }
    else {
        preview === null || preview === void 0 ? void 0 : preview.classList.value = "preview-wrapper black-theme";
        currentTheme.themeType = 'black-theme';
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
var previewChildes = function () {
    var previewNodes = [];
    var progressLine = document.querySelector('#progress-line-preview');
    var previewBtn = document.querySelector('#preview-btn');
    previewNodes.push(progressLine);
    previewNodes.push(previewBtn);
    return previewNodes;
};
// * ! important
previewRadioGroup === null || previewRadioGroup === void 0 ? void 0 : previewRadioGroup.addEventListener('click', function (event) {
    var target = event.target.closest('.radio-item>label>span');
    if (!target) {
        return;
    }
    var tColor = target.style.color;
    previewChildes().forEach(function (e) { return e.style.backgroundColor = tColor; });
    currentTheme.secondaryColor = target.style.color;
    return;
});
var themeStorage = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdde4',
    update: function () {
        var _this = this;
        var _a, _b, _c, _d;
        (_a = document.querySelector("#edit")) === null || _a === void 0 ? void 0 : _a.style.backgroundColor = this.secondaryColor;
        (_b = document.querySelector(".content-wrapper")) === null || _b === void 0 ? void 0 : _b.classList.value = "content-wrapper " + this.themeType;
        (_c = document.querySelector(".nav")) === null || _c === void 0 ? void 0 : _c.classList.value = "nav-wrapper navbar-fixed indigo-theme " + this.themeType;
        var menuItem = __spreadArrays((_d = document.querySelector('.menu-btn')) === null || _d === void 0 ? void 0 : _d.childNodes);
        menuItem.forEach(function (el) {
            if (el.nodeType !== 3) {
                el.style.backgroundColor = _this.secondaryColor;
            }
        });
        localStorage.setItem('themeType', this.themeType);
        localStorage.setItem('secondaryColor', this.secondaryColor);
    }
};
document.addEventListener('DOMContentLoaded', function () {
    var sColor = localStorage.getItem('secondaryColor'); // its result !!!!!! main result
    var themeType = localStorage.getItem('themeType');
    if (sColor !== null && themeType !== null) {
        themeStorage.secondaryColor = sColor;
        themeStorage.themeType = themeType;
    }
    themeStorage.update();
});
(_a = document.querySelector("#save-theme-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    themeStorage.themeType = currentTheme.themeType;
    themeStorage.secondaryColor = currentTheme.secondaryColor;
    themeStorage.update();
});
