export class NavComponent {
    constructor({ element }) {
        this._element = element;
        this._render();
    }
    _render() {
        this._element.innerHTML = `
            <div id="nav" class="nav-wrapper navbar-fixed indigo-theme">
              <ul class="left">
                <li><a href="index.html">HOME</a></li>
                <li><a href="templates/data.html">DATA</a></li>
               <li><a href="templates/search.html">SEARCH</a></li>
            </ul>
              <a
                id="edit"
                class="right btn-floating btn-large pulse"
                style="background-color:#4ebdd4;margin-top: 5px;margin-right:15px;cursor: pointer"
              >
              <i class="material-icons">edit</i>
              </a>
             </div>
        `;
    }
}
