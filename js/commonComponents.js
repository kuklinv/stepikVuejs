export class BasicPrpperties {
  constructor({ element }) {
    this._element = element;
  }

  hide() {
    this._element.setAttribute("hidden", true);
  }

  show() {
    this._element.setAttribute("hidden", false);
  }

  toggle() {
    this._element.toggleAttribute("hidden");
  }
}
