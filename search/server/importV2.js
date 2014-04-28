var ckan = require('node-ckan');
var async = require('async');
var request = require('request');


exports.run = function(config, callback) {
	ckan.setKeyFile(config.ckan.keyFile);
	ckan.setServer(config.ckan.server);

	ckan.export({
		debug: true,
	    // data has all groups, organizations and packages
	    callback : function(data) {
	    	getSpectra(data.packages, callback);
	    }
	});
}

function getSpectra(pkgs, callback) {
	var pkg, spectraResource = [];
	for( var id in pkgs ) {
		pkg = pkgs[id];
		if( pkg.type == 'dataset' && pkg.resources ) {
			for( var j = 0; j < pkg.resources.length; j++ ) {
				if( pkg.resources[j].name == "esis_spectral_data.json" ) {
					spectraResource.push(pkg.resources[j].url);
				}
			}
		}
	}
	downloadSpectraFiles(spectraResource, callback);
}

function downloadSpectraFiles(resources, callback) {
	var data = [];

	async.eachSeries(
		resources, 
		function(url, next){
			console.log('Requesting: '+url);
			request(url, function (error, response, body) {

			  if (!error && response.statusCode == 200) {
			  	data.push(JSON.parse(body));
			  }
			  next();
			});
		},
		function(err){
			if( err ) console.log(err);
			callback(data);
		}
	);
}
