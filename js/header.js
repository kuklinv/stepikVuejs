var navHeaderEl = document.querySelector('#navbar-header');
var NavBarHeader = /** @class */ (function () {
    function NavBarHeader(str) {
        this.startString = str;
    }
    Object.defineProperty(NavBarHeader.prototype, "fio", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
            // this.updateName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarHeader.prototype, "greeting", {
        get: function () {
            return this.greetMsg;
        },
        set: function (str) {
            this.greetMsg = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarHeader.prototype, "renderHeader", {
        get: function () {
            return "\n        <p>" + this.startString + ",<span id=\"userName\" style=\"font-weight: bold\">" + this.fio + "</span>,\n        " + (this.greeting === undefined || this.greeting === ' ' ? 'how are you today?' : this.greeting) + "</p>\n        ";
        },
        enumerable: true,
        configurable: true
    });
    NavBarHeader.prototype.updateName = function () {
        var nameBlocks = document.querySelector('#userName');
        for (var _i = 0, nameBlocks_1 = nameBlocks; _i < nameBlocks_1.length; _i++) {
            var elem = nameBlocks_1[_i];
            elem.innerText = this.fio;
        }
    };
    return NavBarHeader;
}());
window.onload = function () {
    var _a, _b;
    var Uname;
    var name = localStorage.getItem('UserName');
    if (name === null) {
        var newName = prompt('Как к вам обращаться?', 'Dude');
        localStorage.setItem('UserName', newName);
    }
    var navheader = new NavBarHeader('Hello');
    navheader.fio = localStorage.getItem('UserName');
    (_a = navHeaderEl) === null || _a === void 0 ? void 0 : _a.innerHTML = navheader.renderHeader;
    Uname = document.querySelector('#userName');
    (_b = Uname) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var newName = prompt('Как к вам обращаться?', localStorage.getItem('UserName'));
        localStorage.setItem('UserName', newName);
        navheader.fio = newName;
        navheader.updateName; //TODO: not update rendering name! need rerendering page!
    });
};
