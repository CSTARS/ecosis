#! /bin/bash

pidfile=/var/run/ecosis-search.pid

echo '***** RESTARTING SERVER *****'
cd /opt/node-apps/ecosis-search

pid=`less $pidfile`

kill -9 $pid

echo 'restarting server'
node ./ecosis-search/server --mqe-local=/opt/node-apps/ecosis-search/config.js ecosis-search-server &
echo $! > $pidfile

sleep 3
tail -n 50 /var/log/node-apps/esis-search/app.log
