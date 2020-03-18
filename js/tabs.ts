function Tab(tabData,i) {
    return `<li class="tab-link_tab" id="${i}"><span>${tabData.name}</span></li>`;
}
function TabList(tabs){
    return `<ul>
                ${tabs.map((el,i)=>Tab(el,i)).join('')}
            </ul>`

}

let tabs = [
    {
        name:'github',
        contentLink:'https://github.com/kuklinv',
        contentLinkText:'@github/kuklinv',
        contentText:'my project on gitHub'
    },
    {
        name:'email',
        contentLink:'mailto:vitalykuklin@gmail.com',
        contentLinkText:'vitalykuklin@gmail.com',
        contentText:'mail me'
    },
    {
        name:'website',
        contentLink:'http://http://www.devcod.pro/',
        contentLinkText:'www.devcod.pro/',
        contentText:'visit me'
    },
];

document.querySelector('.tabs_container')?.innerHTML = TabList(tabs);

function TabContent(tab) {
    return `<div class="tabs_content_container" style="display: block">
                <a href="${tab.contentLink}" target="_blank">${tab.contentLinkText}</a>   //TODO: not awesom look
                <p>${tab.contentText}</p>
</div>`
}

document.querySelector('.tab-link_tab')?.addEventListener('click',function () {
   document.querySelector('.tab-content_wrapper')?.innerHTML = TabContent(tabs[+this.id]);  //TODO: not work with all selectors (only first) and not hide information on second clik - need sweetcher
});