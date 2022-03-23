const express = require("express");
const router = express.Router();
const {Student, validateStudent} = require("../models/student");
const {validateSelectedCourse} = require("../models/course");

router.get("/", async (_, res) =>
{
    const students = await Student.find().sort("name");
    res.send(students);
});

router.get("/:id", async (req, res) =>
{
    const student = await Student.findById({ _id: req.params.id });
    if (!student) res.status(404).send("This Student not found.");
    res.send(student);
});

router.post("/", async (req, res) =>
{
    const { error } = validateStudent(req.body);
    if (error) return res.status(400).send(error.details);

    const selectedCourses = await validateSelectedCourse(req.body.courseIds);

    let student = new Student({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone,
        courses: selectedCourses
    });

    student = await student.save();
    res.send(student);
});

router.put("/:id", async (req, res) =>
{
    const { error } = validateStudent(req.body);
    if (error) return res.status(400).send(error.details);
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name, isGold: req.body.isGold, phone: req.body.phone },
        { new: true }
    );
    if (!student)
        return res.status(404).send("The Student of this given ID is not found.");
    res.send(student);
});

router.delete("/:id", async (req, res) =>
{
    const student = await Student.findByIdAndRemove({ _id: req.params.id });
    if (!student) return res.status(404).send("This Student not found.");
    res.send(student);
});



module.exports = router;
