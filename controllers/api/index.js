var router = require('express').Router();

router.use('/geo', require('./geo'));

module.exports = router;