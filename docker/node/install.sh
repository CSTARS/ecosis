#! /bin/bash

apt-get update
apt-get install -y git

apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
