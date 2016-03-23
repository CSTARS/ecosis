#! /bin/bash

echo "Installing EcoSIS dependencies and plugins"

version=$1

echo "Installing branch: $version"

if [ $version != "dev" ] && [ $version != "master" ]; then
  echo "invalid version: $version"
  exit
fi

if [ $version == "master" ]; then
  version=""
else
  version="@$version"
fi

echo "Installing EcoSIS CKAN plugin"
cd /ckan

githuburl="git+https://github.com/CSTARS/ckanext-ecosis.git$version#egg=ecosis"
pip install -e $githuburl

echo "**** Installing EcoSIS plugin pip requirements"
pip install -r /ckan/src/ecosis/requirements.txt

echo ""
echo "done."
echo "Make sure you add the EcoSIS plugin config to /etc/ckan/ecosis.ini"
echo "Sample config can be found here: https://github.com/CSTARS/ckanext-ecosis/blob/dev/ecosis_conf.ini"
