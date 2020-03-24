export class FooterComponent {
    constructor(element) {
        this.element = element;
        this.render();
    }
    render(){
        this.element.innerHTML = `
        <footer>
    <div class="footer-wrapper">

        <div style="margin: 0 auto;padding: 10px;width: fit-content;position: relative">
            <span id="text">this is star wars api ui</span>
            <div class="tooltip_wrapper" style="display: none">
            </div>
        </div>
    </div>

    <script>
        console.log("its footer")
    </script>
</footer>
        `;
    }
}
