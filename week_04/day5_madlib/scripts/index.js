"use strict";

console.log("scripts loaded");

const generateMadlib = document.querySelector("#generateMadlib");

generateMadlib.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputSelectors = document.querySelectorAll("input");
    const nameResponse = document.querySelector("#nameResponse");
    const subjectResponse = document.querySelector("#subjectResponse");

    inputSelectors.forEach(function(inputItem) {
        if (inputItem.name === "myName") {
            nameResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === "mySubject") {
            subjectResponse.innerHTML = inputItem.value;
        }
    });
});