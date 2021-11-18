#!/usr/bin/env node

const Typos = require('./Typos');

const express = require('express');
const app = express();
const port = 8880;

app.use(express.json());

app.get('/', (req, res) => {
    const message = req.body.message || 'You didn\'t send a message, are you dumb?';
    const weight = req.body.weight || 10000;
    const typos = Typos.QwertyTypos;

    res.send({
        message: Typos.typo(message, weight, typos)
    });
})

app.listen(port, () => {
    console.log(`typos.rest is listening on port ${port}`);
})
