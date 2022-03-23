const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    email: {
        type: String,
        unique: true,
        minlength: 15,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 1024
    }
})


userSchema.methods.generateAuthToken = function ()
{
    const token = jwt.sign({ _id: this._id }, 'jwtPrivateKey'); // TODO : jwtPrivateKey should be replaceable with environment variable
    return token;
}

const User = mongoose.model('User', userSchema)


function validateRegister(user)
{
    const schema = Joi.object({
        name: Joi.string().min(4).max(255).required(),
        email: Joi.string().min(15).max(255),
        password: Joi.string().min(4).max(1024).required()
    });
    return schema.validate(user);
}


function validateLogin(auth)
{
    const schema = Joi.object({
        email: Joi.string().min(15).max(255),
        password: Joi.string().min(4).max(1024).required()
    });
    return schema.validate(auth);
}




exports.User = User;
exports.validateRegister = validateRegister;
exports.validateLogin = validateLogin;
exports.userSchema = userSchema;