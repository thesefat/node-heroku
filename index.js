require('express-async-errors')
require('dotenv').config()
const express = require('express');
const winston = require('winston');
const app = express();

require('./startup/routes')(app)
require('./startup/db')();
require('./startup/logging')();

const port = process.env.PORT || 9001;
console.log(`===========================================================`)
console.log(`--------> ${process.env.NODE_ENV} Environment <-----------`)
console.log(`--------> Database Name: ${process.env.DATABASE_NAME} `)
console.log(`--------> Connection String: ${process.env.PROD_CONNECTION_STRING} `)
console.log(`===========================================================`)
app.listen(port, () => winston.info(`Listening on port ${port}`));
