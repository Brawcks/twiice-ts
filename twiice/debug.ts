module.exports = {
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
      return console.log('\x1b[36m%s\x1b[0m', module.exports.currentDateLogs() + ' : DEBUG: ' + msg);
    },
    info: (msg) => {
        return console.log('\x1b[36m%s\x1b[0m', module.exports.currentDateLogs() + ' : INFO: ' + msg);
    },
    warning: (msg) => {
        return console.log('\x1b[33m%s\x1b[0m', module.exports.currentDateLogs() + ' : WARNING: ' + msg);
    },
    error: (msg, error) => {
        return console.log('\x1b[31m', module.exports.currentDateLogs() + ' : ERROR: ' + msg + ' | ERR : ' + error);
    },
}