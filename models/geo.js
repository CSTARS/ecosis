'use strict';

var collection = global.setup.collection;

module.exports = function GeoModel() {
    return {
        name: 'geo',
        count : getCount
    };
};

// TODO: this sucks... move to package
function getCount(query, callback) {
  collection.count(query.options, callback);
}
