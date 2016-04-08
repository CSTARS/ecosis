#! /bin/bash

PGDATA=/data/postgresql/9.4/main
service postgresql restart

cd / && /run_solr.sh

sleep 10

cd / && /run_ckan.sh
