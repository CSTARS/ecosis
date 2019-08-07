const router = require('express').Router();
const model = require('../../models/organization');
const handleError = require('../utils/handle-error');

router.get('/:id', async (req, res) => {
  try {
    res.json(await model.get(req.params.id));
  } catch(e) {
    handleError(res, e);
  }
});

module.exports = router;