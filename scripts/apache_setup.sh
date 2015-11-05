#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo '**** Installing apache and mod-wsgi'
sudo aptitude install apache2 libapache2-mod-wsgi

echo '**** Moving conf and wsgi files'
sudo cp "$DIR/apache/ckan.conf" /etc/apache2/sites-available/ecosis-ckan.conf
sudo cp "$DIR/apache/search.conf" /etc/apache2/sites-available/ecosis-search.conf
sudo cp "$DIR/apache/apache.wsgi" /etc/ckan/default/

echo '**** linking to sites enabled'
cd /etc/apache2/sites-enabled
sudo ln -s ../sites-available/ecosis-ckan.conf 000-ecosis-ckan.conf
sudo ln -s ../sites-available/ecosis-search.conf 001-ecosis-search.conf

echo '**** Restarting apache'
sudo /etc/init.d/apache2 restart

echo ''
echo 'done.'
echo ''
echo 'You still need to edit /etc/sites-available/ckan.conf'
echo '  - set "ServerName" to your domain name'
echo 'then restart apache: sudo /etc/init.d/apache2 restart'
