"use strict";
const express = require("express"),
    router = express.Router();

router.get("/", (req, res) => {
    res.json("Welcome to my apple ceo's api").status(200);
});

module.exports = router;