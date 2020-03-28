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
            },
            foo: () => { return 'FOO!'; },
            bar: ['tic', 'tac', 'toe'],
            // bar: () => { return ['tic', 'tac', 'toe'] },
        }
    },
}

module.exports = Views;
