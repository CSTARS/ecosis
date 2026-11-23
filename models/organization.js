const logger = require('../lib/logger');
const config = require('../lib/config');

class OrganizationModel {

  async get(id, includeUsers=false) {
    logger.info('Requesting org info: '+config.ckan.url+'/api/3/action/organization_show');

    let url = config.ckan.url+'/api/3/action/organization_show?'+new URLSearchParams({id});
    let resp = await fetch(url);
    let body = await resp.text();

    if( resp.status !== 200 ) {
      throw {
        statusCode : resp.status,
        body
      };
    }

    let org = JSON.parse(body);
    if( org.error ) throw org;
    org = org.result;

    if( !includeUsers ) delete org.users;
    else org.users = org.users.map(u => ({name: u.display_name, role: u.capacity}));
    return org;
  }
}

module.exports = new OrganizationModel();
