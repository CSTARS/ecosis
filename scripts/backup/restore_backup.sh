#! /bin/bash

CONF_FILE=/etc/ckan/default/development.ini
root="$(pwd)"

if [ ! -n "$1" ]; then
	echo "You must supply a backup zip file"
	exit
fi

if [ ! -f $1 ]; then
	echo "The zip file provided doesn't exist: $1"
	exit
fi

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

dir="$root/tmp"

echo "Unpacking backup"
unzip $1 -d $dir

# paster info: http://docs.ckan.org/en/latest/maintaining/paster.html

# dump entire pg db
echo "Cleaning CKAN DB"
paster db clean -c $CONF_FILE

# load backup entire pg db
echo "Loading CKAN backup"
paster db load -c $CONF_FILE "$dir/pg_ckan_backup.sql"

echo "Loading CKAN backup"
mongorestore --drop --batchSize=100 "$dir/mongodb_backup"

echo "replacing config file"
if [ -f $CONF_FILE ]; then
	sudo rm $CONF_FILE
fi
sudo mv "$dir/development.ini" $CONF_FILE

echo "replacing CKAN file resources"
if [ -d /usr/lib/ckan ]; then
	sudo rm -rf /var/lib/ckan
fi
sudo mv "$dir/var/lib/ckan" /var/lib/ckan

echo "cleanup"
sudo rm -rf $dir

echo "Done."
