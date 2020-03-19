"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.themeStorage = {
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
