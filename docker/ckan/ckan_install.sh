#! /bin/bash

# Basically summing up: http://docs.ckan.org/en/latest/maintaining/installing/install-from-source.html

VERSION=2.4.1
SOLR_HOME=/opt/solr/example/solr
SOLR_VERSION=4.10.1
SOLR=solr-$SOLR_VERSION

apt-get update

# you can select Internet Site and localhost for postfix/smtp server
apt-get install -y sudo vim wget python-dev postgresql libpq-dev python-pip python-virtualenv git-core default-jre-headless postfix

# create dir
sudo mkdir -p /ckan


echo "**** Installing v$VERSION of CKAN"
cd /ckan
githuburl="git+https://github.com/ckan/ckan.git@ckan-$VERSION#egg=ckan"
pip install -e $githuburl

echo "**** Installing CKAN pip requirements"
pip install -r /ckan/src/ckan/requirements.txt

echo "*** Installing solr"
mkdir -p /opt/solr
cd /
if [ ! -f $SOLR.tgz ]; then
  wget --progress=bar:force https://archive.apache.org/dist/lucene/solr/$SOLR_VERSION/$SOLR.tgz
fi
tar zxf $SOLR.tgz -C /opt/solr --strip-components 1

mv $SOLR_HOME/collection1/ $SOLR_HOME/ckan/
echo name=ckan > $SOLR_HOME/ckan/core.properties
cp /ckan/src/ckan/ckan/config/solr/schema.xml $SOLR_HOME/ckan/conf/schema.xml
mkdir -p /var/log/solr
rm $SOLR.tgz

/run_solr.sh

# start postgresl
echo "**** Starting CKAN Postgres User"
/etc/init.d/postgresql start

echo "**** Creating CKAN Postgres User"
sudo -u postgres createuser -S -D -R -P ckan_default

echo "**** Creating CKAN Postgres database"
sudo -u postgres psql -c "CREATE DATABASE template2 WITH owner=postgres template=template0 encoding='UTF8';"
sudo -u postgres createdb -O ckan_default ckan_default -E utf-8 -T template2


echo "**** Init CKAN config"
mkdir -p /etc/ckan/

cd /ckan/src/ckan
paster make-config ckan /etc/ckan/default.ini
cp /etc/ckan/default.ini /etc/ckan/ecosis.ini

echo ""
echo "****"
echo "As far as I go.  You need to do the following:"
echo "Edit /etc/ckan/ecosis.ini"
echo " - update pg connection: sqlalchemy.url = postgresql://ckan_default:pass@localhost/ckan_default"
echo " - update solr connection: solr_url=http://127.0.0.1:8983/solr/ckan"
echo " - update site id: ckan.site_id = default"
echo " - update site url: ckan.site_url = http://demo.ckan.org"
echo ""
echo "Once this is done, run ckan_install_p2.sh"
