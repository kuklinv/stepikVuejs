import { themeStorage } from './theme.js';
import { FooterComponent } from './footer-component.js';
new FooterComponent(document.querySelector('#footer-component'));
themeStorage.moduleUpdate();
// if its bee a _blank page - its listener need to reload all page with changed theme
// window.addEventListener('storage',function (event) {
//     themeStorage.moduleUpdate();
// };
// tooltip TODO: will make as component
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
