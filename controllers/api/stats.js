const router = require('express').Router();
const model = require('../../models/stats');
const handleError = require('../utils/handle-error');

router.get('/home', async (req, res) => {
  try {
    res.json(await model.home());
  } catch(e) {
    handleError(res, e);
  }
});