const initSearch = 'what you search?';

let vm = new Vue({
    el: '#search',
    data: {
        header: "Hello Vue.js developer",
        request: initSearch,
        films: [],
        showViewMenu: false,
        bookmarkedFilms:[]
    },
    computed: {
        searching() {
            return this.request === '' || this.request === initSearch ? 'nothing jet    ' : `search:${this.request}`;
        }
    },
    async mounted() {
        this.films = await fetch('https://swapi.co/api/films/').then(res => res.json()).then(data => data.results);
    }

    // TODO: problem with fetch()
    /*
            this.films = await fetch('https://swapi.co/api/films/',{
              method: 'PATCH',
              headers: {
             'Content-Type': 'application/json'
              'API-Key': 'secret'
            }).then(res => res.json()).then(data => data.results);

     */
});