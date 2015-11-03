#! /bin/bash

CONF_FILE=/etc/ckan/default/development.ini

root="$(pwd)"

echo ""
echo "DANGER!  This will wipe your CKAN Postgres instance, MongoDB ecosis db,"
echo "         /var/lib/ckan/ directory and replace /etc/ckan/default/development.ini file!"
echo ""
echo "Are you sure you want to continue? [Y/n]"

read -n 1 answer
echo

if [ $answer != "Y" ]; then
	echo "probably safer..."
	exit
fi

echo ""
echo "SERIOUSLY! Are you sure you want to continue? [Y/n]"

read -n 1 answer
echo

if [ $answer != "Y" ]; then
	echo "good thing we asked twice."
	exit
fi

# init python virtual env for CKAN
echo "Initializing python virtual env for CKAN"
. /usr/lib/ckan/default/bin/activate
cd /usr/lib/ckan/default/src/ckan

# paster info: http://docs.ckan.org/en/latest/maintaining/paster.html

# dump entire pg db
#echo "Backing up CKAN PostgreSQL data"
#paster db dump -c $CONF_FILE "$dir/pg_ckan_backup.sql"

# dump entire mongo db
#echo "Backing up MongoDB data"
#mongodump --db ecosis --out "$dir/mongodb_backup"

echo "Done."
