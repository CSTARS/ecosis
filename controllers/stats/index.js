'use strict';

var StatusModel = require('../../models/stats');

module.exports = function (router) {
    var model = new StatusModel();

    router.get('/home', function(req, res){
      model.get(function(err, result){
        if( err ) {
          res.send({error: true, message: err});
        } else {
          res.send(result);
        }
      });
    });

};
