export {};

const express = require('express')
const app = express()

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

Routes.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

module.exports = {
    routes: Routes,
    logRequest: logRequest,
}
