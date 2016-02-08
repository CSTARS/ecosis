'use strict';

var fork = require('child_process').fork;


module.exports = function(host, id, callback) {
  var child = fork('./lib/prerender/render', [host, id]);
  child.on('message', callback);
};
