export class Tooltip {
    constructor(element) {
        this.element = element;
        this.render();
    }
    render() {
        this.element.innerHTML = `
         <div class="tooltip-container">Здесь текст тултипа</div>
        `;
    }
}
