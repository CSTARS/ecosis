const router = require('express').Router();
const model = require('../../../models/spectra');
const mongo = require('../../../lib/mongo');
const handleError = require('../../utils/handle-error');
const utils = require('../../../lib/utils');

router.get('/search', async (req, res) => {
  res.set('Content-Type', 'application/json');
  
  var filters = req.query.filters;
  var package_id = req.query.package_id; // optional
  var start = parseInt(req.query.start);
  var stop = parseInt(req.query.stop);

  try {
    if( filters ) {
      filters = JSON.parse(filters);
    }
  } catch(e) {
    return handleError(res, new Error('Failed to parse filters parameter as JSON'));
  }

  /**
   * Response will contain a stream, count, start, end and messages array
   */
  try {
    let result = await model.query(package_id, filters, start, stop);
    res.write('{"total":' + result.count +
      ',"start":' + result.start +
      ',"stop":' + result.stop +
      ', "messages": '+JSON.stringify(result.messages) +
      ', "items":[');

    // map reduce for this was super slow :(
    var first = true;
    result.stream.on('data', item => {
      mongo.cleanDatapoints(item);
      utils.addDatasetLinks(item);

      res.write((first ? '' : ',') + JSON.stringify(item));
      first = false;
    });
    result.stream.on('end', () => {
      res.end(']}');
    });
  } catch(e) {
    handleError(res, e);
  }
});

router.get('/stats', async (req, res) => {
  let pkgid = req.query.package_id;
  let filters = req.query.filters;

  try {
    res.json(await model.stats(pkgid, filters));
  } catch(e) {
    handleError(res, e);
  }
});

router.get('/count', async (req, res) => {
  let filters = req.query.filters;

  try {
    res.json({count: await model.count(filters)});
  } catch(e) {
    handleError(res, e);
  }
});

module.exports = router;