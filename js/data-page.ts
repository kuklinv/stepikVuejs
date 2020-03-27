import {themeStorage} from './theme.js';
import {FooterComponent} from './footer-component.js';

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
    }, 1000)
});

toolTipElement.addEventListener('mouseover', () => {
    isTooltipActive = true;
});

toolTipElement.addEventListener('mouseleave', () => {
    toolTipElement.style.display = 'none';
});

//rest api from swapi.io

const planet = {
    name: "Alderaan",
    rotation_period: "24",
    orbital_period: "364",
    diameter: "12500",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "grasslands, mountains",
    surface_water: "40",
    population: "2000000000",
    residents: [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"
    ]
};

// fetch('https://swapi.co/api/planets/').then(res => res.json(res)).then(data => console.log(data));

function renderPlanet(planet) {
    return `<div class="personage-item_container" id="planet_${planet.id}" style="flex: 1;transform: translateY(70%)">
     <h5 style="margin: 0 auto">planet:${planet.name}</h5>
     <p>gravity:${planet.gravity}</p>
     <p>terrain:${planet.terrain}</p>
     <p>diameter:${planet.diameter}</p>
     <p>population:${planet.population}</p>
     <p>residents:${planet.residents[0], planet.residents[1], planet.residents[2]}</p>
     </div>`
}

