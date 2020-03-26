// Views loading on database here
const fs = require('fs');
const xml2js = require('xml2js');

// Needed to work
const __views_dir = __dirname + './views/data.xml';
const logger = require('twiice/debug')

// Utilitties
const parser = new xml2js.Parser();

const Views = {
    __init__: () => {
        // Everything should start from here
        Views.loadViews();
    },
    loadViews: () => {
        // fs.readFile(__views_dir, function(err, data) {
        //     logger.info('Loading data for views');
        //     parser.parseString(data, function (err, result) {
        //         console.dir(result.twiice.record[0].field[2].h1);
        //         logger.info('Views loaded');
        //     });
        // });
        logger.info('Loading views...');
    }
}

module.exports = {
    // Exports here
    Views: Views,
}
