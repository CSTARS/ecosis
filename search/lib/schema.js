exports.getDatasetSchema = function(collections, req, res) {
    var pkgid = req.query.package_id;


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