const router = require('express').Router();
const model = require('../../../models/spectra');
const mongo = require('../../../lib/mongo');
const handleError = require('../../utils/handle-error');
const utils = require('../../../lib/utils');

router.get('/search/:package_id', async (req, res) => {
  search(req.params.package_id, req, res);
});
router.get('/search', async (req, res) => {
  search(null, req, res);
});

const REGEX_MATCH = /^\/.*\/$/;

async function search(package_id, req, res) {
  res.set('Content-Type', 'application/json');
  
  var filters = req.query.filters;
  var start = parseInt(req.query.start);
  var stop = parseInt(req.query.stop);

  try {
    if( filters ) {
      filters = JSON.parse(filters);
      for( let filter of filters ) {
        for( let key in filter ) {
          if( typeof filter[key] === 'string' && filter[key].match(REGEX_MATCH) ) {
            filter[key] = new RegExp(filter[key].replace(/\//g, ''), 'i');
          }
        }
      }
    }
  } catch(e) {
    return handleError(res, new Error('Failed to parse filters parameter as JSON'));
  }

  /**
   * Response will contain a stream, count, start, end and messages array
   */
  try {

    let first = true;

    await model.query(package_id, filters, start, stop, {
      start : result => {
        res.write('{"total":' + result.count +
          ',"start":' + result.start +
          ',"stop":' + result.stop +
          ', "messages": '+JSON.stringify(result.messages) +
          ', "items":[');
      },
      data : item => {
        mongo.cleanDatapoints(item);
        utils.addDatasetLinks(item);
        res.write((first ? '' : ',') + JSON.stringify(item));
        first = false;
      },
      end : () => {
        res.end(']}');
      }
    });

  } catch(e) {
    handleError(res, e);
  }
}

router.get('/stats/:package_id', async (req, res) => {
  let pkgid = req.params.package_id;
  let filters = req.query.filters || [];

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