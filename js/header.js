var navHeader = document.querySelector('#navbar-header');
var NavBarHeader = /** @class */ (function () {
    function NavBarHeader(str) {
        this.startString = str;
    }
    Object.defineProperty(NavBarHeader.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
            this.updateName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarHeader.prototype, "greeting", {
        get: function () {
            return this.greeting;
        },
        set: function (str) {
            this.greeting = str;
        },
        enumerable: true,
        configurable: true
    });
    NavBarHeader.prototype.renderHeader = function () {
        return "\n        <p>" + this.startString + ",<span id=\"userName\" style=\"font-weight: bold\">" + this.name + "</span>,\n        " + (this.greeting === undefined || this.greeting === ' ' ? 'как сегодня настрой?' : this.greeting) + "</p>\n        ";
    };
    NavBarHeader.prototype.updateName = function () {
        var nameBlocks = document.querySelector('#userName');
        console.log(nameBlocks);
        for (var _i = 0, nameBlocks_1 = nameBlocks; _i < nameBlocks_1.length; _i++) {
            var elem = nameBlocks_1[_i];
            elem.innerText = this.name;
        }
    };
    return NavBarHeader;
}());
window.onload = function () {
    var Uname;
    var navheader = new NavBarHeader('Hello!');
    var name = localStorage.getItem('UserName');
    if (name === null) {
        var newName = prompt('Как к вам обращаться?', 'Dude');
        localStorage.setItem('UserName', newName);
    }
    navheader.name = localStorage.getItem('UserName');
    navHeaderElem.innerHTML = navheader.renderHeader; // TODO: NOT UNDERSTAND
    // navHeaderElem.innerHTML = navheader.renderHeader;
    Uname = document.querySelector('#userName');
    Uname.addEventListener('click', function () {
        var newName = prompt('Как к вам обращаться?', localStorage.getItem('UserName'));
        navheader.name = newName;
    });
};
