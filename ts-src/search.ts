import set = Reflect.set;

const initSearch = 'what you search?';

let vm = new Vue({
    el: '#search',
    data: {
        header: "Hello Vue.js developer",
        request: initSearch,
        films: [],
        showViewMenu: false,
        bookmarkedFilms: []
    },
    computed: {
        searching() {
            return this.request === '' || this.request === initSearch ? 'nothing jet    ' : `search:${this.request}`;
        }
    },
    methods: {
        addFilmToBookmark(film) {
            if (!this.bookmarkedFilms.find(el => el.title === film.title)) {
                this.bookmarkedFilms.push(film);
            }
            this.showViewMenu = true;
            setTimeout(()=>{
                this.showViewMenu = false;
            }, 1000);
        },
        deleteFilm({title}){
            this.bookmarkedFilms = this.bookmarkedFilms.filter(el => el.title != title);
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