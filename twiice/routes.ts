export {};

const express = require('express')

// Folders management
const fs = require('fs'); // Allow us to manage filesystem

// ROUTER
const Routes = express.Router();

// Utilities
const logger = require('twiice/debug').logger;

const logRequest = function (req, res, next) {
    switch (res.statusCode) {
        case 200:
            logger.info(`IP : ${req.ip} : Request handled on ${req.originalUrl} : res ${res.statusCode}`);
            next();
            break;
    
        default:
            logger.error(`IP : ${req.ip} : Request Error on ${req.originalUrl} : res ${res.statusCode}`);
            next();
            break;
    }
};

const appModules = {
    modulesList: () => {
        let modules = fs.readdirSync('./modules', { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
        let appModules = [];
        modules.forEach(el => {
            // FIXME: We should be able to require without relative path, from absolute path
            let mod = require(`../modules/${el}/description.json`);
            appModules.push(mod);
        });
        return appModules;
    }
}

// console.log(appModules.modulesList());

Routes.get('/', (req, res) => {
    res.render('home');
})

module.exports = {
    routes: Routes,
    logRequest: logRequest,
    appModules: appModules,
}
