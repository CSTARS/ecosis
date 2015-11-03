#! /bin/bash

CONF_FILE=/etc/ckan/default/development.ini
DUMP_NAME=ecosis_backup.zip

root="$(pwd)"
dir="$root/tmp"

# prep tmp dir
echo "Preparing tmp dir: $dir"
if [ -d "$dir" ]; then
	rm -rf $dir
fi
mkdir $dir

if [ -f "$root/$DUMP_NAME" ]; then
	rm "$root/$DUMP_NAME"
fi


# init python virtual env for CKAN
echo "Initializing python virtual env for CKAN"
. /usr/lib/ckan/default/bin/activate
cd /usr/lib/ckan/default/src/ckan

# paster info: http://docs.ckan.org/en/latest/maintaining/paster.html

# dump entire pg db
echo "Backing up CKAN PostgreSQL data"
paster db dump -c $CONF_FILE "$dir/pg_ckan_backup.sql"

# dump entire mongo db
echo "Backing up MongoDB data"
mongodump --db ecosis --out "$dir/mongodb_backup"

# copy the config file
cp $CONF_FILE $dir

echo "Compressing database data"
cd $dir
zip -r ../$DUMP_NAME ./*

echo "Compressing CKAN dataset files"
cd ..
zip -g -r "$root/$DUMP_NAME" /var/lib/ckan/*


echo "cleanup"
rm -rf $dir

echo "done"
