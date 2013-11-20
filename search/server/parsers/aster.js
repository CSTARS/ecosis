// simple metadata key mapping
var metamap = {
	Rocks : "Rock",
	Soils : "Soil"
}

// attribute map.
// we would like to filter by these attributes
var filterMap = {
	"Name"     : "Name",
	"Type"     : "Type",
	"Class"    : "Class",
	"Subclass" : "Subclass",
	"Particle Size" : "Particle Size"
}

exports.parse = function(content) {	
	content = content.split("\n");

	var obj = {spectra:[[],[]]};
	var cData = ""; // current metadata value
	var cType = ""; // current metadata key
	
	for( var i = 0; i < content.length; i++ ) {
	  var row = content[i].replace(/\r/,'').split(/\t/);
	  
	  // does it not have the \r delimiter?
	  // NOTE: some data rows use three spaces instead of delimiter
	  // this is handled below
	  if( row.length == 1 ) {
		
		// is it a metadata?
		if( row[0].match(/.*:.*/) ) {  
			if( cType != "" ) {
				obj[clean(cType)] = clean(cData);
			}
			var parts = row[0].split(": ");
			cData = parts.length > 1 ? parts[1].replace(/\n/g, ' ') : '';
			cType = parts[0].replace(/\./g,''); // not allowed in mongodb
		
		// is it a new line?
		} else if ( row[0] == "" && cType != "" ) {
			obj[clean(cType)] = clean(cData);
			
		// if it starts with a space or digit, it's column value
		} else if ( row[0].match(/^\s.*/) || row[0].match(/^\d.*/) ) {
			var row = row[0].replace(/^\s*/,'').replace(/\s+/g,',').split(",");
			
			obj.spectra[0].push(row[0]);
			obj.spectra[1].push(row[1]);
			
		// it's just another line of metadata
		} else {
			cData += row[0].replace(/\n/g, ' ');
		}
		
		// it's a row / column value
	  } else {
		obj.spectra[0].push(row[0]);
		obj.spectra[1].push(row[1]);
	  }
	}
	
	var filters = {};
	for( var key in filterMap ) {
		if( obj[key] ) filters[key] = obj[key];
	}

	// filters are attributes that should be moved up to first class citizens
	return {
		filters : filters,
		data : obj
	}
}

function clean(value) {
	var value = value.replace(/^\s*/,'').replace(/\s*$/,'').replace(/^\r*/,'').replace(/\r*$/,'').replace(/^\t*/,'').replace(/\t*$/,'');
	if( metamap[value] ) value = metamap[value];
	return value;
}