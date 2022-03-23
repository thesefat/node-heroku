const app = require('express');
const router = app.Router();


router.get('/', async (req, res, next) =>
{
    res.send('Hello World ! Server is running.')

});

module.exports = router;