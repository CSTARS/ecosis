## Fresh install

The following should be preformed for a fresh install (Debian / Ubuntu).

Grab git first of course :)
```
sudo apt-get install git
```

Create a directory for the application and cd there and clone repo
```
sudo mkdir -p /opt/node-apps/ecosis-search
cd /opt/node-apps/ecosis-search
sudo git clone https://github.com/CSTARS/ecosis
```

No we need to install CKAN.  This can be rough, hopefully these scripts help.
```
cd ecosis/scripts
./ckan_install.sh
```

There will be a pause for you to configure the CKAN ini file and the jetty conf
file.  There should be some help text for what you need to do in the ckan_install.sh command.

You will need to set the following in /etc/ckan/default/development.ini
```
# update with your ckan_default user password you entered during install
sqlalchemy.url = postgresql://ckan_default:yourpassword@localhost/ckan_default

solr_url=http://127.0.0.1:8983/solr

ckan.site_id = default

# whatever your domain is
ckan.site_url = http://demo.ckan.org
```

Then edit /etc/default/jetty or /etc/default/jetty8 depending on your system
```
NO_START=0
JETTY_HOST=127.0.0.1
JETTY_PORT=8983
```

Once you have made the edits, finish up the CKAN install.
```
./ckan_install_p2.sh
```

This script will actually leave CKAN up and running (if all went well).  You can
test the system at http://localhost:5000.

Now its time to install the [EcoSIS plugin for CKAN](https://github.com/CSTARS/ckanext-ecosis).
To do this run ./ecosis_install.sh.  This will do a couple things.
- Install NodeJS
- Install MongoDB
- Install EcoSIS CKAN plugin via pip
- Install plugin pip dependencies

As many systems default package list lag behind the latest NodeJS and MongoDB versions,
this script will add repos for the latest and greatest to your sources list and
then install from there.
```
./ecosis_install.sh
```

To finish the plugin install you need to once again edit the /etc/ckan/default/development.ini
file and add the EcoSIS config.  A sample can be found [here](https://github.com/CSTARS/ckanext-ecosis/blob/dev/ecosis_conf.ini)

Restart apache to have changes take effect.

```
sudo /etc/init.d/apache2 restart
```

At this point you *should* have a fully functional EcoSIS CKAN instance.  You will
also have MongoDB and NodeJS setup, which are required to run this search interface.

#### Known EcoSIS Plugin issues.

Looks like there are issues with the pymongo plugin that cause the error: ServerSelectionTimeoutError:
No servers found yet to be thrown. [ticket](https://jira.mongodb.org/browse/PYTHON-961).  If this is
the cause, downgrade the plugin to 2.8, the plugin is setup to hand both versions.
```
. /usr/lib/ckan/default/bin/activate
pip install pymongo==2.8
```


## Apache

If you going to run on port 80, you probably want to run via
[apache wsgi](https://github.com/GrahamDumpleton/mod_wsgi).  There
are other solutions for this if you wish to investigate.

To setup EcoSIS dev to run on port 80, you need to simply run:
```
./apache_setup.sh
```
This will
 - install apache if need
 - install the mod-wsgi module
 - copy the CKAN site config.
 - copy the apache.wsgi file

You will still need to edit the *ServerName* to the correct domain name.

## Mail

Install SMTP server

```
sudo apt-get install postfix
```

then set mail from in /etc/ckan/default/development.ini

```
smtp.mail_from = dev-data
```


## Restore from Backups

If you have a backup dump (created using ./create_backup.sh), you can import using:
```
./restore_backup.sh /path/to/backup.zip
```

It's import to note, this will wipe everything and load data from the backup!  It's probably
best to backup first.  I know, mind, blown.

## Create Backup

If you want to create a new backup, simply run:
```
./create_backup.sh
```

This snapshots:
- The CKAN PostgreSQL database
- The EcoSIS MongoDB database
- All CKAN resource files (files uploaded for datasets)
- The current CKAN config file
