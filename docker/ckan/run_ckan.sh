#! /bin/bash

cp /data/ckan/ecosis.ini /etc/ckan/docker.ini

cd /ckan/src/ckan

# apply mongo addr & port
paster config-tool /etc/ckan/docker.ini "ecosis.mongo.url=mongodb://$MONGO_PORT_27017_TCP_ADDR:27017/"

paster serve /etc/ckan/docker.ini
