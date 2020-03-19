export let themeStorage = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdde4',
    update: function () {
        document.querySelector("#edit")?.style.backgroundColor = this.secondaryColor;
        document.querySelector(".content-wrapper")?.classList.value = `content-wrapper ${this.themeType}`;
        document.querySelector(".nav")?.classList.value = `nav-wrapper navbar-fixed indigo-theme ${this.themeType}`;
        let menuItem = [...document.querySelector('.menu-btn')?.childNodes];
        menuItem.forEach((el) => {
            if (el.nodeType !== 3) {
                el.style.backgroundColor = this.secondaryColor;
            }
        });
        localStorage.setItem('themeType', this.themeType);
        localStorage.setItem('secondaryColor', this.secondaryColor);
    }
}