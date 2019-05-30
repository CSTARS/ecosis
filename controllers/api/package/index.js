const router = require('express').Router();
const model = require('../../../models/package');
const handleError = require('../../utils/handle-error');
var packageExport = require('./export');

router.get('/:packageId', async (req, res) => {
  try {
    res.json(await model.get(req.params.packageId));
  } catch(e) {
    handleError(res, e);
  }
});

router.get('/:packageId/export', (req, res) => {
  packageExport(model, req, res);
});

router.get('/count', (req, res) => {
  search(req.query, res);
});
router.post('/count', (req, res) => {
  search(req.body, res);
});
async function count(params, res) {
  try {
    res.json(await model.count(params));
  } catch(e) {
    handleError(res, e);
  }
}

router.get('/search', (req, res) => {
  search(req.query, res);
});
router.post('/search', (req, res) => {
  search(req.body, res);
});
async function search(params, res) {
  try {
    res.json(await model.search(params));
  } catch(e) {
    handleError(res, e);
  }
}


module.exports = router;