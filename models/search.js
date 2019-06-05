const mongo = require('../lib/mongo');
const mapreduce = require('../lib/mongo/search-map-reduce');

class PackageSearchModel {

  async run(appQuery) {
    var response = {
      total   : 0,
      start   : query.start,
      stop     : query.stop,
      items   : [],
      filters : {}
    }

    let query = this.appQueryToMongoQuery(appQuery);
  
    // run mapreduce for counts
    response.filters = await mapReduce(query);

    // get total for query
    let collection = await mongo.packagesCollection();
    response.total = await collection.count();

    // actually run mongo query
    let items = await this._rangedQuery(query, appQuery);

    if( config.db.isMapReduce ) {
      this._flattenMapreduce(items);
    }

    response.items = items;
  }

  // find a sorted range of responsed without returned the entire dataset
  _rangedQuery(mongoQuery, appQuery) {
    var filters = {};

    if( config.db.searchWhitelist ) {
      filters._id = 1;
      for( var i = 0; i < config.db.searchWhitelist.length; i++ ) {
        filters[(config.db.isMapReduce ? 'value.' : '') + config.db.searchWhitelist[i]] = 1;
      }
    } else if (appQuery.projection) {
      filters = appQuery.projection;
    }

    if( config.db.blacklist ) {
      for( var i = 0; i < config.db.blacklist.length; i++ ) {
        filters[(config.db.isMapReduce ? 'value.' : '') + config.db.blacklist[i]] = 0;
      }
    }

    // if we are setting a text sort, this needs to be included
    let sort = getSortObject(filters);
    let cur = collection.find(mongoQuery, filters);
    if( sort ) cur.sort(sort);

    return cur
      .skip(appQuery.start)
      .limit(appQuery.stop-appQuery.start)
      .toArray();
  }

  getSortObject(filter) {
    var sort = {};
    var hasSort = false;
  
    if( config.db.useMongoTextScore ) {
      filter.mongoTextScore = { $meta: "textScore" }
      sort.mongoTextScore = { $meta: "textScore" };
      hasSort = true;
    }
  
    if( config.db.sortBy && config.db.sortOrder == "desc" ) {
      sort[config.db.sortBy] = -1;
      hasSort = true;
    } else if ( config.db.sortBy ) {
      sort[config.db.sortBy] = 1;
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
    if( config.db.isMapReduce ) {
      var obj, i;
      for( i = 0; i < query.filters.length; i++ ) {
        obj = {};
        for( var key in query.filters[i] ) {
  
          // check for regex
          var value = query.filters[i][key];
          if( typeof value === 'string' && value.match(regexMatch) ) {
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
    if( config.db.geoFilter ) {
      config.db.geoFilter.forEach(function(geoFilter){
        for( var i = 0; i < query.filters.length; i++ ) {
          if( query.filters[i][geoFilter] ) {
            options[(config.db.isMapReduce ? 'value.' : '') + geoFilter] = query.filters[i][geoFilter];
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

module.exports = new PackageSearchModel();