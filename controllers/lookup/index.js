'use strict';

var LookupModel = require('../../models/lookup');

module.exports = function(router) {
    var model = new LookupModel();

    router.get('/', function(req, res){
      model.suggest(req.query.q, function(err, keys){
        if( err ) {
          return res.send({error: true, messages: err});
        }
        res.send(keys);
      });
    });
};
