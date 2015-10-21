'use strict';

var LookupModel = require('../../models/lookup');

module.exports = function(router) {
    var model = new LookupModel();

    router.get('/key', function(req, res){
      model.key(req.query.q, function(err, keys){
        if( err ) {
          return res.send({error: true, messages: err});
        }
        res.send(keys);
      });
    });

    router.get('/value', function(req, res){
      model.value(req.query.key, req.query.q, function(err, values){
        if( err ) {
          return res.send({error: true, messages: err});
        }
        res.send(values);
      });
    });
};
