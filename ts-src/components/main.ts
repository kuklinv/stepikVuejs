import {NavComponent} from "./nav.component";

export  class Main {
    constructor({element}) {
        this._element = element;
        this._render();
        this._initNavigation();
    }

    _initNavigation(){
        this.navigation = new NavComponent({this._element.querySelector('.navigation')});
    }
    _render(){
        this._element.innerHTML = `
<div class="maincontent">
    <nav class="navigation"></nav>

<div class="content-wrapper indigo-theme">
    <ul class="menu-btn">
        <li class="first-line" style="background-color: #4ebdd4"></li>
        <li class="second-line" style="background-color: #4ebdd4"></li>
        <li class="third-line" style="background-color: #4ebdd4"></li>
    </ul>

    <div class="grey darken-3 menu-wrapper" style="opacity:.5"></div>

    <div class="home-content_wrapper">
        <div class="greeting_wrapper">
            <div id="navbar-header"></div>
        </div>

        <div class="about-block">
            <h3>About Project</h3>
            <h6>
                This is a small but comprehensive course on the basics of PWA development using JS and Vue.
                This page is a practical lesson from this course on Stepik.
            </h6>
        </div>

        <div
                class="contacts_block"
                style="display: flex;flex-direction: row;align-items: flex-start"
        >
            <div class="tabs_container">
            </div>
            <div class="tab-content_wrapper"></div>
        </div>

        <div class="skills-sections" style="width: 100%"></div>
    </div>
</div>

<!--edit popup-->
<div
        class="edit-popup row"
        style="transform: translate(-200%, 0%) matrix(1, 0, 0, 1, 0, 0);"
>
    <div class="col s12 m12" style="height: 100%;">
        <div
                class="card darken-1 z-depth-4 hoverable"
                style="border-radius: 12px;background-color: #2b2f38;height: 100%;"
        >
            <div
                    class="card-content white-text card-content-wrapper"
                    style="height: 85%"
            >
                <span class="card-title">Редактирование темы</span>
                <div class="row card-text">
                    <div class="col s5">
                        <ul>
                            <li>
                                <p class="caption-text">Тема:</p>
                                <div class="theme-selects_wrapper">
                                    <div
                                            class="theme-select indigo-theme selected-theme"
                                            id="indigo"
                                    ></div>
                                    <div class="theme-select black-theme" id="black"></div>
                                </div>
                            </li>
                            <li id="preview-radio-group" style="padding-bottom: 15px">
                                <p class="caption-text">Вторичный цвет:</p>
                                <p class="radio-item">
                                    <label>
                                        <input name="group1" type="radio" id="blue-radio"/>
                                        <span style="color: #00b0ff;font-size: 2em">Blue</span>
                                    </label>
                                </p>
                                <p class="radio-item">
                                    <label>
                                        <input name="group1" type="radio" id="orange-radio"/>
                                        <span style="color:#ef6230;font-size: 2em">Orange</span>
                                    </label>
                                </p>
                                <p class="radio-item">
                                    <label>
                                        <input
                                                name="group1"
                                                type="radio"
                                                id="cyan-radio"
                                                checked
                                        />
                                        <span style="color:#4ebdd4;font-size: 2em">Cyan</span>
                                    </label>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="col s7" style="padding: 10px;">
                        <div class="preview-wrapper indigo-theme">
                            <div class="progress-wrapper">
                                <div id="progress-line-preview"
                                     class="progress-line"
                                     style="background-color: #4ebdd4"
                                ></div>
                            </div>
                            <a id="preview-btn"
                               class="right btn-floating btn-large"
                               style="background-color:#4ebdd4;margin-top: 5px;margin-right:15px;cursor: pointer"
                            >
                                <i class="material-icons">edit</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-action center">
                <a
                        class="waves-effect waves-light waves-purple btn"
                        id="save-theme-btn"
                        style="background-color: #00b0ff;"
                >save changes</a
                >
            </div>
        </div>
    </div>
</div>

<div id="footer-component"></div>
</div>
        `;
    }
}
