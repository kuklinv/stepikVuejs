"use strict";
const initSearch = 'what you search?';
let vm = new Vue({
    el: '#search',
    data: {
        header: "Hello Vue.js developer",
        request: initSearch
    },
    computed: {
        searching() {
            return this.request === '' || this.request === initSearch ? 'nothing jet' : `search:${this.request}`;
        }
    }
});
