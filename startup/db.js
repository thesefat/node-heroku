// noinspection JSVoidFunctionReturnValueUsed

const winston = require("winston");
const mongoose = require('mongoose');
const {config} = require('../config/environment');

module.exports = function () {
    console.log(config().connectionString)
    mongoose.connect(config().connectionString, {
        dbName: config().databaseName,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        winston.info('Connected to MongoDB')
    });
}
