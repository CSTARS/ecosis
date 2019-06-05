const router = require('express').Router();
const model = require('../../models/usda');
const handleError = require('../utils/handle-error');

router.get('/search', function(req, res){
  try {
    res.json(await model.search(req.query.q));
  } catch(e) {
    handleError(res, e);
  }
});

router.get('/:code', function(req, res){
  try {
    res.json(await model.get(req.params.code));
  } catch(e) {
    handleError(res, e);
  }
});
