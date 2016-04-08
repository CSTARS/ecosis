#! /bin/bash

# the ecosis.ini file should be mountd
cp /data/ckan/ecosis.ini /etc/ckan/ecosis-docker.ini

cd /ckan/src/ckan

paster config-tool /etc/ckan/ecosis-docker.ini "ecosis.mongo.url=mongodb://$MONGO_PORT_27017_TCP_ADDR:27017/"

paster serve /etc/ckan/ecosis-docker.ini
