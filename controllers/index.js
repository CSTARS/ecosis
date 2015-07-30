'use strict';

var fs = require('fs');
var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/api', function (req, res) {
      console.log('here');
        res.send(fs.readFileSync('../public/api/index.html'));
    });

    router.get('/foo', function (req, res) {
      console.log('here');
      res.send(fs.readFileSync(__dirname+'/../public/api/index.html'));
    });

};
