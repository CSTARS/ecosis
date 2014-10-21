// map reduce function for mongodb
// look in the ckanext-esis repo, the controller.py class reads in map.js and reduce.js
// this is where this code is actually used.  
db.spectra.mapReduce(
function() {
    var key = this.ecosis.package_id;

    /*if( this.ecosis.group_by && this.ecosis.group_by != '' ) {
        key += '-'+this[this.ecosis.group_by];
    }*/
    this.ecosis.spectra_count = 1;

    emit(key, this);
},
function(key, spectra){
        var searchObj = {
            ecosis : {
                spectra_count : 0
            }
            // keeps track of counts for unique items
            //_repeats : {}
        };
        
        var ignoreList = ['_id','datapoints', 'ecosis', '_repeats'];

        // create unique lists of our attributes
        function addOrAppendUnique(obj, key, value) {
            if( value === null ) return;
            if( value === '' ) return;

            // don't include values that have over 100 characters.  Assume not good filter
            if( typeof value == 'string' && value.length > 100 ) return;

            if( obj[key] !== undefined ) {
                if( obj[key].indexOf(value) == -1 ) {
                    obj[key].push(value);
                } 
                /*else {
                    addRepeat(obj, key);
                }*/
            } else {
                obj[key] = [value];
            }
        }

        /*function addRepeat(obj, key) {
            if( obj._repeats[key] && !searchObj._repeats[key] ) {
                searchObj._repeats[key] = obj._repeats[key];
            }
            
            if( searchObj._repeats[key] ) {
                searchObj._repeats[key] += 1;
            } else {
                searchObj._repeats[key] = 1;
            }
        }*/

        var i, measurement, key, arr;
        for( i = 0; i < spectra.length; i++ ) {
            measurement = spectra[i];
            searchObj.ecosis.spectra_count += measurement.ecosis.spectra_count;

            for( key in measurement ) {
                if( ignoreList.indexOf(key) != -1 ) continue;

                // it's a re-reduce
                if( Array.isArray(measurement[key]) ) {
                    arr = measurement[key];
                    for( j = 0; j < arr.length; j++ ) {
                        addOrAppendUnique(searchObj, key, arr[j]);
                    }
                } else {
                    // is this new or are we pushing to an array?
                    addOrAppendUnique(searchObj, key, measurement[key]);
                }
            }
        }

        if( spectra.length > 0 ) {
            //searchObj.ecosis.groups = spectra[0].ecosis.groups;
            //searchObj.ecosis.group_by = spectra[0].ecosis.group_by;
            searchObj.ecosis.sort_on = spectra[0].ecosis.sort_on;
            searchObj.ecosis.location = spectra[0].ecosis.location;
            searchObj.ecosis.package_id = spectra[0].ecosis.package_id;
            searchObj.ecosis.package_name = spectra[0].ecosis.package_name;
            searchObj.ecosis.package_title = spectra[0].ecosis.package_title;
            //searchObj.ecosis.created = spectra[0].ecosis.created;
            //searchObj.ecosis.modified = spectra[0].ecosis.modified;
        }

        return searchObj;
},
    {
        out: "search"
        /*finalize : function(key, item) {
            function bucketTest(attr, item) {
                var repeatCount = item._repeats[attr];
                var arr = item[attr];

                // if there are less than 10 items, we are good
                if( arr.length <= 10 ) {
                    item._repeats[attr] = {
                        count : repeatCount
                    }
                    return true;
                }

                // if we have at least 20% of the items in a bucket, we are fine
                if( Math.floor( item.ecosis.spectra_count * .20 ) <= repeatCount ) return true;

                return false;  
            }

            for( var key in item ) {
                if( Array.isArray(item[key]) ) {
                    if( !bucketTest(key, item) ) {
                        delete item[key];
                    }
                }
            }

            delete item._repeats;

            return item;
        }*/
    }
)