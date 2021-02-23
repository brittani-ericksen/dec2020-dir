const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UsersModel = require('../models/users');

router.get('/signup', (req, res) => {

});

router.get('/login', (req, res) => {

});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

router.post('/signup', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const response = await UsersModel.addUser(
        first_name,
        last_name,
        email,
        hash
    );
    console.log*"response in the signup route: ", response);
    if (response.id) {
        res.redirect('/users/login');
    } else {
        res.send("ERROR").status(500);
    }
});

router.post('login', async (req, res) => {
    const { email, password } = req.body;
    const user = new UsersModel(null, null, null, email, password);
    const response = await user.login();
    console.log("login response is: ", response);

    if (!!response.isValid) {
        //do stuff
        req.session.is_logged_in = response.isValid;
        req.session.user_id = response.user_id;
        req.session.first_name = response.first_name;
        req.session.last_name = response.last_name;
        res.redirect("/");
    } else {
        res.sendStatus(403);
    } 
});

module.exports = router;