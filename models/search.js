const mongo = require('../lib/mongo');
const config = require('../lib/config');
const mapReduce = require('../lib/mongo/search-map-reduce');
const logger = require('../lib/logger');

const REGEX_MATCH = /^\/.*\/$/;

class PackageSearchModel {

  async run(appQuery) {
    var response = {
      total   : 0,
      start   : appQuery.start,
      stop    : appQuery.stop,
      items   : [],
      filters : {}
    }

    if( !appQuery.filters ) appQuery.filters = [];
    if( !appQuery.start ) appQuery.start = 0;
    if( !appQuery.stop ) appQuery.stop = 10;

    let query = this.appQueryToMongoQuery(appQuery);
  
    // run mapreduce for counts
    response.filters = await mapReduce(query);

    // get total for query
    let collection = await mongo.packagesCollection();
    response.total = await collection.count(query);

    // actually run mongo query
    let items = await this._rangedQuery(query, appQuery);

    if( config.mongo.isMapReduce ) {
      this._flattenMapreduce(items);
    }

    response.items = items;
    return response;
  }

  // find a sorted range of responsed without returned the entire dataset
  async _rangedQuery(mongoQuery, appQuery) {
    var filters = {};

    if (appQuery.projection) {
      filters = appQuery.projection;
    } else if( config.mongo.searchProjection ) {
      filters = config.mongo.searchProjection;
    }

    if( config.mongo.blacklist ) {
      for( var i = 0; i < config.mongo.blacklist.length; i++ ) {
        filters[(config.mongo.isMapReduce ? 'value.' : '') + config.mongo.blacklist[i]] = 0;
      }
    }

    // if we are setting a text sort, this needs to be included
    let sort = this.getSortObject(filters);
    
    let collection = await mongo.packagesCollection();
    let cur = collection.find(mongoQuery, {fields: filters});
    if( sort ) cur.sort(sort);

    return cur
      .skip(appQuery.start)
      .limit(appQuery.stop-appQuery.start)
      .toArray();
  }

  getSortObject(filter) {
    var sort = {};
    var hasSort = false;
  
    if( config.mongo.useMongoTextScore ) {
      filter.mongoTextScore = { $meta: "textScore" }
      sort.mongoTextScore = { $meta: "textScore" };
      hasSort = true;
    }
  
    if( config.mongo.sortBy && config.mongo.sortOrder == "desc" ) {
      sort[config.mongo.sortBy] = -1;
      hasSort = true;
    } else if ( config.mongo.sortBy ) {
      sort[config.mongo.sortBy] = 1;
      hasSort = true;
    }
  
    logger.info('sorting items by: '+(hasSort ? JSON.stringify(sort) : ' mongo default sort'));
  
    if( hasSort ) return sort;
    return null;
  }

  _flattenMapreduce(items) {
    var i, key, item, flattened;
    if( !items ) return;
  
    for( i = 0; i < items.length; i++ ) {
      item = items[i];
      flattened = {
        '_id' : item._id
      };
  
      for( key in item.value ) {
        if( key === '_id' ) continue;
        flattened[key] = item.value[key];
      }
      items[i] = flattened;
    }
  }

  appQueryToMongoQuery(query) {
    if( !query.filters ) query.filters = [];

    if( config.mongo.isMapReduce ) {
      var obj, i;
      for( i = 0; i < query.filters.length; i++ ) {
        obj = {};
        for( var key in query.filters[i] ) {
  
          // check for regex
          var value = query.filters[i][key];
          if( typeof value === 'string' && value.match(REGEX_MATCH) ) {
            try {
              value = new RegExp(value.replace(/\//g, ''), 'i');
            } catch(e) {}
          }
  
          if( key[0] == '$' ) {
             obj[key] = value;
           } else {
             obj['value.'+key] = value;
           }
        }
        query.filters[i] = obj;
      }
    }
  
    var options = {}
  
    // set geo filter if it exits
    // if so, remove from $and array and set as top level filter option
    if( config.mongo.geoFilter ) {
      config.mongo.geoFilter.forEach(function(geoFilter){
        for( var i = 0; i < query.filters.length; i++ ) {
          if( query.filters[i][geoFilter] ) {
            options[(config.mongo.isMapReduce ? 'value.' : '') + geoFilter] = query.filters[i][geoFilter];
            query.filters.splice(i, 1);
            break;
          }
        }
      });
    }
  
    for( var i = 0; i < query.filters.length; i++ ) {
      findDates(query.filters[i]);
    }
  
    if( query.filters.length > 0 ) {
      options["$and"] = query.filters;
    }
  
    if( query.text && query.text.length > 0 ) {
      options['$text'] = {'$search': query.text.toLowerCase()};
    }
  
    return options;
  }

}

// replace ISO dates strings with date objects
var dateRegex = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:.*Z/;
function findDates(obj) {
  for( var key in obj ) {
    if( typeof obj[key] == 'object' ) {
      findDates(obj[key]);
    } else if ( typeof obj[key] == 'string' && obj[key].match(dateRegex) ) {
      obj[key] = new Date(obj[key]);
    }
  }
}

module.exports = new PackageSearchModel();