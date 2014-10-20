/*
 *  Data export functions
 */


exports.download = function(collections, req, res) {
    var pkgid = req.query.package_id;
    var filters = req.query.filters;
    var includeMetadata = req.query.metadata == 'true';

    var ignoreList = ['_id', 'datapoints', 'ecosis'];

    if( pkgid == null ) {
        return sendError(res, 'package_id is required');
    }

    try {
        if( filters ) filters = JSON.parse(filters);
    } catch(e) {
        return sendError(res, e);
    }

    collections.package.find({'package_id': pkgid}).toArray(function(err, resp){
        if( err ) return sendError(res, err);
        if( resp.length == 0 ) return sendError(res, 'package not found');

        res.set('Content-Disposition', 'attachment; filename="'+pkgid+'.csv"');

        var pkg = resp[0];
        var sort = pkg.attributes.dataset.sort_on;
        if( sort == '' ) sort = null;


        // get all the 'data'
        var data = pkg.attributes.wavelengths;
        var metadata = [];
        for( var i = 0; i < pkg.attributes.types.length; i++ ) {
            var attr = pkg.attributes.types[i];
            var type = pkg.attributes.modifications[attr.name] ? 
                            pkg.attributes.modifications[attr.name] : attr.type;
            if( type == 'data' ) {
                data.push(attr.name);
            } else {
                metadata.push(attr.name);
                if( pkg.attributes.map[attr.name] ) {
                    metadata.push(pkg.attributes.map[attr.name]);
                }
            }
        }

        if( includeMetadata ) {
            metadata.sort(function(a,b){
                if( a > b ) return 1;
                if( a < b ) return -1;
                return 0;
            });
        }
        data.sort(function(a,b){
            if( a > b ) return 1;
            if( a < b ) return -1;
            return 0;
        });
        
        res.write(data.join(','));
        if( includeMetadata && metadata.length > 1 ) {
            res.write(',');
            res.write(metadata.join(','));
        }

        var query = {'ecosis.package_id': pkgid};
        if( filters ) query['$and'] = filters;

        console.log(filters);

        var cursor = collections.spectra.find(query);
        if( sort ) {
            cursor.sort([['ecosis.sort', 1]]);
        }
        cursor = cursor.stream();

        cursor.on('data', function(item) {
            var line = '', len = data.length;
            for( var i = 0; i < len; i++ ) {
                line += getPoint(data[i], item.datapoints);
                if( i < len - 1 ) line += ','
            }

            if( includeMetadata && metadata.length > 1 ) {
                line += ',';
                len = metadata.length;
                for( var i = 0; i < len; i++ ) {
                    line += item[metadata[i]] === undefined ? '' : item[metadata[i]];
                    if( i < len - 1 ) line += ','
                }
            }

            res.write(line+'\n');
        });

        cursor.on('end', function() {
            res.end('');
        });

    });
}

function getPoint(key, pts) {
    var i, len = pts.length;
    for( i = 0; i < len; i++ ) {
        if( pts[i].key == key ) return pts[i].value;
    }
    return '';
} 



// get a spectra at a certain index for a package
// if the package is ordered, this order will be applied
exports.getSpectra = function(collections, req, res) {
    var pkgid = req.query.package_id;
    var filters = req.query.filters;
    var index = req.query.index || 0;

    if( pkgid == null ) {
        return sendError(res, 'package_id is required');
    }

    try {
        index = parseInt(index);
        if( isNaN(index) ) index = 0;

        if( filters ) filters = JSON.parse(filters);
    } catch(e) {
        return sendError(res, e);
    }


    collections.package.find({'package_id': pkgid}).toArray(function(err, resp){
        if( err ) return sendError(res, err);
        if( resp.length == 0 ) return sendError(res, 'package not found');

        var pkg = resp[0];
        if( !pkg.attributes ) {
            return sendError(res, 'package has no schema defined');
        } else if( !pkg.attributes.dataset ) {
            return sendError(res, 'package has no schema defined');
        }

        var sort = pkg.attributes.dataset.sort_on;
        if( sort == '' ) sort = null;

        var query = {'ecosis.package_id': pkgid};

        if( filters ) query['$and'] = filters;

        collections.spectra.count(query, function(err, count){
            if( err ) return sendError(res, err);

            if( count == 0 ) {
                res.send({
                    item : {},
                    total : 0,
                    index : index,
                    message : 'No spectra found for this filter'
                });
                return;
            }

            var cur = collections.spectra.find(query);
            if( sort ) {
                cur.sort([['ecosis.sort', 1]]);
            }
            cur.skip(index).limit(1);

            cur.toArray(function(err, resp){
                if( err ) return sendError(res, err);
                var respObj = {
                    index : index,
                    total : count,
                    item : {}
                }

                if( resp.length == 0 ) {
                    respObj.message = 'no spectra found at index: '+index;
                } else {
                    respObj.item = resp[0];
                }

                res.send(respObj);
            });

        });
    });
}


exports.getDerivedData = function(collections, req, res) {
    var pkgid = req.query.package_id;
    var groupBy = req.query.group_by;
    var attribute = req.query.attribute;

    if( pkgid == null || attribute == null ) {
        return sendError(res, 'package_id and attribute are required');
    }

    collections.package.find({'package_id': pkgid}).toArray(function(err, resp){
        if( err ) return sendError(res, err);
        if( resp.length == 0 ) return sendError(res, 'package not found');

        var pkg = resp[0];
        if( !pkg.attributes ) {
            return sendError(res, 'package has no schema defined');
        } else if( !pkg.attributes.dataset ) {
            return sendError(res, 'package has no schema defined');
        }
        
        var sort = pkg.attributes.dataset.sort_on;
        if( sort == '' ) sort = null;

        var query = {'ecosis.package_id': pkgid};
        if( groupBy && groupBy != null ) {
            var attr = pkg.attributes.dataset.group_by;
            if( attr ) {
                query[attr] = groupBy;
            }
        }

        var options = {
            'ecosis.sort' : 1,
            'datapoints' : 
                { '$elemMatch' : 
                    { 'key' : attribute }
                },
            '_id' : 0
        };
        if( sort ) {
            options[sort] = 1;
        }

        var cur = collections.spectra.find(query, options);
        if( sort ) {
            cur.sort([['ecosis.sort', 1]]);
        }

        cur.toArray(function(err, resp){
            if( err ) return sendError(res, err);

            var arr = [], obj;
            for( var i = 0; i < resp.length; i++ ) {
                obj = { value : null };

                if( sort ) {
                    obj[sort] = resp[i][sort];
                    obj.sort = resp[i].ecosis.sort;
                }
                if( resp[i].datapoints && resp[i].datapoints.length > 0 ) {
                    obj.value = resp[i].datapoints[0].value;
                }
                arr.push(obj);
            }

            res.send({
                attribute : attribute,
                sort : sort,
                values : arr
            });
        });


    });
}


 function sendError(res, msg) {
    res.send({error:true,message:msg});
 };