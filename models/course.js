const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String
})

const Course = mongoose.model('Course', courseSchema)


function validateCourse(course)
{
    const schema = Joi.object({
        name: Joi.string().min(5).required()
    });
    return schema.validate(course);
}




async function validateSelectedCourse(courseIds)
{
    let selectedCourses = [];

    for (let courseId of courseIds)
    {
        const course = await Course.findById(courseId);
        if (!course) throw new Error("Selected course is not found.");
        selectedCourses.push(course);
    }

    return selectedCourses;
}

exports.Course = Course;
exports.validateCourse = validateCourse;
exports.validateSelectedCourse = validateSelectedCourse;
exports.courseSchema = courseSchema;