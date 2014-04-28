var express = require('express');
var app = express();
var fs = require('fs');
var exec = require('child_process').exec;



var server = {
    //host : 'http://192.168.1.128',
    host : 'http://localhost',
    port : 3000
}

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
}


app.use(express.bodyParser({limit: '50mb'}));
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);


app.post('/parse', function(req, res){
    if( req.files && req.files.file ) {

        var path = __dirname+'/tmp/'+req.files.file.originalFilename;
        fs.renameSync(req.files.file.path, path);
        
        //console.log('java -jar '+__dirname+'/SpectraToJson.jar "'+path+'"');
        exec(
            'java -jar '+__dirname+'/SpectraToJson.jar "'+path+'"', 
            function (error, stdout, stderr) {
                fs.unlink(path);

                if( error ) return res.send({error:true,message:error});
                if( stderr ) return res.send({error:true,message:stderr});

                res.set('Content-Type', 'application/json');
                res.send(stdout);
            }
        );

    } else {
        res.send({error:true,message:'no file found'});
    }
    
});

app.listen(server.port);