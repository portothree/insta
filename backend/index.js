const express = require('express');
const mongoose = require('mongoose');

const app = express()

app.get('/', (req, res) => {
    return res.send('InstaPorto')
});

app.listen(3333, function () {
    console.log('App listening port 3333')
});