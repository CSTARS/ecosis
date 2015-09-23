'use strict';

var exec = require('child_process').exec;
var cwd = __dirname+'/../';

module.exports = function() {
    return {
        name: 'git',
        info : gitInfo
    };
};

function gitInfo(callback) {
    var c = 0;
    var resp = {};
    function onResp(key, text) {
        resp[key] = text;
        c++;
        if( c === 3 ) {
          callback(resp);
        }
    }

    exec('git describe --tags', {cwd: cwd},
      function (error, stdout, stderr) {
        onResp('tag', stdout);
      }
    );
    exec('git branch | grep \'\\*\'', {cwd: cwd},
      function (error, stdout, stderr) {
        onResp('branch', stdout ? stdout.replace(/\*/,'').replace(/\s/g,'') : '');
      }
    );
    exec('git log  -1 | sed -n 1p', {cwd: cwd},
      function (error, stdout, stderr) {
        onResp('commit', stdout ? stdout.replace(/commit\s/,'') : '');
      }
    );
}
