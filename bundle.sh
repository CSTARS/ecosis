#! /bin/bash

# --debug: adds sourcemaps
# --standalone: creates exposed namespace
browserify \
    lib/prerender/ldjson --standalone ldjson \
    -o public/js/jsonld.js
