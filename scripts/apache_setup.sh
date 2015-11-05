#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo '**** Installing apache and mod-wsgi'
sudo aptitude install apache2 libapache2-mod-wsgi

echo '**** Moving conf and wsgi files'
sudo cp "$DIR/apache/ckan.conf" /etc/apache2/sites-available/
sudo cp "$DIR/apache/apache.wsgi" /etc/ckan/default/

echo '**** linking to sites enabled'
cd /etc/apache2/sites-enabled
sudo ln -s ../sites-available/ckan.conf 000-ckan.conf

echo '**** Restarting apache'
sudo /etc/init.d/apache2 restart
