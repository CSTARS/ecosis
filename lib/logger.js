const bunyan = require('bunyan');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const {URL} = require('url');


const streams = [
  // Log to the console
  { stream: process.stdout }
];

// wire in stack driver if google cloud service account provided
let projectId;
if( fs.existsSync(config.google.serviceAccountFile) ) {
  let {LoggingBunyan} = require('@google-cloud/logging-bunyan');

  // grab project id from service account file
  let accountFile = require(config.google.serviceAccountFile);

  // create bunyan logger for stackdriver
  projectId = accountFile.project_id;
  let loggingBunyan = new LoggingBunyan({
    projectId: accountFile.project_id,
    keyFilename: config.google.serviceAccountFile,
    resource : {type: 'project'}
  });


  // add new logger stream
  streams.push(loggingBunyan.stream());
}

let host = 'unknown.host'
try {
  host = new URL(config.server.url).host;
} catch(e) {}

let logger = bunyan.createLogger({
  name: (process.env.LOGGER_NAME || global.LOGGER_NAME || 'ecosis-search')+'-'+host,
  level: config.server.loglevel || 'info',
  streams: streams
});

let info = {
  name: (process.env.LOGGER_NAME || global.LOGGER_NAME || 'ecosis-search')+'-'+host,
  level: config.server.loglevel || 'info',
  stackdriver : {
    enabled : projectId ? true : false,
    file : config.google.serviceAccountFile
  }
}
if( projectId ) {
  info.stackdriver.projectId = projectId;
}

logger.info('logger initialized', info);

module.exports = logger;