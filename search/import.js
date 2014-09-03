'use strict'

var async = require('async');
var request = require('request');
var md5 = require('MD5');
var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient, db, collection;
var importLog, lastRun, config, count;

// Order to join metadata in
var joinOrder = ['file','joined','spectra'];
var stdMetadata = {};

var verbose = false;

// item it's w/ no changes
var noChanges = [];


function log(msg) {
    if( verbose ) console.log(' --import: '+msg);
}

function run() {
	lastRun = new Date();
	count = {
			error : 0,
			update : 0,
			found : 0,
			remove : 0,
			insert : 0
	}
	importLog = "\n==== Spectra Import @"+lastRun.toLocaleString()+" ====\n";

	connect();
}

function connect() {	
	MongoClient.connect(config.db.url, function(err, database) {
		if(!err) {
			db = database;
			console.log('connected to mongo db: '+config.db.url);
		} else {
			console.log('unable to connect to: '+config.db.url);
			console.log(err);
			return;
		}

		db.collection(config.db.mainCollection, function(err, c) { 
			if( err ) {
				console.log('unable to connect to collection: '+config.db.mainCollection);
				console.log(err);
				return;
			}
			collection = c;

			console.log('found main collection: '+config.db.mainCollection+"\nInserting items into mongo");
					
            log('downloading metadata.js');
			request(config.import.host+'/metadata.js', function (error, response, body) {
				if (!error && response.statusCode == 200) {
					stdMetadata = JSON.parse(body);
					getSpectra();
                    return;
				}

                console.log('Error access CKAN server: '+config.import.host+'/metadata.js for metadata definitions');
				process.exit(-1);
			});
		});
	});
}

function getSpectra() {
    log('find spectra packages... '+config.import.host+'/spectra/all');

	request(config.import.host+'/spectra/all', function (error, response, body) {

		if( error ) {
			writeLog();
			return console.error(error);
		}
		if( response.statusCode != 200) {
			writeLog();
			return console.log('Server responded with status '+response.statusCode);
		}

		var pkgs = JSON.parse(body);
		download(pkgs, function(){
            removeOldSpectra();
		});
	});
}

function download(packages, callback) {
	async.eachSeries(
		packages, 
		function(pkgid, next){
            log('downloading spectra package: '+pkgid);

			request(config.import.host+'/spectra/get?id='+pkgid, function (error, response, body) {
			  	if (!error && response.statusCode == 200) {
			  		var data = JSON.parse(body);

			  		if( !data ) return next();

		  			mapStandardMetadata(data);
		  			getCommonNames(data, function(){

                        // actually add or update spectra
			  			addUpdateSpectra(data, function(){

                            // actually go through an mark spectra that had no changes from package
                            updateNoChangeList(function(){
                                next();
                            });
				  		});
			  		});
			  		
			  	} else {
			  		next();
			  	}
			});
		},
		function(err){
			if( err ) console.log(err);
			callback();
		}
	);
}

function mapStandardMetadata(pkgSpectra, callback) {
	if( !pkgSpectra ) return callback();
	if( !pkgSpectra.data ) return callback();

	var metadata, sp;
	for( var i = 0; i < pkgSpectra.data.length; i++ ) {
		sp = pkgSpectra.data[i];
		if( !sp.metadata ) continue;

		metadata = {};
		sp.ecosis = {};
		for( var j = 0; j < joinOrder.length; j++ ) {
			for( var key in sp.metadata[joinOrder[j]] ) {

				if( stdMetadata[key] == null && pkgSpectra.map[key] == null ) {
					metadata[key] = sp.metadata[joinOrder[j]][key];
				} else if( stdMetadata[key] != null ) {
					sp.ecosis[key] = sp.metadata[joinOrder[j]][key];
				} else if( pkgSpectra.map[key] != null ) {
					metadata[key] = sp.metadata[joinOrder[j]][key];
					sp.ecosis[pkgSpectra.map[key]] = sp.metadata[joinOrder[j]][key];
				}
			}
		}
		sp.metadata = metadata;
	}
}

/*
function getPackageInfo(id, callback) {
	request(config.import.host+'/spectra/info?id='+id, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			callback(JSON.parse(body));
		} else {
			callback({});
		}
	});
}
*/

function getCommonNames(pkgSpectra, callback) {
	if( !pkgSpectra ) return callback();
	if( !pkgSpectra.data ) return callback();

    log('accessing spectra common name data...');

	var list = pkgSpectra.data;
	async.eachSeries(
		list,
		function(item, next) {
			if( !item.ecosis['USDA Code'] ) {
				next();
				return;
			}
			getUSDANames(item, next);
		},
		function(err) {
			callback();
		}
	);
}

var commonCache = {};
function getUSDANames(item, next) {
	if( commonCache[item.ecosis['USDA Code'].toLowerCase()] != null ) {
		getUSDAName(item, commonCache[item.ecosis['USDA Code'].toLowerCase()]);
		next();
		return;
	}

	request.get('http://plants.usda.gov/java/AdvancedSearchServlet?symbol='+item.ecosis['USDA Code']+'&dsp_vernacular=on&dsp_category=on&dsp_genus=on&dsp_family=on&Synonyms=all&viewby=sciname&download=on', 
		function(error, response, body){

			if (!error && response.statusCode == 200 && body.match(/^".*/) ) {
				commonCache[item.ecosis['USDA Code'].toLowerCase()] = body;
				getUSDAName(item, body);
			} else {
				commonCache[item.ecosis['USDA Code'].toLowerCase()] = '';
			}
			next();
		}
	);
}

function getUSDAName(item, str) {
	if( str.length == 0 ) return;
	
	var parts = str.split('\r\n');
	if( parts.length < 2 ) return;

	var attrs = parts[0].replace(/"/g, '').split(',');
	var values = parts[1].replace(/"/g, '').split(',');

	for( var i = 0; i < attrs.length; i++ ) {
		item[attrs[i]] = values[i];
	}
}

function addUpdateSpectra(pkgSpectra, callback) {
	var search, spectra_id;

	var list = pkgSpectra.data;

	// make group list
	var groups = [];
	if( pkgSpectra.groups ) {
		for( var i = 0; i < pkgSpectra.groups.length; i++ ) {
			groups.push(pkgSpectra.groups[i].display_name);
		}
	}

	async.eachSeries(
		list,
		function(item, next) {
			count.found++;
			search = {
				pkg_id     : pkgSpectra.package_id,
				spectra_id : item.spectra_id ? item.spectra_id : md5(JSON.stringify(item.spectra))
			};

			// clean all keys in metadata, mongo doesn't like '.'
			clean(item.metadata);
			clean(item.ecosis);

			// promote metadata attributes to first class attributes
			if( item.ecosis ) {
				for( var key in item.ecosis ) {
					if( key == '_id' || item[key] ) continue;
					item[key] = item.ecosis[key];
				}
				delete item.ecosis;
			}

			// turn the spectra index friendly form
			if( item.spectra ) {
				var spectra = [];
				for( var i = 0; i < item.spectra.length; i++ ) {
					spectra.push({
						wavelength : item.spectra[i].splice(0,1)[0],
						values : item.spectra[i]
					});
				}
				item.spectra = spectra;
			}

			// HACK
			// change Common to 'Common Name'
			if( item.Common && !item['Common Name'] ) {
				item['Common Name'] = item.Common;
				delete item.Common;
			}

			// add grouping information
			item.group_by = {};
			if( pkgSpectra.group_by ) {
				for( key in pkgSpectra.group_by ) item.group_by[key] = pkgSpectra.group_by[key];

				item.group_by.by = (stdMetadata[item.group_by.by] ? 'ecosis.' : 'metadata.')+item.group_by.by; 
				item.group_by.sort_on = (stdMetadata[item.group_by.sort_on] ? 'ecosis.' : 'metadata.')+item.group_by.sort_on; 
			}

			// add extras
			item.pkg_id = search.pkg_id;
			item.spectra_id = search.spectra_id;
			item.pkg_name = pkgSpectra.package_name;
			item.pkg_groups = groups;
			item.pkg_title = pkgSpectra.package_title;

            log('checking spectra :'+JSON.stringify(search));
			collection.findOne(search, function(err, doc) {
				if( err ) {
					count.error++;
					console.log(err);
					return next();
				}

				if( doc ) { // update
					update(item, doc, next);
				} else { // insert
					add(item, next);
				}
			});
		},
		function(err) {
			callback();
		}
	);
}

function clean(metadata) {
	for( var key in metadata ) {
		if( key.indexOf('.') != -1 ) {
			var value = metadata[key];
			delete metadata[key];
			metadata[key.replace(/\./g,'')] = value;
		}
	}
}

function update(newItem, oldItem, next) {
	if( itemChanged(newItem, oldItem) ) {
        log('updating spectra :'+oldItem._id);

		newItem.lastUpdate = lastRun.toLocaleString();
        newItem.lastRun = lastRun.toLocaleString();
        newItem._id = oldItem._id;

        collection.save(newItem, function(err, result) {

            if( err ) {
                count.error++;
                console.log(err);
            } else {
                count.update++;
            }
            next();
        });
	} else { // just set lastRun value
        log('no changes:'+oldItem._id);
        noChanges.push(oldItem._id);
        next();
	}
}

function add(item, next) {
    log('adding new spectra...');

	item.lastRun = lastRun.toLocaleString();
	item.lastUpdate = lastRun.toLocaleString();

	collection.insert(item, {w :1}, function(err, result) {
		if( err ) {
			count.error++;
			console.log(err);
		} else {
			count.insert++;
		}

		next();
	});
}

function itemChanged(item1, item2) {
	var key, tmp1, tmp2;
	var ignoreList = ['spectra', 'lastRun', '_id', 'lastUpdate'];
	for( key in item1 ) {
		if( ignoreList.indexOf(key) > -1 ) continue;

		if( item2[key] == null ) {
			//console.log('new item has new key: '+key);
			return true;
		}

		tmp1 = (typeof item1[key] == 'object') ? JSON.stringify(item1[key]) : item1[key];
		tmp2 = (typeof item2[key] == 'object') ? JSON.stringify(item2[key]) : item2[key];
		
		if( tmp1 != tmp2 ) {
			//console.log('value mismatch ['+key+']: '+tmp1+' '+tmp2);
			return true;
		}
	}
	for( key in item2 ) {
		if( ignoreList.indexOf(key) > -1 ) continue;
		if( item1[key] == null ) {
			//console.log('new item does not have key: '+key);
			return true;
		}
	}
	return false;
}

function updateNoChangeList(callback) {
    log('setting lastRun on spectra with no changes');


    collection.update(
        {'_id': { '$in' : noChanges }}, 
        {'$set': {'lastRun': lastRun.toLocaleString()}},
        {multi: true},
        function(err, result){
            // NOTE: errors here will force removal of spectra later on
            if( err ) {
                count.error++;
                console.log(err);
            }

            noChanges = [];
            callback();
        }
    );
}

function removeOldSpectra() {
	collection.remove({lastRun : { $ne : lastRun.toLocaleString() }},function(err, removed){
		if( err ) console.log(err);

		count.remove = removed;
		writeLog();
    });
}

function writeLog() {
	importLog += 
			count.found +" items found\n"+
			count.update +" items required updated\n"+
			count.insert +" items were new\n"+
			count.error+" items error'd on insert/update\n"+
			count.remove+" items removed\n"+
			"Import of ckan finished @"+new Date().toLocaleString()+"\n";
	
	importLog += "==== End Import ====\n";
	console.log(importLog);
	
	count.timestamp = new Date();
	
	// add to mongo stats
	// example day query: db.items_update_stats.find({timestamp: {$gte: new Date(2013, 7, 16), $lt: new Date(2013, 7, 17)}});
	if( config.import.statsCollection ) {
		db.collection(config.import.statsCollection, function(err, collection) { 
			collection.insert(count,function(err, removed){
				if( err ) console.log({error:true,message:"Error error adding stats to collection items_update_stats",errObj:err});
				db.close();
		    });
		});
	} else {
		db.close();
	}
}


// the config file should be the second argument
if( process.argv.length < 3 ) {
    console.log("you must provide the location of your config file");
    process.exit();
}

config = require(process.argv[2]);

run();