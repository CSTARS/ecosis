/*
 *	Import data from ckan server
 *  Think this should run as a child process
 */
var ckan = require('node-ckan');
var http = require('http');
var MongoClient = require('mongodb').MongoClient;

// stored id in mqe
var CKAN_ID = 'ckan_id';

// there needs to be a parser in ./parsers folder for each on of these formats
var knownFormats = ['aster'];
var parsers = {};
for( var i = 0; i < knownFormats.length; i++ ) {
	parsers[knownFormats[i]] = require("./parsers/"+knownFormats[i]);
}

var index = 0;
var packageList = [];
var collection = null;

function run(config) {
	index = 0;
	console.log("Exporting data from CKAN...");
	ckan.export({
		server   : config.ckan.server,
		callback : function(data){
			for( var id in data.packages ) {
				packageList.push(data.packages[id]);
			}
			console.log("Data Loaded. "+packageList.length+" pkgs found.");
			onDataReady(config);
		}
	});
}

function onDataReady(config, data) {
	console.log("Connecting to mongo...");
	MongoClient.connect(config.db.url, function(err, database) {
		if( err ) return console.log(err);

		database.collection(config.db.mainCollection, function(err, coll) { 
			if( err ) return callback(err);
			console.log("Connected.  Updating resources...");
			collection = coll;
			updatePackage(packageList[0]);
		});
	});
}


function onPackageComplete() {
	index++;
	if( index == packageList.length ) {
		console.log("Done.");
	} else {
		updatePackage(packageList[index]);
	}
}


function updatePackage(pkg) {
	console.log("\nUpdating packages("+index+"/"+packageList.length+"): "+pkg.title);
	if( pkg.resources.length == 0 ) {
		console.log(" --Package has no resources.");
		onPackageComplete();
		return;
	} 

	// for each package update records
	updateRecord(0, pkg, function(){
		onPackageComplete();
	});


	// then check last updated time from ckan
}

function updateRecord(rindex, pkg, callback) {
	var resource = pkg.resources[rindex];
	console.log("Checking resource("+rindex+"/"+pkg.resources.length+"): "+resource.name);
	var item = createItem(pkg, resource);

	function next() {
		rindex++;
		if( rindex == pkg.resources.length ) {
			callback();
		} else {
			updateRecord(rindex, pkg, callback);
		}
	}

	function update(insert) {
		if( insert ) console.log(" --resource doesn't exist: inserting...");
		else console.log(" --resource is stale, updating...");

		// stale, download file and parse data (if parser exsits)
		getData(item, function(){
			collection.insert(item, {w :1}, function(err, result) {
				if( err ) console.log(err);
				else console.log(" --update complete");
				next();
			});
		});
	}

	// first see if the record exits
	collection.find({ckan_id: item[CKAN_ID]}).toArray(function(err, items) {
		if( err ) {
			console.log(err);
			return next();
		}

		if( items.length > 0 ) { // exists
			if( resourceChanged(item, items[0]) ) {
				update();
			} else {
				next();
				console.log("  --resources are in sync.");
			}
		} else {
			update(true);
		}

	});
}

// if we have a parser for the format, download the data and parse
function getData(item, callback) {
	if( !parsers[item.format] || !item.url ) return callback();

	var data = "";
	http.get(item.url, function(response) {
    	response.setEncoding('utf-8');

	    response.addListener('data', function (chunk) {
	        data += chunk;
	    });
	    response.addListener("end", function() {
	    	//console.log(data);
	    	//console.log(parsers[item.format].parse(data));
	    	var file = parsers[item.format].parse(data);
	    	for( var key in file.filters ) item[key] = file.filters[key];
	    	item.data = file.data;
	    	callback();
	    });
	});
}

// compare to items and see if anything has changed
function resourceChanged(r1, r2) {
	for( var key in r1 ) {
		if( key == "data" ) continue;

		if( typeof r1[key] == "string" ) {
			if( r1[key] != r2[key] ) {
				//console.log(key+": "+r1[key]+" != "+r2[key]);
				return true;
			}
		} else {
			if( !r2[key] ) {
				//console.log(key+": "+r2[key]);
				return true;
			}
			if( r1[key].length != r2[key].length ) {
				//console.log(key+": "+r1[key].length+" != "+r2[key].length);
				return true;
			}
			for( var i = 0; i < r1[key].length; i++ ) {
				if( r1[key][i] != r2[key][i] ) {
					//console.log(key+"-"+i+": '"+r1[key][i]+"'' != '"+r2[key][i]+"'");
					return true;
				}
			}
		}
	}
	return false;
}


// create a mqe item from a pkg and a resource
function createItem(pkg, res){
	var item = {
		title        : res.name,
		description  : res.description,
		created      : res.created,
		url          : res.url,
		format       : res.format,
		ckan_id      : res.id,
		updated      : res.revision_timestamp,
		keywords     : [],
		groups       : [],
		organization : pkg.organization ? pkg.organization.title : "",
		package      : pkg.title,
		notes        : pkg.notes
	}

	if( pkg.groups ) {
		for( var i = 0; i < pkg.groups.length; i++ ) {
			item.groups.push(pkg.groups[i].name);
		}
	}

	if( pkg.tags ) {
		for( var i = 0; i < pkg.tags.length; i++ ) {
			if( pkg.tags[i].state == "active" ) {
				item.keywords.push(pkg.tags[i].display_name);
			}
		}
	}

	return item;
}



// the config file should be the second argument
if( process.argv.length < 3 ) {
	console.log("you must provide the location of your config file");
	process.exit();
}

config = require(process.argv[2]);
run(config);