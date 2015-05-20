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

    collections.main.findOne({'value.ecosis.package_id': pkgid}, {'value.ecosis': 1}, function(err, result){
        if( err ) return sendError(res, err);
        if( !result ) return sendError(res, 'package not found');
        if( result.length == 0 ) return sendError(res, 'package not found');
        var pkg = result.value;

        res.set('Content-Disposition', 'attachment; filename="'+pkg.ecosis.package_name+'.csv"');


        var sort = pkg.ecosis.sort_on;
        if( sort == '' ) sort = null;


        // get all the 'data'
        var data = pkg.ecosis.spectra_schema.data;
        var metadata = pkg.ecosis.spectra_schema.metadata;

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
        res.write('\n');

        // now write data keys as stored in mongo
        for( var i = 0; i < data.length; i++ ) {
          data[i] = data[i].replace(/\./,',');
        }

        var query = {'ecosis.package_id': pkgid};
        if( filters ) query['$and'] = filters;

        var cursor = collections.spectra.find(query);
        if( sort ) {
            cursor.sort({'ecosis.sort': 1});
        }

        var stream = cursor.stream();

        var dataLength = data.length;
        var metadataLength = metadata.length;
        var i, line;

        if( includeMetadata && metadata.length > 1 ) {
          includeMetadata = true;
        } else {
          includeMetadata = false;
        }

        stream.on('data', function(item) {
            line = '';

            for( i = 0; i < dataLength; i++ ) {
                //line += getPoint(data[i], item.datapoints);
                line += item.datapoints[data[i]] === undefined ? '' : item.datapoints[data[i]];
                if( i < dataLength - 1 ) line += ','
            }

            if( includeMetadata ) {
                line += ',';

                for( var i = 0; i < metadataLength; i++ ) {
                    line += item[metadata[i]] === undefined ? '' : item[metadata[i]];
                    if( i < metadataLength - 1 ) line += ','
                }
            }

            res.write(line+'\n');
        });

        stream.on('end', function() {
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


    collections.main.findOne({'value.ecosis.package_id': pkgid}, {'value.ecosis': 1}, function(err, resp){
        if( err ) return sendError(res, err);
        if( !resp ) return sendError(res, 'package not found');

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
            if( resp.value.ecosis.sort_on ) {
              var sort = {'ecosis.sort' : 1};
              cur.sort(sort);
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

                    cleanDatapoints(respObj.item)
                }

                res.send(respObj);
            });

        });
    });
}


exports.getSpectraCount = function(collections, req, res) {
   collections.spectra.count({}, function(err, count){
     if( err ) return res.send({error: true, message: err});
     res.send({count: count});
   });
}

// first, randomly select dataset
// then randomly select spectra from dataset
exports.getRandomSpectra = function(collections, req, res) {
   collections.main.count({'value.ecosis.spectra_count' : {$gt: 0} }, function(err, count){
     if( err ) return res.send({error: true, message: err});

     var index = Math.round(Math.random() * count)-1;
     if( index < 0 ) index = 0;

     collections.main.find({}, {'value.ecosis.spectra_count': 1})
        .skip(index)
        .limit(1)
        .toArray(function(err, resp){
          if( err ) return res.send({error: true, message: err, code: 1});
          if( resp.length == 0 ) return res.send({error: true, message: 'Query Failed', code:  1});

          index = Math.round(Math.random() * resp[0].value.ecosis.spectra_count) - 1;
          if( index < 0 ) index = 0;

          collections.spectra
           .find({'ecosis.package_id': resp[0]._id})
           .skip(index)
           .limit(1)
           .toArray(function(err, resp){
             if( err ) return res.send({error: true, message: err, code : 2});
             if( resp.length == 0 ) return res.send({error: true, message: 'Query Failed', code: 2});

             return res.send(cleanDatapoints(resp[0]));
           });
        });
   });
}


exports.getDataInSeries = function(collections, req, res) {
    var pkgid = req.query.package_id;
    var attribute = req.query.attribute;

    if( pkgid == null || attribute == null ) {
        return sendError(res, 'package_id and attribute are required');
    }

    collections.main.findOne({'value.ecosis.package_id': pkgid}, {'value.ecosis': 1}, function(err, resp){
        if( err ) return sendError(res, err);
        if( !resp ) return sendError(res, 'package not found');

        var pkg = resp.value;

        if( pkg.ecosis.spectra_schema ) {
          if( pkg.ecosis.spectra_schema.data.indexOf(attribute) == -1 &&
              pkg.ecosis.spectra_schema.metadata.indexOf(attribute) == -1 ) {
                return res.send({
                  error : true,
                  message : 'Invalid attribute '+attribute+'.  Please see spectra_schema below for valid attributes for this dataset',
                  spectra_schema : pkg.ecosis.spectra_schema
                });
              }
        }

        var query = {'ecosis.package_id': pkgid};

        var options = {
            'ecosis.sort' : 1,
            '_id' : 0
        };

        var cleanAttr = attribute.replace(/\./g,',');

        options['datapoints.'+cleanAttr] = 1;
        options[cleanAttr] = 1;

        var sort = resp.value.ecosis.sort_on;
        if( sort ) {
            options[resp.value.ecosis.sort_on] = 1;
        }

        var cur = collections.spectra.find(query, options);

        if( sort ) {
            cur.sort([['ecosis.sort', 1]]);
        }

        cur.toArray(function(err, resp){
            if( err ) return sendError(res, err);

            var arr = [], obj;
            for( var i = 0; i < resp.length; i++ ) {
                obj = {
                  key : sort ? res[i].ecosis.sort : i,
                  value : null
                }

                if( resp[i].datapoints && resp[i].datapoints[cleanAttr]) {
                  obj.value = resp[i].datapoints[cleanAttr];
                } else if ( resp[i][cleanAttr] ) {
                  obj.value = resp[i][cleanAttr];
                }

                arr.push(obj);
            }

            res.send({
                attribute : attribute,
                sort : sort || 'index',
                values : arr
            });
        });


    });
}

function cleanDatapoints(item) {
  // cleanup datapoints
  var points = {};
  for( var key in item.datapoints ) {
    points[key.replace(/,/g, '.')] = item.datapoints[key]
  }
  item.datapoints = points;

  return item;
}


 function sendError(res, msg) {
    res.send({error:true,message:msg});
 };
