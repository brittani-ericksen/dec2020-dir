"use strict";
const express = require("express"), 
    router = express.Router();

const friendsArr = require("../db");

router.get("/", function (req, res) {
    let htmlData = `<ul>`;
    friendsArr.map(function (friend) {
        htmlData += `<li>${friend.name}</li>`;

    })
    htmlData += '</ul>'

    res.send(htmlData);
});

module.exports = router;