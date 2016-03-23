#! /bin/bash

apt-get update
apt-get install git

version=$1

if [ $version != "dev" ] && [ $version != "master" ]; then
  echo "invalid version: $version"
  exit
fi

if [ $version != "prod" ]; then
  $version = ""
else
  $version = "@$version"
fi

echo "Installing EcoSIS CKAN plugin"
cd /ckan

githuburl="git+https://github.com/CSTARS/ckanext-ecosis.git$version#egg=ecosis"
pip install -e $githuburl
