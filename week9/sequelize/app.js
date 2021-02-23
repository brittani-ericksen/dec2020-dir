'use strict';

const http = require('http');
const hostname = '127.0.0.1';
const port = 3333;

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Sequelize = require('sequelize');
const { User } = require('./models');

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const singleUser = await User.findByPk(req.params.id);
    res.json(singleUser);
});

app.post('/users', async (req, res) => {
    // req.body contains an Object with first_name, last_name, email
    const { first_name, last_name, email } = req.body;
    const newUser = await User.create({
        first_name,
        last_name,
        email
    });
    
    // Send back the new user's ID in the response:
    res.json({
        id: newUser.id
    });
});

app.post('/users/:id', async (req, res) => {
    const { id } = req.params;
    const updatedUser = await User.update(req.body, {
        where: {
            id
        }
    });
    
    res.json(updatedUser);
});

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id
        }
    });
    res.json(deletedUser);
});