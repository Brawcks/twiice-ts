// In this file, we should handle database connection (SQL in case)

export {};

const logger = require('twiice/debug').logger;

// IMPORTS
import {createConnection} from "typeorm";

const connect = new Promise(function(resolve, reject) {
    logger.info('Connecting database ...')
    createConnection().then(async connection => {
        resolve(logger.info('Database connection up ! Keep going !'));
    }).catch(error => reject(logger.error("TypeORM connection error: ", error)));
});

module.exports = {
    connect: connect,
}
