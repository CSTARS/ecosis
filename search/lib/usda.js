
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

    collection.find(query, {_id: 0}).sort({ $meta: "textScore"}).limit(100).toArray(function(err, result) {
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