"use strict";

function getPlanets() {
    const url = `https://swapi.dev/api/planets/`;
    get(url).then(function (response) {
        console.log(response.results);
        createPlanetList(response.results);
    })
}

function createPlanetList(planetList) {
    const form = document.querySelector("#changePlanet");
    const planetSelect = document.createElement("select");

    planetList.map(function(planet) {
        const planetOption = document.createElement("option");
        planetOption.value = planet.name;
        planetOption.text = planet.name;
        planetSelect.appendChild(planetOption);
    });
    form.appendChild(planetSelect);
}

getPlanets();