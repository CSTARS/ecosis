#! /bin/bash

echo "Installing EcoSIS dependencies and plugins"

echo ""
echo "Are your installing dev or prod: [dev|prod]"

read version

if [ $version != "dev" ] && [ $version != "prod" ]; then
  echo "invalid version: $version"
  exit
fi

if [ $version != "prod" ]; then
  $version = ""
else
  $version = "@$version"
fi

echo ""
echo "Are your running ubuntu or debian: [ubuntu|debian]"

read distro

echo "Updating sources"

# MongoDB apt key
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

# from: https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
# from: https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
if [ $distro == "ubuntu" ]; then
  # get the NodeJS repo code
  sudo curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

  # install mongo db
  echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

elif [ $distor == "debian" ]; then

  # get the NodeJS repo code
  sudo curl -sL https://deb.nodesource.com/setup_4.x | bash -

  # install mongo db
  echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

else
  echo "invalid distro: $distro"
  exit
fi

echo "Updating apt"
sudo apt-get update

echo "Installing MongoDB and NodeJS from apt"
sudo apt-get install -y nodejs mongodb-org

echo "Making sure MongoDB data dir exists"
if [ ! -d /data/db ]; then
  sudo mkdir -p /data/db
fi

echo "Installing EcoSIS CKAN plugin"
. /usr/lib/ckan/default/bin/activate
cd /usr/lib/ckan/default

githuburl="git+https://github.com/CSTARS/ckanext-ecosis.git$version#egg=ecosis"
pip install -e $githuburl

echo "**** Installing EcoSIS plugin pip requirements"
pip install -r /usr/lib/ckan/default/src/ecosis/requirements.txt

echo ""
echo "done."
echo "Make sure you add the EcoSIS plugin config to /etc/ckan/default/development.ini"
echo "Sample config can be found here: https://github.com/CSTARS/ckanext-ecosis/blob/dev/ecosis_conf.ini"
