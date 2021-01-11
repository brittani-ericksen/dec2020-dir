"use strict";

fetch("https://api.chucknorris.io/jokes/random?category=dev")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        updateBody(data.value);
        // return data;
    })
    .catch(function (error) {
        return error;
    });

function updateBody(quote) {
    const chuckSays = document.querySelector("#chuckSays");
    chuckSays.innerHTML = quote;
};