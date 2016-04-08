#! /bin/bash

echo "**** Creating tmp Mount /data"
mkdir -p /data/ckan/storage/workspace
ln -s /opt/solr/example/solr /data/solr
ln -s /var/lib/postgresql /data/postgresql

/run_solr

sleep 5


echo "**** Creating PG tables"
cd /ckan/src/ckan
paster db init -c /etc/ckan/ecosis.ini

echo "**** Linking who.ini"
if [ ! -f /etc/ckan/who.ini ]; then
  ln -s /ckan/src/ckan/who.ini /etc/ckan/who.ini
fi



apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
