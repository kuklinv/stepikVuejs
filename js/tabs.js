var _a;
function Tab(tabData, i) {
    return "<li class=\"tab-link_tab\"><span id=\"" + i + "\">" + tabData.name + "</span></li>";
}
function TabList(tabs) {
    return "<ul>\n                " + tabs.map(function (el, i) { return Tab(el, i); }).join('') + "\n            </ul>";
}
var tabs = [
    {
        name: 'github',
        contentLink: 'https://github.com/kuklinv',
        contentLinkText: '@github/kuklinv',
        contentText: 'my project on gitHub'
    },
    {
        name: 'email',
        contentLink: 'mailto:vitalykuklin@gmail.com',
        contentLinkText: 'vitalykuklin@gmail.com',
        contentText: 'mail me'
    },
    {
        name: 'website',
        contentLink: 'http://http://www.devcod.pro/',
        contentLinkText: 'www.devcod.pro/',
        contentText: 'visit me'
    }
];
(_a = document.querySelector('.tabs_container')) === null || _a === void 0 ? void 0 : _a.innerHTML = TabList(tabs);
function TabContent(tab) {
    return "<div class=\"tabs_content_container\" style=\"display: block\">\n                <a href=\"" + tab.contentLink + "\" target=\"_blank\">" + tab.contentLinkText + "</a>   \n                <p>" + tab.contentText + "</p>\n</div>";
}
// let tabsLink = [...document.querySelectorAll('.tab-link_tab')]; //TODO: not?
var tabsContainer = document.querySelector('.tabs_container');
tabsContainer === null || tabsContainer === void 0 ? void 0 : tabsContainer.addEventListener('click', function (event) {
    var _a;
    var target = event.target;
    console.log(target);
    if (target.tagName !== 'SPAN') {
        return;
    }
    //document.querySelector('.tab-content_wrapper')?.innerHTML = TabContent(tabs[+this.id]);  //TODO: not work with all selectors (only first) and not hide information on second clik - need sweetcher
    (_a = document.querySelector('.tab-content_wrapper')) === null || _a === void 0 ? void 0 : _a.innerHTML = TabContent(tabs[+target.id]); //TODO: not working yet //id!!
});
