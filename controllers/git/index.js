'use strict';

var GitModel = require('../../models/git');

module.exports = function(router) {
    var model = new GitModel();

    router.get('/info', function(req, res){
      model.info(function(message){
        res.set('Content-Type', 'application/json');
        res.send(message);
      });
    });
};
