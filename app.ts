import "reflect-metadata";

// ADD ROOT PATH
require('app-module-path').addPath(__dirname);

const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

// Loading routes / routes utilities
const logRequest = require('twiice/routes').logRequest;

// logRequest : Allow us to track and monitor activities (requests from users)
app.use(logRequest);

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './twiice/views');

// Set directory for static files
app.use('/static', express.static(__dirname + '/twiice/static'));

// Needed packages
const fs = require('fs'); // Allow us to manage filesystem
const xml2js = require('xml2js'); // Allow us to parse xml files

// Folder management
const glob = require( 'glob' );
const path = require( 'path' );

// Twiice utilities
const logger = require('twiice/debug').logger;
const routes = require('twiice/routes').routes;

// Loading database management
const db = require('twiice/db');

// Server side constants
const PORT = 3000;

///////////////////////////////
///////// LOAD MODULES FILES
///////////////////////////////

glob.sync( './modules/**/index.js' ).forEach( function( file ) {
    logger.info(`Loading file : ${file}`);
    require( path.resolve( file ) );
    logger.info(`${file} Loaded`);
});

///////////////////////////////
///////// LOAD ROUTES FILES
///////////////////////////////

glob.sync( './modules/**/routes.js' ).forEach( function( file ) {
    logger.info(`Loading route file : ${file}`);
    app.use(require(path.resolve(file)));
    logger.info(`Route ${file} Loaded`);
});

// Load final routes

// const models = require('twiice/models/models');
// const views = require('twiice/views')

app.use('/', routes);

db.connect.then(function () {
    app.listen(PORT, function() {
        logger.info(`Server up : listening on port ${PORT}`);
    })
});
