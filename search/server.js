/**
 * This will actually extend the MQE expressjs server
 *
 * make sure mongo is fired up w/ text search enabled
 * mongod --setParameter textSearchEnabled=true
 *
 */

var ObjectId = require('mongodb').ObjectID;
var CursorStream = require('mongodb').CursorStream;
var async = require('async');

var data = require('./lib/data.js');
var dataStats = require('./lib/dataStats.js');
var geo = require('./lib/geo.js');
var usda = require('./lib/usda.js');

var exec = require('child_process').exec;

var collection;
var spectraCollection;
var usdaCollection;

var ignoreList = ['_id','lastUpdate','lastRun', 'metadata', 'spectra'];


// global ns provided by mqe
var app = global.app;
var mqe = global.mqe;
var config = global.appConfig;
var express = global.express;
var logger = global.logger;


// express app
exports.bootstrap = function() {
    var db = global.db;

    db.collection(config.db.mainCollection, function(err, coll) {
        if( err ) return console.log(err);

        collection = coll;
    });

    db.collection(config.db.spectraCollection, function(err, coll) {
        if( err ) return console.log(err);

        spectraCollection = coll;

        // required or large sorts will break
        spectraCollection.ensureIndex({'ecosis.sort': 1}, function(err){
          if( err ) console.log(err);
        });
    });

    db.collection(config.db.usdaCollection, function(err, coll) {
        if( err ) return console.log(err);

        usdaCollection = coll;
    });

    app.get('/rest/getSpectra', function(req, res){
        data.getSpectra({main: collection, spectra: spectraCollection}, req, res);
    });

    app.get('/rest/getMultipleSpectra', function(req, res){
        data.getMultipleSpectra({main: collection, spectra: spectraCollection}, req, res);
    });

    app.get('/rest/getSpectraStats', function(req, res){
        dataStats.get({spectra: spectraCollection}, req, res);
    });

    app.get('/rest/getDataInSeries', function(req, res){
        data.getDataInSeries({main: collection, spectra: spectraCollection}, req, res);
    });

    app.get('/rest/download', function(req, res){
        data.download({main: collection, spectra: spectraCollection}, req, res);
    });

    app.get('/rest/getSpectraCount', function(req, res){
        data.getSpectraCount({spectra: spectraCollection}, req, res);
    });

    app.get('/rest/getRandomSpectra', function(req, res){
        data.getRandomSpectra({main: collection, spectra: spectraCollection}, req, res);
    });

    app.get('/rest/geoPreview', function(req, res){
        geo.geoPreview({main: collection}, req, res);
    });

    usda.init(usdaCollection);

    /*app.get('/rest/import', function(req, resp){
        server.runImport(function(obj){
            server.mqe.clearCache();
            resp.send(obj);
        });
    });*/

    app.get('/analytics', function(req, resp){
        resp.set('Content-Type', 'application/javascript');
        if( !config.server.googleAnalytics ) return resp.send('');

        resp.send(
            '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){'+
            '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),'+
            'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)'+
            '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');'+
            'ga(\'create\', \''+config.server.googleAnalytics+'\', \'auto\');'+
            'ga(\'send\', \'pageview\');'+
            '$(window).on(\'hashchange\',function(){ga(\'send\',\'pageview\',{\'page\':location.pathname+location.search+location.hash})});'
        );
    });

    app.get('/rest/usda/search', function(req, resp){
        usda.search(usdaCollection, req, resp);
    });

    app.get('/rest/user/get', function(req, resp){
        usda.get(usdaCollection, req, resp);
    });

    app.get('/rest/gitInfo', function(req, resp){
        gitInfo(function(txt){
            resp.send(txt);
        });
    });

    if( config.dev ) {
        app.use("/", express.static(__dirname+"/app"));
        console.log('using: '+__dirname+"/app");
    } else {
        app.use("/", express.static(__dirname+"/dist"));
        console.log('using: '+__dirname+"/dist");
    }

};

function gitInfo(callback) {
    var c = 0;
    var resp = {};
    function onResp(key, text) {
        resp[key] = text;
        c++;
        if( c == 3 ) callback(resp);
    }

    exec('git describe --tags', {cwd: __dirname},
      function (error, stdout, stderr) {
        onResp('tag', stdout);
      }
    );
    exec('git branch | grep \'\\*\'', {cwd: __dirname},
      function (error, stdout, stderr) {
        onResp('branch', stdout ? stdout.replace(/\*/,'').replace(/\s/g,'') : '');
      }
    );
    exec('git log  -1 | sed -n 1p', {cwd: __dirname},
      function (error, stdout, stderr) {
        onResp('commit', stdout ? stdout.replace(/commit\s/,'') : '');
      }
    );
}


function getQueryIdsAndCounts(options, callback) {
    collection.find(options, {_id : 1, 'spectra' : {$slice : 1} }).limit(10000).toArray(function(err, result){
        if( err ) return resp.send('Error processing request :(');

        var ids = {};
        for( var i = 0; i < result.length; i++ ) {
            ids[result[i]._id.toString()] = result[i].spectra[0].values.length;
        }

        callback(ids);
    });
}

function fillArray(arr, len) {
    var row = arr.join(',');
    for( var i = arr.length+1; i < len; i++ ) {
        row += ',';
    }
    return row;
}

function createQueryDataRow(idCounts, data) {
    var row = {}, c, id;

    for( id in idCounts ) {
        row[id] = null;
    }

    for( var i = 0; i < data.ids.length; i++ ) {
        id = data.ids[i].toString();
        // expected number of wavelengths based on initial query's first row
        c = idCounts[id];

        if( c == data.values[i].length ) {
            row[id] = data.values[i].join(',');
        } else { // this is a badness check
            if( c < data.values[i].length)  {
                row[id] = fillArray(data.values[i], c);
            } else {
                row[id] = data.values[i].splice(0, c).join(',');
            }
        }
    }

    for( var id in row ) {
        if( !row[id] ) row[id] = fillArray([], idCounts[id]);
    }

    return row;
}


function _addDownloadRow(result, c, row) {
    if( result[row[0]] ) {
        result[row[0]] += ','+row[1];
    } else if( c == 0 ) {
        result[row[0]] = row[1];
    } else {
        for( var i = 0; i < c; i++ ) result[row[0]] += ',';
        result[row[0]] += row[1];
    }
}


function getGroupInfo(req, resp) {
    var filters = JSON.parse(req.query.filters);

    var sort = req.query.sort;
    if( !sort ) sort = '';
    sort = sort.replace(/^ecosis\./,'');

    var query = {};
    var options = {
        sort : sort
    };
    var attributes = {
        _id : true
    }

    if( sort != '' ) attributes[sort] = true;
    if( filters.length > 0 ) query["$and"] = filters;


    collection.find(query, attributes, options).limit(1000).toArray(function(err, items) {
        if( err ) return resp.send({error: true, message: err});
        resp.send(items);
    });
}
