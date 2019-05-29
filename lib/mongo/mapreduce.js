var config;
var collection;

module.exports.init = function(setup) {
  config = setup.config;
  collection = setup.collection;
};

module.exports.run = function(query, callback) {

    var filterNames = [];
    var filterParts = [];
    var filters = [];

    // are we checking against a mapreduce collection?
    for( var i = 0; i < config.db.indexedFilters.length; i++ ) {
        filters.push((config.db.isMapReduce ? 'value.' : '')+config.db.indexedFilters[i]);
    }

    for( var i = 0; i < filters.length; i++ ) {
      var name = filters[i].replace(/.*\./, '');
      filterNames.push(name);
      filterParts.push(filters[i].split('.'));
    }

    collection.mapReduce(
        function() {

            function getValues(obj, index, parts) {
                if( index == parts.length-1 ) {
                    return obj[parts[index]];
                } else {
                    obj = obj[parts[index]];
                    index++;
                    return getValues(obj, index, parts);
                }
            }

            var i, values, j, item = {};
            for( i = 0; i < filterNames.length; i++ ) {
                values = getValues(this, 0, filterParts[i]);
                item[filterNames[i]] = {};


                if( typeof values == 'string' ) {
                    item[filterNames[i]][values] = 1;
                } else if ( Array.isArray(values) ) {
                    for( j = 0; j < values.length; j++ ) {
                        item[filterNames[i]][values[j]] = 1;
                        if( j == MAX_FILTERS ) break;
                    }
                }
            }

            emit(null, item);
        },
        function(id, items) {
            var result = {}, item, i, j, filter, key;

            if( items.length == 0 ) {
                for( i = 0; i < filterNames.length; i++ ) {
                    result[filterNames[i]] = {};
                }
                return result;
            } else {
                result = items[0];
            }

            for( i = 1; i < items.length; i++ ) {
                item = items[i];
                for( j = 0; j < filterNames.length; j++ ) {
                    filter = item[filterNames[j]];

                    for( key in filter ) {
                        if( !result[filterNames[j]][key] ) {
                            result[filterNames[j]][key] = filter[key];
                        } else {
                            result[filterNames[j]][key] += filter[key];
                        }
                    }
                }
            }

            return result;
        },
        {
            out : {
                inline: 1
            },
            query : query,
            scope : {
                filterNames : filterNames,
                filterParts : filterParts,
                MAX_FILTERS : 50
            },
            finalize : function(key, result){
                var arr, i;
                for( filter in result ) {
                    arr = [];
                    for( value in result[filter] ) {
                        arr.push({
                            filter : value,
                            count : result[filter][value]
                        })
                    }

                    arr.sort(function(a, b){
                        if( a.count > b.count ) return -1;
                        if( a.count < b.count ) return 1;
                        return 0;
                    });

                    result[filter] = arr;
                }
                return result;
            }
        },
        function(err, result) {
            if( err ) return callback(err);
            else if( result.length == 0 ) callback(null, {});
            else callback(null, result[0].value);
        }
    );
}
