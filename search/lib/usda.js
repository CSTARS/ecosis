exports.search = function(collection, req, resp) {

    var q = req.query.q;
    if( !q ) {
        return resp.send({error: true, message:'No query "q" parameter'});
    }

    var query = {
        $text : {
            $search : q
        }
    };

    collection.find(query, {score: { $meta: "textScore" }, _id: 0}).sort({ score: { $meta: "textScore" } }).limit(100).toArray(function(err, result) {
        if( err ) return resp.send({error: true, message: err});
        resp.send(result);
    });

};

exports.get = function(collection, req, resp) {

    var code = req.query.code;
    if( !code ) {
        return resp.send({error: true, message:'No query "code" parameter'});
    }

    var query = {'Accepted Symbol' : code.toUpperCase()};

    collection.findOne(query, {_id: 0}, function(err, result) {
        if( err ) return resp.send({error: true, message: err});
        resp.send(result);
    });

};


exports.init = function(collection) {
    collection.ensureIndex({
            Category : 'text',
            'Scientific Name' : 'text',
            'Genus' : 'text',
            'Accepted Symbol' : 'text',
            'Common Name' : 'text'
        }, {w: 1}, function(err) {
            if( err ) console.log(err);
        }
    );
}