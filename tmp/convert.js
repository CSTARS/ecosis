var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient, db, collection;
var async = require('async');
var url = 'mongodb://localhost:27017/esis';

function connect(next) {   
    MongoClient.connect(url, function(err, database) {
        if(!err) {
            db = database;
            console.log('connected to mongo db: '+url);
        } else {
            console.log('unable to connect to: '+url);
            console.log(err);
            return;
        }

        db.collection('spectral', function(err, c) {
            next(c);
        });
    }); 
}


connect(function(c){
    console.log('running');

    c.find({}).toArray(function(err, results){
        if( err ) return console.log(err);
        process(c, results);
    });
});

function process(c, arr) {
    console.log('results: '+arr.length);

    async.eachSeries(arr,
        function(item, next){

            if( !item.spectra ) {
                next();
                return;
            }

            var spectra = [];
            for( var key in item.spectra ) {
                spectra.push({
                    wavelength : key,
                    values : item.spectra[key]
                })
            }
            item.spectra = spectra;


            c.save(item,{w:1}, function(err, resp){
                if( err ) console.log('Failed to update '+item._id);
                else console.log('Updated '+item._id);

                next();
            });
        },
        function(err){
            console.log('done');
        }
    );
}
