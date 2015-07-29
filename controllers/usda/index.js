'use strict';

var USDAModel = require('../../models/usda');

module.exports = function(router) {
    var model = new USDAModel();

    router.get('/search', function(req, res){
      res.set('Content-Type', 'application/json');

      var q = req.query.q;

      model.search(q, function(err, result){
        if( err ) {
          res.send({error: true, message: err});
        }
        res.send(result);
      });
    });

    router.get('/search', function(req, res){
      res.set('Content-Type', 'application/json');

      var code = req.query.code;

      model.get(code, function(err, result){
        if( err ) {
          res.send({error: true, message: err});
        }
        res.send(result);
      });
    });
};
