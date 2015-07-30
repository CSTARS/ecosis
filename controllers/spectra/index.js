'use strict';

var SpectraModel = require('../../models/spectra');
var query = require('./query');

module.exports = function (router) {
    var model = new SpectraModel();

    router.get('/query', function(req, res){
      res.set('Content-Type', 'application/json');
      query(model, req, res);
    });

    router.get('/stats', function(req, res){
      res.set('Content-Type', 'application/json');

      var pkgid = req.query.package_id;
      var filters = req.query.filters;

      model.stats(pkgid, filters, function(err, result){
        if( err ) {
          res.send({error: true, message: err});
        }
        res.send(result);
      });
    });

    router.get('/random', function(req, res){
      res.set('Content-Type', 'application/json');

      model.random(function(err, result){
        if( err ) {
          res.send({error: true, message: err});
        }
        res.send(result);
      });
    });

    router.get('/count', function(req, res) {
      res.set('Content-Type', 'application/json');

      model.count(function(err, count){
        if( err ) {
          res.send({error: true, message: err});
        }
        res.send({count: count});
      });
    });
};
