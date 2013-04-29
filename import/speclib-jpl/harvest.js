var request = require('request');
var jsdom = require("jsdom");
var http = require('http');
var fs = require('fs');

var list = ["mineral","rock","soil","lunar","meteorite","vegetation","water","manmade"];
var requests = list.length;
var total = 0;
var fTotal = 0;
var rTotal = 0;
var wTotal = 0;

for( var i = 0; i < list.length; i++ ) {
	post(list[i]);
}

function post(type) {
	console.log("Searching: "+type);
	request.post(
	    'http://speclib.jpl.nasa.gov/search-1/resultsdisplay3',
	    { form: 
		{ searchtype: type,
		  mname : '',
		  classsel: 'All',
		  subclass: 'All',
		  xstart : '',
		  xstop : '',
		  maxhits : 2000 
		} 
	    },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            parse(body);
	        }
	    }
	);
}

function parse(html) {
	jsdom.env(
	  html,
	  ["http://code.jquery.com/jquery.js"],
	  function(errors, window) {
	    var links = window.$("#content-core table a");
	    for( var i = 0; i < links.length; i++ ) {
		var name = window.$(links[i]).attr('href');
		name = name.replace(/.*\('/,'').replace(/'\).*/,'');
		getFile(name);
	    }
	
	    total += links.length;
	    requests--;
	    if( requests == 0 ) console.log("Total: "+total);
	  }
	);
}

function getFile(fName) {
	var url = "http://speclib.jpl.nasa.gov/speclibdata/"+fName;
	
    var request = http.get(url, function(response) {

	    var body = '';
	    
	    response.addListener('data', function (chunk) {
	        body += chunk;
	    });
	    
	    response.addListener("end", function() {
			fs.writeFile('./files/'+fName, body, function (err) {
		  		if (err) throw err;
			});
	    });

	});
}
