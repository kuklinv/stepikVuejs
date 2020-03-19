let navHeaderEl = document.querySelector('#navbar-header');

class NavBarHeader {
    constructor(str: string | null) {
        this.startString = str;
    }

    set fio(name : string | null){
        this.name = name;
        // this.updateName(); //TODO: need update name when new name - now its work when reload page only
    }

    get fio (){
        return this.name;
    }

    set greeting(str : string){
        this.greetMsg = str;
    }

    get greeting(){
        return this.greetMsg;
    }

    get renderHeader(){
        return `
        <p>${this.startString},<span id="userName" style="font-weight: bold">${this.fio}</span>,
        ${this.greeting===undefined||this.greeting===' '?'how are you today?':this.greeting}</p>
        `;
    }
    updateName(){
        let nameBlocks = document.querySelector('#userName');
        for (let elem of nameBlocks){
            elem.innerText = this.fio;
        }
    }
}

window.onload = function () {
    let Uname;

    let name = localStorage.getItem('UserName');

    if (name===null){
        let newName = prompt('Как к вам обращаться?','Dude');
        localStorage.setItem('UserName',newName);
    }
    let navheader = new NavBarHeader('Hello');
    navheader.fio = localStorage.getItem('UserName');

    navHeaderEl?.innerHTML = navheader.renderHeader;
    Uname = document.querySelector('#userName');

    Uname?.addEventListener('click',function () {
        let newName = prompt('Как к вам обращаться?',localStorage.getItem('UserName'));
        localStorage.setItem('UserName', newName);
        navheader.fio = newName;
        navheader.updateName; //
    })
};


