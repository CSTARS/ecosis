'use strict';

var request = require('superagent');
var ckanRoot = '';
var setup;
var logger;

module.exports = function(setup) {
  ckanRoot = setup.config.ckan.server;
  setup.process = {
    get : handleGet
  };
};

function handleGet(query, item, callback) {
  if( !logger ) {
    logger = global.setup.logger;
  }

  if( !item.ecosis ) {
    return callback(item);
  }
  if( !item.ecosis.organization || item.ecosis.organization === 'None' ) {
    return callback(item);
  }

  logger.info('Requesting org info: '+ckanRoot+'/api/3/action/organization_show');

  request
    .get(ckanRoot+'/api/3/action/organization_show')
    .query({id: item.ecosis.organization_id})
    .end(function(err, resp){
      if( err || !resp.ok ) {
        return callback(item);
      }

      try {
        resp = resp.body;
        if( typeof resp !== 'object' ) {
            resp = JSON.parse(resp);
        }
        resp = resp.result;

        var orgInfo = {
          description : resp.description,
          logo : resp.image_display_url,
          members : []
        };

        if( resp.users ) {
          resp.users.forEach(function(user){
            orgInfo.members.push(user.display_name || user.fullname);
          });
        }

        item.ecosis.organization_info = orgInfo;
        logger.info('Appended organization info');
      } catch(e) {
        logger.warn(e);
      }

      callback(item);
    });
}
