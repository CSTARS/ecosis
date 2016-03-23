#!/bin/bash
set -eu

pidfile=/var/run/solr.pid

pid=`less $pidfile`
if [ "$pid" != "" ]; then
  kill $pid
fi

# Start Solr
echo "Starting Solr..."
cd /opt/solr/example
java -jar start.jar >>/var/log/solr/solr.out 2>&1 &

echo $! > $pidfile
