// Needed to work
const logger = require('twiice/debug');
const appModules = require('twiice/routes').appModules;

const Views = {
    config: {
        // views template configuration
        extname: '.hbs',
        helpers: {
            modulesList: () => {
                return appModules.modulesList();
            }
        }
    },
}

console.log('toto');

module.exports = Views;
