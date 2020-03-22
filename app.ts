import "reflect-metadata";

// ADD ROOT PATH
require('app-module-path').addPath(__dirname);

const express = require('express')
const app = express()

// Needed packages
const fs = require('fs');
const xml2js = require('xml2js');

// Twiice utilities
const logger = require('twiice/debug');
const db = require('twiice/db');
const models = require('twiice/models')
const views = require('twiice/views')

app.get('/', function (req, res) {
    res.send('Hello World!');
    
})

app.listen(3000, function () {
    logger.info('Connecting database ...')
    db.conn.authenticate()
    .then(() => {
        logger.info('Connection has been established successfully.');
        logger.info('Loading models : Database structure')
        ///////////
        /// NOTE : Load all modules here, before syncing
        ///////////
        db.conn.sync({ force: true }).then(() => {
            logger.info('Models loaded');
            views.Views.__init__();
        });
    })
    .catch(err => {
        logger.error('Unable to connect to the database:', err);
    });
})