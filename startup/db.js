const winston = require("winston");
const mongoose = require('mongoose');
const { config } = require('../environments/development')

module.exports = function ()
{
    mongoose.connect(config.connectionString, {
        dbName: config.databaseName,
        useNewUrlParser: config.useNewUrlParser,
        useUnifiedTopology: config.useUnifiedTopology,
    }).then(() =>
    {
        winston.info('Connected to MongoDB')
    });
}