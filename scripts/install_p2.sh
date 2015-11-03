#! /bin/bash

echo "Do you wish to continue? [Y/n]"

read -n 1 answer
if [ $answer != "Y" ]; then
        echo "bye bye"
        exit
fi

echo "Continuing install..."

echo "**** Starting jetty"
sudo service jetty8 start

echo "**** Replacing SOLR default schema with CKAN schema"
sudo mv /etc/solr/conf/schema.xml /etc/solr/conf/schema.xml.bak
sudo ln -s /usr/lib/ckan/default/src/ckan/ckan/config/solr/schema.xml

echo "**** Restarting jetty"
sudo service jetty restart

echo "**** Creating PG tables"
. /usr/lib/ckan/default/bin/activate
cd /usr/lib/ckan/default/src/ckan
paster db init -c /etc/ckan/default/development.ini

echo "**** Linking who.ini"
ln -s /usr/lib/ckan/default/src/ckan/who.ini /etc/ckan/default/who.ini

echo "**** Starting CKAN"
echo ". /usr/lib/ckan/default/bin/activate"
echo "cd /usr/lib/ckan/default/src/ckan"
echo "paster serve /etc/ckan/default/development.ini"

paster serve /etc/ckan/default/development.ini
