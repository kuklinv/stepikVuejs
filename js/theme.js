export let themeStorage = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdde4',
    update: function () {
        var _a, _b, _c, _d;
        (_a = document.querySelector("#edit")) === null || _a === void 0 ? void 0 : _a.style.backgroundColor = this.secondaryColor;
        (_b = document.querySelector(".content-wrapper")) === null || _b === void 0 ? void 0 : _b.classList.value = `content-wrapper ${this.themeType}`;
        (_c = document.querySelector(".nav")) === null || _c === void 0 ? void 0 : _c.classList.value = `nav-wrapper navbar-fixed indigo-theme ${this.themeType}`;
        let menuItem = [...(_d = document.querySelector('.menu-btn')) === null || _d === void 0 ? void 0 : _d.childNodes];
        menuItem.forEach((el) => {
            if (el.nodeType !== 3) {
                el.style.backgroundColor = this.secondaryColor;
            }
        });
        localStorage.setItem('themeType', this.themeType);
        localStorage.setItem('secondaryColor', this.secondaryColor);
    }
};
