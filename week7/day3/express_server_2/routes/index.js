"use strict";
const express = require("express"), 
    router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from Express >:O");
});

module.exports = router;
