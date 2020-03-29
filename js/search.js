"use strict";
let vm = new Vue({
    el: '#search',
    data: {
        header: "Hello Vue.js developer",
        request: "what you search?"
    },
    computed: {
        searching() {
            return this.request.toLowerCase();
        }
    }
});
