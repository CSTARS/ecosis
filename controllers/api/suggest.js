const router = require('express').Router();
const model = require('../../models/suggest');
const handleError = require('../utils/handle-error');

router.get('/', async (req, res) => {
  try {
    res.json(await model.suggest(req.query.q));
  } catch(e) {
    handleError(res, e);
  }
});

module.exports = router;