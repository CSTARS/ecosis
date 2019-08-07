const logger = require('../lib/logger');
const config = require('../lib/config');
const request = require('request');

class OrganizationModel {

  get(id, includeUsers=false) {
    logger.info('Requesting org info: '+config.ckan.url+'/api/3/action/organization_show');

    return new Promise((resolve, reject) => {
      request(
        config.ckan.url+'/api/3/action/organization_show', 
        {
          qs : {id}
        },
        (error, resp) => {
          if( error ) return reject(error);
          if( resp.statusCode !== 200 ) {
            return reject({
              statusCode : resp.statusCode,
              body: resp.body
            });
          }
          
          try {
            let org = JSON.parse(resp.body);
            if( org.error ) return reject(org);
            org = org.result;

            if( !includeUsers ) delete org.users;
            else org.users = org.users.map(u => ({name: u.display_name, role: u.capacity}));
            resolve(org);

          } catch(e) {
            reject(e);
          }
        }
      )
    });
  }
}

module.exports = new OrganizationModel();