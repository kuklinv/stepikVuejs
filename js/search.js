"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var set = Reflect.set;
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
        },
        filteredFilms() {
            if (this.request !== initSearch && this.request !== "" && this.request !== " ") {
                return this.films.filter(el => el.title.toLowerCase().includes(this.request.toLowerCase()));
            }
            else {
                return this.films;
            }
        }
    },
    methods: {
        addFilmToBookmark(film) {
            if (!this.bookmarkedFilms.find(el => el.title === film.title)) {
                this.bookmarkedFilms.push(film);
            }
            this.showViewMenu = true;
            setTimeout(() => {
                this.showViewMenu = false;
            }, 1000);
        },
        deleteFilm({ title }) {
            this.bookmarkedFilms = this.bookmarkedFilms.filter(el => el.title != title);
        }
    },
    mounted() {
        return __awaiter(this, void 0, void 0, function* () {
            this.films = yield fetch('https://swapi.co/api/films/').then(res => res.json()).then(data => data.results);
        });
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
