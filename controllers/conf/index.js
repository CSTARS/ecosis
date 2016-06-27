'use strict';

module.exports = function (router) {
    var config = require('../../lib/config')();
    var json = JSON.stringify({
      url : config.get('mqe').ckan.server,
      prod : config.get('mqe').ckan.prod
    });

    router.get('/', function(req, res){
      res.send(`window.ckan = ${json};`);
    });
};
