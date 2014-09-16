// map reduce function for mongodb
db.spectral.mapReduce(
    function(){
        var key = this.pkg_id;

        if( this.group_by && this.group_by.by ) {
            var parts = this.group_by.by.split('.');
            if( parts.length == 1 ) {
                key += '::'+this[parts[0]];
            } else {
                key += '::'+this.metadata[parts[1]];
            }
        }
        emit(key, this);
    },
    function(key, values){
        var searchObj = {
            ids : [],
        };
        
        var ignoreList = ['_id','spectra_id','resource_id','lastUpdate','lastRun','pkg_title','pkg_name','pkg_id'];

        values.forEach(function(value) {
            searchObj.ids.push(value._id);
            
            for( var key in value ) {
                if( typeof value[key] != 'string' && key != 'metadata' ) continue;
                if( ignoreList.indexOf(key) != -1 ) continue;
                
                if( key == 'metadata' ) {
                    searchObj.metadata = {};
                    for( var mkey in value.metadata ) {
                        if( searchObj.metadata[mkey] && searchObj.metadata[mkey].indexOf(value.metadata[mkey]) == -1 ) {
                            searchObj.metadata[mkey].push(value.metadata[mkey]);
                        } else {
                            searchObj.metadata[mkey] = [value.metadata[mkey]];
                        }
                    }
                } else {
                     if( searchObj[key] && searchObj[key].indexOf(value[key]) == -1 ) {
                          searchObj[key].push(value[key]);
                     } else {
                          searchObj[key] = [value[key]];
                     }
                }
            }
        });

        if( values.length > 0 ) {
            searchObj.groups = values[0].groups;
            searchObj.group_by = values[0].group_by;
            searchObj.pkg_title = values[0].pkg_title;
            searchObj.pkg_name = values[0].pkg_name;
            searchObj.pkg_id = values[0].pkg_id;
        }

        return searchObj;

    },
    {
        out: "esis_search_collection"
    }
)