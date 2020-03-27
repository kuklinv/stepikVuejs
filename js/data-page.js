import { themeStorage } from './theme.js';
import { FooterComponent } from './footer-component.js';
new FooterComponent(document.querySelector('#footer-component'));
themeStorage.moduleUpdate();
// if its bee a _blank page - its listener need to reload all page with changed theme
// window.addEventListener('storage',function (event) {
//     themeStorage.moduleUpdate();
// };
// tooltip TODO: will make as component
let toolTipElement = document.querySelector('.tooltip_wrapper'); // for tooltip - popup
let tooltipTarget = document.querySelector('#text');
let isTooltipActive = false;
tooltipTarget.addEventListener('mouseover', () => {
    toolTipElement.style.display = 'block';
});
tooltipTarget.addEventListener('mouseleave', () => {
    setTimeout(function () {
        if (!isTooltipActive) {
            toolTipElement.style.display = 'none';
        }
    }, 1000);
});
toolTipElement.addEventListener('mouseover', () => {
    isTooltipActive = true;
});
toolTipElement.addEventListener('mouseleave', () => {
    toolTipElement.style.display = 'none';
});
//rest api from swapi.io
// const planet = {
//     name: "Alderaan",
//     rotation_period: "24",
//     orbital_period: "364",
//     diameter: "12500",
//     climate: "temperate",
//     gravity: "1 standard",
//     terrain: "grasslands, mountains",
//     surface_water: "40",
//     population: "2000000000",
//     residents: [
//         "https://swapi.co/api/people/5/",
//         "https://swapi.co/api/people/68/",
//         "https://swapi.co/api/people/81/"
//     ]
// };
// fetch('https://swapi.co/api/planets/').then(res => res.json(res)).then(data => console.log(data));
window.onload = async function () {
    let res = await fetch('https://swapi.co/api/planets/').then(res => res.json());
    planetArr = res.results.map((el, index) => {
        el.index = index;
        return el;
    });
    nextPlanetPage = res.next; // next page from api (10 items on one page)
    prevPlanetPage = res.previous;
    drawPlanetsOnHTML();
};
let planetArr = []; // all planets on api page (10)
let pageChunckPlanets = []; // 5 planets on our page
let nextPlanetPage = ''; // next api page
let prevPlanetPage = ''; // prev api page
function renderPlanet(planet) {
    return `<div class="personage-item_container" id="planet_${planet.index}" style="flex: 1;transform: translateY(50%)">
     <h5 style="margin: 0 auto">planet: ${planet.name}</h5>
     <p>gravity: ${planet.gravity}</p>
     <p>terrain: ${planet.terrain}</p>
     <p>diameter: ${planet.diameter}</p>
     <p>population: ${planet.population}</p>
     <p>residents: ${planet.residents[0], planet.residents[1], planet.residents[2]}</p>
     </div>`;
}
function drawPlanetsOnHTML(startIndex = 0, endIndex = 5) {
    pageChunckPlanets = planetArr.slice(startIndex, endIndex);
    let drawPlanets = pageChunckPlanets.map(item => renderPlanet(item)); // draw on html 5-chunk planets
    let planetContainer = document.querySelector('.personages_container');
    planetContainer.innerHTML = drawPlanets.join('');
    let itemPopupSwitcher = false;
    planetContainer.addEventListener('click', (ev) => {
        let target = ev.target.closest('.personage-item_container');
        if (target.tagName !== 'DIV')
            return;
        itemPopupSwitcher = !itemPopupSwitcher;
        if (itemPopupSwitcher) {
            gsap.to(target, 0.6, {
                y: '10%',
                ease: 'Back.easeOut'
            });
        }
        else {
            gsap.to(target, 0.6, {
                y: '50%',
                ease: 'Back.easeOut'
            });
        }
    });
}
document.querySelector('#arrows-button').addEventListener('click', (ev) => {
    let target = ev.target.closest('.arrow');
    if (target.tagName != 'DIV')
        return;
    let lastInCurrentChunk = pageChunckPlanets[pageChunckPlanets.length - 1].i;
    let firstInCurrentChunk = pageChunckPlanets[0].i;
    if (target.id == 'next') {
        if (lastInCurrentChunk < planetArr.length - 1 && nextPlanetPage !== null) {
            drawPlanetsOnHTML(lastInCurrentChunk + 1, lastInCurrentChunk + 6);
        }
        else if (nextPlanetPage !== null) {
            loadPlanetPage(nextPlanetPage);
        }
    }
    else if (target.id == 'prev') { //TODO: not working
        if (firstInCurrentChunk > 0 && prevPlanetPage !== null) {
            drawPlanetsOnHTML(firstInCurrentChunk - 5, firstInCurrentChunk);
        }
        else if (prevPlanetPage !== null)
            loadPlanetPage(prevPlanetPage);
    }
});
const loadPlanetPage = async function loadPlanetPageFromSWAPI(url) {
    let { next, previous, results } = await fetch(url).then(res => res.json());
    nextPlanetPage = next;
    prevPlanetPage = previous;
    planetArr = results.map((el, index) => {
        el.index = index;
        return el;
    });
    drawPlanetsOnHTML();
};
