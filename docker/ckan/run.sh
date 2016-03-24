#! /bin/bash

service postgresql start

cd / && /run_solr.sh

sleep 10

cd / && /run_ckan.sh
