var request = require('request');
var parseString = require('xml2js').parseString;
var async = require('async');
var ckan = require('node-ckan');
var fs = require('fs');


var url = 'http://localhost:8080/specchio_service/campaign/export/specchio/1';
var username = 'jrmerz';
var password = 'specchio';

var ckanData = [];

request(url, {auth: {user: username, password: password}}, function(error, response, body){
	parseString(body, function(err, result){
		parseResponse(result);
	});
});


function parseResponse(json) {
	var spectrumArr = [], field;

	var arr = json.campaign.table;
	for( var i = 0; i < arr.length; i++ ) {
		if( arr[i].$.name == 'spectrum' ) {
			for( var j = 0; j < arr[i].field.length; j++ ) {
				field = arr[i].field[j];
				if( field.$.name == 'spectrum_id' ) {
					spectrumArr.push(field._);
					break;
				}
			}
		}
	}

	loadSpectrum(spectrumArr);
}

function loadSpectrum(arr) {
	async.eachSeries(arr,
		function(item, next) {
			console.log('requesting: '+item);

			request('http://localhost:8080/specchio_service/spectrum/get/'+item+'/true', {auth: {user: username, password: password}}, function(error, response, body){
				parseString(body, {mergeAttrs: true}, function(err, result){
					result = cleanSpectrumJson(result);
					var name = result.file_name[0].value._;

					var data = {
						name : name+'.xml',
						description : result.campaign_desc.value ? result.campaign_desc.value._ : 'No campaign description',
						file : __dirname+'/files/'+name+'.xml',
						format : 'specchio',
						mimeType : 'text/xml'
					};
					ckanData.push(data);

					fs.writeFileSync(__dirname+'/files/'+name+'.xml', body);

					next();
				});
			});
		},
		function(err) {
			if( err ) console.log(err);
			importToCkan();
		}
	);
}

function importToCkan() {

	var d = {
		debug : 'true',
		key : '7481c34d-0143-4139-949c-1760eb74e257',
		server : 'http://esis.casil.ucdavis.edu',

		packages : [{
			name : 'specchio-campaign',
			description : 'test import from specchio',
			resources : ckanData
		}]

	};

	fs.writeFileSync('save.json', JSON.stringify(d));

	ckan.import(d);
}


function cleanSpectrumJson(json) {
	var result = {};
	for( var key in json.spectrum ) {
		result[key] = parseAttr(json.spectrum[key]);
	}
	return result;
}

function parseAttr(attr) {
	if( attr instanceof Array ) {
		return parseArr(attr);
	} else if ( typeof attr == 'object' ) {
		return parseObj(attr);
	} else {
		return attr;
	}
}

function parseArr(arr) {
	if( arr.length == 1 ) {
		return parseAttr(arr[0]);
	} else {
		var resp = [];
		for( var i = 0; i < arr.length; i++ ) {
			resp.push(parseAttr(arr[i]));
		}
		return resp;
	}
}

function parseObj(obj) {
	var resp = {};
	for( var key in obj ) {
		resp[key] = parseAttr(obj[key]);
	}
	return resp;
}