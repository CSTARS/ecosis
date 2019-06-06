const router = require('express').Router();
const model = require('../../models/usda');
const handleError = require('../utils/handle-error');

router.get('/search', async (req, res) => {
  try {
    res.json(await model.search(req.query.q));
  } catch(e) {
    handleError(res, e);
  }
});

router.get('/:code', async (req, res) => {
  try {
    res.json(await model.get(req.params.code));
  } catch(e) {
    handleError(res, e);
  }
});

module.exports = router;