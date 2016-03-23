#! /bin/bash

echo "**** Creating PG tables"
cd /ckan/src/ckan
paster db init -c /etc/ckan/ecosis.ini

echo "**** Linking who.ini"
if [ ! -f /etc/ckan/who.ini ]; then
  ln -s /ckan/src/ckan/who.ini /etc/ckan/who.ini
fi

apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
