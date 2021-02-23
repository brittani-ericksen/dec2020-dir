'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = 3333;

const express = require('express');
const session = require('express-session');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(session({
    secret: 'farts',
    resave: false,
    saveUninitialized: false,
    is_logged_in: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const SERVER = HTTP.createServer(app);
SERVER.listen(PORT,HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});