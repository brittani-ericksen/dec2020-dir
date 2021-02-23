"use strict";

// vanilla js version
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is ready");
    const button = document.querySelector("#button");
    button.addEventListener("click", function(e) {
        e.preventDefault();
        alert("CLICKED");
    })
});

// jQuery version
$(document).ready(function () {
    console.log("jQuery DOM ready");
    $("#button2").click(function (event) {
        event.preventDefault();
        alert("button 2 clicked");
    })
})