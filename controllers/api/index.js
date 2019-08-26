var router = require('express').Router();

router.use('/spectra', require('./spectra'));
router.use('/package', require('./package'));
router.use('/suggest', require('./suggest'));
router.use('/organization', require('./organization'));

module.exports = router;