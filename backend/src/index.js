require('dotenv').config({ path: '.env' }); 

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'));

app.listen(3333, function () {
    console.log('App listening port 3333')
});