#! /bin/bash

# Basically summing up: http://docs.ckan.org/en/latest/maintaining/installing/install-from-source.html

VERSION=2.4.1

echo ""
echo "You are about to install CKAN v$VERSION."
echo "Do you wish to continue? [Y/n]"

read -n 1 answer
if [ $answer != "Y" ]; then
        echo "bye bye"
        exit
fi

echo "**** Installing packages"
sudo apt-get install python-dev postgresql libpq-dev python-pip python-virtualenv git-core solr-jetty openjdk-8-jdk

echo "**** Create Python virtual env"
sudo mkdir -p /usr/lib/ckan/default
sudo chown `whoami` /usr/lib/ckan/default
virtualenv --no-site-packages /usr/lib/ckan/default
. /usr/lib/ckan/default/bin/activate

echo "**** Installing v$VERSION of CKAN"
githuburl="git+https://github.com/ckan/ckan.git@ckan-$VERSION#egg=ckan"
pip install -e $githuburl

echo "**** Installing CKAN pip requirements"
pip install -r /usr/lib/ckan/default/src/ckan/requirements.txt

echo "**** Reactivating Python virtualenv"
deactivate
. /usr/lib/ckan/default/bin/activate

echo "**** Creating CKAN Postgres User"
sudo -u postgres createuser -S -D -R -P ckan_default

echo "**** Creating CKAN Postgres database"
sudo -u postgres createdb -O ckan_default ckan_default -E utf-8

echo "**** Init CKAN config"
sudo mkdir -p /etc/ckan/default
sudo chown -R `whoami` /etc/ckan/

cd /usr/lib/ckan/default/src/ckan
paster make-config ckan /etc/ckan/default/development.ini

echo ""
echo "****"
echo "As far as I go.  You need to do the following:"
echo "Edit /etc/ckan/default/development.init"
echo " - update pg connection: sqlalchemy.url = postgresql://ckan_default:pass@localhost/ckan_default"
echo " - update solr connection: solr_url=http://127.0.0.1:8983/solr"
echo " - update site id: ckan.site_id = default"
echo " - update site url: ckan.site_url = http://demo.ckan.org"
echo ""
echo "Edit /etc/default/jetty8"
echo " - NO_START=0"
echo " - JETTY_HOST=127.0.0.1"
echo " - JETTY_PORT=8983"
echo ""
echo "Once this is done, run install_p2.sh"
