var _a, _b;
function Tab(tabData, i) {
    return "<li class=\"tab-link_tab\" id=\"" + i + "\"><span>" + tabData.name + "</span></li>";
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
    },
];
(_a = document.querySelector('.tabs_container')) === null || _a === void 0 ? void 0 : _a.innerHTML = TabList(tabs);
function TabContent(tab) {
    return "<div class=\"tabs_content_container\" style=\"display: block\">\n                <a href=\"" + tab.contentLink + "\" target=\"_blank\">" + tab.contentLinkText + "</a>   //TODO: not awesom look\n                <p>" + tab.contentText + "</p>\n</div>";
}
(_b = document.querySelector('.tab-link_tab')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a;
    (_a = document.querySelector('.tab-content_wrapper')) === null || _a === void 0 ? void 0 : _a.innerHTML = TabContent(tabs[+this.id]); //TODO: not work with all selectors (only first) and not hide information on second clik - need sweetcher
});
