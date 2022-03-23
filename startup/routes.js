
const auth = require('../middleware/auth')
const courses = require('../routers/courses')
const error = require('../middleware/error');
const express = require('express');
const helmet = require('helmet')
const home = require('../routers/home')
const morgan = require('morgan')
const students = require('../routers/students')
const users = require('../routers/users')

module.exports = function (app)
{
    app.use(express.json());
    app.use(helmet());
    if (app.get('env') === 'development')
        app.use(morgan('tiny'));
    app.use('/', home);
    app.use('/api/courses', auth, courses);
    app.use('/api/students', students);
    app.use('/api/users', users);
    app.use(error);
}