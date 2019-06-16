require('dotenv').config({ path: '.env' }); 

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.get('/', (req, res) => {
    return res.send('InstaPorto')
});

app.listen(3333, function () {
    console.log('App listening port 3333')
});