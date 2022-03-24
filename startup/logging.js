require('express-async-errors')
const winston = require('winston')
require('winston-mongodb');
const {config} = require('../config/environment')

module.exports = function ()
{

    process.on('uncaughtException', (ex) =>
    {
        winston.error(ex.message)
    })

    process.on('unhandledRejection', (ex) =>
    {
        winston.error(ex.message)
    })

    winston.add(new winston.transports.File({ filename: 'logfile.log' }));

    // window.add(new winston.transports.Console({ colorize: true, prettyPrint: true }))



    // winston.handle(new winston.transports.File({ filename: 'exceptions.log' }))
    // winston.RejectionHandler(new winston.transports.File({ filename: 'rejections.log' }))
    winston.add(new winston.transports.MongoDB({db: config().winstonConnectionString}))

}
