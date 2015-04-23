var fs = require('fs');

var schema = fs.readFileSync(__dirname+'/../../ecosis-data-tool/app/schema.json');
fs.writeFileSync(__dirname+'/../search/app/schema.json', schema, 'utf-8');
