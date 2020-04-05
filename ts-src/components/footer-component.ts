import {Tooltip} from "./tooltip";

export class FooterComponent {
    constructor(element) {
        this.element = element;
        this.render();
        this._tooltip = new Tooltip({
            document.querySelector('.tooltip_wrapper')
        });
    }
    render(){
        this.element.innerHTML = `
        <footer>
    <div class="footer-wrapper">

        <div style="margin: 0 auto;padding: 10px;width: fit-content;position: relative">
            <span id="text">THIS IS PROJECT API UI FOOTER COMPONENT</span>
            <div class="tooltip_wrapper" style="display: none">
                     <div class="tooltip-container">this is tooltip content</div>
            </div>
        </div>
    </div>
</footer>
        `;
    }
}

// let toolTipElement = document.querySelector('.tooltip_wrapper');
// console.log(toolTipElement);
