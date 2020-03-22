import "reflect-metadata";

// ADD ROOT PATH
require('app-module-path').addPath(__dirname);

const express = require('express')
const app = express()

// Needed packages
// const fs = require('fs');
// const xml2js = require('xml2js');

// Twiice utilities
const logger = require('twiice/debug').logger;
const db = require('twiice/db');
const routes = require('twiice/routes').routes;
const logRequest = require('twiice/routes').logRequest;
const PORT = 3000;
// const models = require('twiice/models/models');
// const views = require('twiice/views')

// logRequest : Allow us to track and monitor activities (requests from users)
app.use(logRequest);

app.use('/', routes);

db.connect.then(function () {
    app.listen(PORT, function() {
        logger.info(`Server up : listening on port ${PORT}`);
    })
});