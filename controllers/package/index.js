'use strict';

var PackageModel = require('../../models/package');
var packageExport = require('./export');

module.exports = function (router) {
    var model = new PackageModel();

    router.get('/export', function(req, res){
      packageExport(model, req, res);
    });
};
