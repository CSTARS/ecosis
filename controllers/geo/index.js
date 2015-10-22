'use strict';

var GeoModel = require('../../models/geo');
var mqe = global.setup.mqe;

module.exports = function (router) {
    var model = new GeoModel();

    router.get('/preview', function(req, res){
      var query = mqe.requestToQuery(req);

      model.count(query, function(err, result) {
        res.set('Content-Type', 'application/json');

        if( err ) {
          return res.send({error: true, message: err});
        }
        res.send({count: result});
      });
    });

    router.get('/spectra', function(req, res){
      var package_id = req.query.package_id;
      if( !package_id ) {
        return res.send({error:true, message:'package_id required'});
      }

      model.getSpectraLocations(package_id, function(err, result) {
        if( err ) {
          return res.send({error: true, message: err});
        }
        res.send(result);
      });
    });

};
