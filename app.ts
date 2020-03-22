import "reflect-metadata";

// ADD ROOT PATH
require('app-module-path').addPath(__dirname);

const express = require('express')
const app = express()

// Needed packages
// const fs = require('fs');
// const xml2js = require('xml2js');

// Twiice utilities
const logger = require('twiice/debug');
const db = require('twiice/db');
// const models = require('twiice/models/models');
// const views = require('twiice/views')

app.get('/', function (req, res) {
    res.send('Hello World!');
    
})

db.connect.then(function () {
    app.listen(3000, function() {
        logger.info('Server up : listening on port 3000');
    })
});