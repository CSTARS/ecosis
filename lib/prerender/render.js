'use strict';

var jsdom = require('jsdom');
var killed = false;


if( process.argv.length < 4 ) {
  process.send({error: true, message: 'requires host and id'});
  return;
}
var args = process.argv.splice(2, 3);

jsdom.env({
  url: args[0]+'#result/'+args[1],
  features: {
      ProcessExternalResources : ['script']
  },
  done: function (err, window) {
    if( err ) {
      error(err);
      return;
    }
    if( window.ecosisResultReady ) {
      success(window.document.documentElement.outerHTML);
    } else {
      window.onEcosisResultReady = function() {
        success(window.document.documentElement.outerHTML);
      };
    }
  }
});

function success(html) {
  process.send({
    success : true,
    html : html
  });

  kill();
}

function error(msg) {
  process.send({
    error : true,
    message : msg
  });

  kill();
}

function kill() {
  setTimeout(function(){
    process.exit();
  }, 100);
}
