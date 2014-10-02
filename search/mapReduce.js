// map reduce function for mongodb
// look in the ckanext-esis repo, the controller.py class reads in map.js and reduce.js
// this is where this code is actually used.  
db.spectra.mapReduce(
    function(){
        var key = this.ecosis.package_id;

        if( this.ecosis.group_by && this.ecosis.group_by != '' ) {
            key += '-'+this[this.ecosis.group_by];
        }
        emit(key, this);
    },
    function(key, spectra){
        var searchObj = {
            ecosis : {}
        };
        
        var ignoreList = ['_id','datapoints', 'ecosis'];

        // create unique lists of our attributes
        function addOrAppendUnique(obj, key, value) {
            if( obj[key] ) {
                if( obj[key].indexOf(value) == -1 ) {
                    obj[key].push(value);
                }
            } else {
                obj[key] = [value];
            }
        }

        spectra.forEach(function(measurement) {            
            for( var key in measurement ) {
                if( ignoreList.indexOf(key) != -1 ) continue;
                
                // is this new or are we pushing to an array?
                addOrAppendUnique(searchObj, key, measurement[key]);
            }
        });

        if( spectra.length > 0 ) {
            searchObj.ecosis.groups = spectra[0].ecosis.groups;
            searchObj.ecosis.group_by = spectra[0].ecosis.group_by;
            searchObj.ecosis.sort_on = spectra[0].ecosis.sort_on;
            searchObj.ecosis.location = spectra[0].ecosis.location;
            searchObj.ecosis.package_id = spectra[0].ecosis.package_id;
            searchObj.ecosis.package_name = spectra[0].ecosis.package_name;
            searchObj.ecosis.package_title = spectra[0].ecosis.package_title;
            searchObj.ecosis.created = spectra[0].ecosis.created;
            searchObj.ecosis.modified = spectra[0].ecosis.modified;
        }

        return searchObj;

    },
    {
        out: "search"
    }
)