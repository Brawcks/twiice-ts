const express = require('express');
const app = express();

const Tools = {
    newRequest: (req, res, next) => {
        Logger.debug('Handling request : ');
        next();
    }
}

const Logger = {
    currentDateLogs: () => {
        var currentdate = new Date(); 
        var datetime =  currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        return datetime;
    },
    debug: (msg) => {
      return console.log('\x1b[36m%s\x1b[0m', Logger.currentDateLogs() + ' : DEBUG: ' + msg);
    },
    info: (msg) => {
        return console.log('\x1b[36m%s\x1b[0m', Logger.currentDateLogs() + ' : INFO: ' + msg);
    },
    warning: (msg) => {
        return console.log('\x1b[33m%s\x1b[0m', Logger.currentDateLogs() + ' : WARNING: ' + msg);
    },
    error: (msg, error) => {
        return console.log('\x1b[31m', Logger.currentDateLogs() + ' : ERROR: ' + msg + ' | ERR : ' + error);
    }
}

module.exports = {
    tools: Tools,
    logger: Logger,
}