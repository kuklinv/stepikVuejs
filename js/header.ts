let navHeaderEl = document.querySelector('#navbar-header');

class NavBarHeader {
    constructor(str: string | null) {
        this.startString = str;
    }

    set name(name : string | null){
        this.name = name;
        this.updateName();
    }

    get name (){
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
        <p>${this.startString},<span id="userName" style="font-weight: bold">${this.name}</span>,
        ${this.greeting===undefined||this.greeting===' '?'как сегодня настрой?':this.greeting}</p>
        `;
    }
    updateName(){
        let nameBlocks = document.querySelector('#userName');
        console.log(nameBlocks);
        for (let elem of nameBlocks){
            elem.innerText = this.name;
        }
    }
}

window.onload = function () {
    let Uname;

    let navheader = new NavBarHeader('Hello!');
    let name = localStorage.getItem('UserName');

    if (name===null){
        let newName = prompt('Как к вам обращаться?','Dude');
        localStorage.setItem('UserName',newName);
    }

    navheader.name = localStorage.getItem('UserName');

    navHeaderEl.innerHTML = navheader.renderHeader;  // TODO: not work and understand
    Uname = document.querySelector('#userName');

    Uname.addEventListener('click',function () {
        let newName = prompt('Как к вам обращаться?',localStorage.getItem('UserName'));
        localStorage.setItem('UserName', newName);
        navheader.name = newName;
    })
};


