#! /bin/bash

rm -rf dist
mkdir -p dist/js

cp -r public/assets dist/
cp -r public/loader dist/

cp public/index.html dist/
cp public/ie.html dist/
cp public/manifest.json dist/
cp public/BingSiteAuth.xml dist/

webpack --config webpack-dist.config.js