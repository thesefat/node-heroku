require('express-async-errors')

const express = require('express');
const winston = require('winston');
const app = express();

require('./startup/routes')(app)
require('./startup/db')();
require('./startup/logging')();

const port = process.env.PORT || 9001;

app.listen(port, () => winston.info(`Listening on port ${port}`));
