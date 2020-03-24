import { themeStorage } from './theme.js';
import { FooterComponent } from './footer-component.js';
new FooterComponent(document.querySelector('#footer-component'));
themeStorage.moduleUpdate();
// if its bee a _blank page - its listener need to reload all page with changed theme
// window.addEventListener('storage',function (event) {
//     themeStorage.moduleUpdate();
// };
