const app = require('express');
const router = app.Router();
const { User, validateRegister, validateLogin } = require('../models/user')
const bcrypt = require('bcrypt');
const _ = require('lodash');





router.post('/register', async (req, res) =>
{
    const { error } = validateRegister(req.body);
    if (error) return res.status(400).send(error.details);

    let user = await User.findOne({ email: req.body.email });

    if (user) return res.status(400).send("User already registered.")
    user = new User(_.pick(req.body, ['name', 'email', 'password']))
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    user = await user.save();

    const token = user.generateAuthToken();

    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
})


router.post('/login', async (req, res) =>
{
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send(error.details);

    let user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send("User not found.")


    let validPasswprd = await bcrypt.compare(req.body.password, user.password);

    if (!validPasswprd) return res.status(400).send("Invalid email or password.");

    const token = user.generateAuthToken();

    res.header('x-auth-token').send(token);


})




module.exports = router;