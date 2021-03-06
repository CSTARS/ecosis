const router = require('express').Router();
const model = require('../../../models/package');
const handleError = require('../../utils/handle-error');
var packageExport = require('./export');
const search = require('../../../models/search');
const utils = require('../../../lib/search');
const stats = require('../../../models/stats');

router.get('/count', (req, res) => {
  count(req.query, res);
});
router.post('/count', (req, res) => {
  count(req.body, res);
});
async function count(params, res) {
  try {
    params = utils.reqQueryParser(params);
    res.json({count: await search.count(params)});
  } catch(e) {
    handleError(res, e);
  }
}

router.get('/search', (req, res) => {
  searchFn(req.query, res);
});
router.post('/search', (req, res) => {
  searchFn(req.body, res);
});
async function searchFn(params, res) {
  try {
    params = utils.reqQueryParser(params);
    res.json(await search.run(params));
  } catch(e) {
    handleError(res, e);
  }
}

router.get('/stats', async (req, res) => {
  try {
    res.json(await stats.home());
  } catch(e) {
    handleError(res, e);
  }
});

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


module.exports = router;