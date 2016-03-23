#! /bin/bash

service postgresql start
/run_solr.sh

sleep 10

/run_ckan.sh
