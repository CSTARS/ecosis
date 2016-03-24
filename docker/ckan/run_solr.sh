#! /bin/bash

pidfile=/var/run/solr.pid

pid=`less $pidfile`
if [ "$pid" != "" ]; then
  kill $pid || echo 'solr not running.'
fi

# Start Solr
echo "Starting Solr..."
cd /opt/solr/example
java -jar start.jar >>/var/log/solr/solr.out 2>&1 &

echo $! > $pidfile
