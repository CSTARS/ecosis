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
};
