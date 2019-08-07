var router = require('express').Router();

//router.use('/geo', require('./geo'));
router.use('/spectra', require('./spectra'));
router.use('/package', require('./package'));
// router.use('/stats', require('./stats'));
router.use('/suggest', require('./suggest'));
// router.use('/usda', require('./usda'));
router.use('/organization', require('./organization'));

module.exports = router;