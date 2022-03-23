const Joi = require('joi');
const mongoose = require('mongoose');
const { courseSchema } = require('../models/course')

const Student = mongoose.model('Student', new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 55,
        required: true
    },
    isGold: {
        type: Boolean,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 13
    },
    courses: {
        type: [courseSchema],
        required: true
    }
}))



function validateStudent(student)
{
    const schema = Joi.object({
        name: Joi.string().min(3).max(55),
        isGold: Joi.boolean(),
        phone: Joi.string().min(11).max(13),
        courseIds: Joi.array().required()
    })

    return schema.validate(student);
}



exports.Student = Student;
exports.validateStudent = validateStudent;