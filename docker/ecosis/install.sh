#! /bin/bash

version=$1

if [[ $version != "dev" ]] && [[ $version != "master" ]]; then
  echo "invalid version: $version"
  exit
fi

if [[ $version == "master" ]]; then
  version=""
else
  version="-b $version"
fi

git clone $version https://github.com/CSTARS/ecosis.git

cd ecosis && npm install --production
