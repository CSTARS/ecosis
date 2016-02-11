(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LIB = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  ldjson : require('./prerender/ldjson'),
  schema : require('./schema')
};

},{"./prerender/ldjson":2,"./schema":3}],2:[function(require,module,exports){
'use strict';

module.exports = function(item, url) {
  if( url === undefined ) {
    url = 'http://ecospectra.org';
  }

  var result = {
    title : item.ecosis.package_title,
    description : item.ecosis.description,
    ldjson : null
  };

  var ldjson = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    'mainEntity':{
        '@type': 'Dataset',
        name : item.ecosis.package_title,
        datePublished : item.ecosis.created,
        description : item.ecosis.description,
        url : url+'/#result/'+item.ecosis.package_id,
        genre : 'spectroscopy',
        provider : {
          '@type' : 'Organization',
          email : 'info@ecospectra.org',
          url : 'http://ecospectra.org',
          name : 'EcoSIS',
          description : 'Ecosystem Spectral Information System'
        },
        publisher : {
          '@type' : 'Organization',
          name : item.ecosis.organization
        },
        distribution : {
          '@type': 'DataDownload',
          name : item.ecosis.package_name+'.csv',
          url : url+'/package/export?package_id='+item.ecosis.package_id+'&metadata=true',
          fileFormat : 'text/csv'
        }
      }
  };

  result.ldjson = ldjson;

  if( item.Website ) {
    ldjson.mainEntity.publisher.url = item.Website[0];
  }
  if( item.Author ) {
    ldjson.mainEntity.author = {
      '@type' : 'Person',
      name : item.Author[0]
    };
    if( item['Author Email'] ) {
      ldjson.mainEntity.author.email = item['Author Email'][0];
    }
  }
  if( item.Keywords ) {
    result.keywords = item.Keywords.join(', ');
    ldjson.mainEntity.keywords = item.Keywords.join(', ');
  }
  if( item.ecosis.organization_info ) {
    ldjson.mainEntity.publisher.image = item.ecosis.organization_info.logo;
    ldjson.mainEntity.publisher.description = item.ecosis.organization_info.description;
  }

  return result;
};

},{}],3:[function(require,module,exports){
module.exports={
  "Measurement": [
    {
      "name": "Acquisition Method",
      "level": 1,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Contact",
        "Other",
        "Pixel",
        "Proximal"
      ],
      "description": "Minimum measurement unit for your spectra (i.e. contact probe, proximal with X-degree foreoptic, pixel, other).",
      "allowOther": true
    },
    {
      "name": "Sample Platform",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Airplane",
        "Boom",
        "Satellite",
        "Tower",
        "UAV"
      ],
      "description": "Platform from which the spectral measurements were made (e.g. handheld, boom, tram, UAV).",
      "allowOther": false
    },
    {
      "name": "Measurement Venue",
      "level": 2,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Greenhouse",
        "Laboratory",
        "Other",
        "Outdoor"
      ],
      "description": "Setting in which the spectral measurements were made.",
      "allowOther": true
    },
    {
      "name": "Target Type",
      "level": 1,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Animal",
        "Bark",
        "Branch",
        "Canopy",
        "Flower",
        "Leaf",
        "Mineral",
        "NPV",
        "Other",
        "Reference",
        "Rock",
        "Soil",
        "Water"
      ],
      "description": "Describes the target that was measured.",
      "allowOther": true
    },
    {
      "name": "Measurement Quantity",
      "level": 1,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Absorptance",
        "DN",
        "Index",
        "Other",
        "Radiance",
        "Reflectance",
        "Transflectance",
        "Transmittance"
      ],
      "description": "",
      "allowOther": true
    },
    {
      "name": "Index Name",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "Measurement quantity's index name.  Please provide if Measurement Quantity = \"Index\"",
      "allowOther": false
    },
    {
      "name": "Measurement Units",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "Scale for spectral instensity (e.g. DN, radiance, irradiance, reflectance)",
      "allowOther": false
    },
    {
      "name": "Wavelength Units",
      "level": 2,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Other",
        "Unitless",
        "nm",
        "um"
      ],
      "description": "Wavelength units (e.g. nm, um, Hz)",
      "allowOther": false
    },
    {
      "name": "Target Status",
      "level": 1,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Dried",
        "Fresh",
        "Green",
        "Ground",
        "Liquid",
        "Live",
        "Other",
        "Panel",
        "Standard"
      ],
      "description": "State of the measurement target.",
      "allowOther": true
    },
    {
      "name": "Light Source",
      "level": 1,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Lamp",
        "Laser",
        "Other",
        "Sun"
      ],
      "description": "Description of the light source used for your spectral measurements",
      "allowOther": true
    },
    {
      "name": "Light Source Specifications",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Foreoptic Type",
      "level": 1,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Bare Fiber",
        "Cosine Diffuser",
        "Foreoptic",
        "Gershon Tube",
        "Integrating Sphere",
        "Leaf Clip",
        "None",
        "Other"
      ],
      "description": "Description of the foreoptic used to make your spectral measurement",
      "allowOther": true
    },
    {
      "name": "Foreoptic Field of View",
      "level": 2,
      "input": "text",
      "units": "integer degrees",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Foreoptic Specifications",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    }
  ],
  "Processing Information": [
    {
      "name": "Processing Averaged",
      "level": 2,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "No",
        "Yes"
      ],
      "description": "Is the measurement an average of other measurements?",
      "allowOther": false
    },
    {
      "name": "Processing Interpolated",
      "level": 2,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "No",
        "Yes"
      ],
      "description": "Is the measurement interpolated?",
      "allowOther": false
    },
    {
      "name": "Processing Resampled",
      "level": 2,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "No",
        "Yes"
      ],
      "description": "Is the measurement resampled?",
      "allowOther": false
    },
    {
      "name": "Processing Information Details",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "Other details about processing are provided here.",
      "allowOther": false
    }
  ],
  "Instrument": [
    {
      "name": "Instrument Manufacturer",
      "level": 1,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "Spectrometer manufacturer.",
      "allowOther": false
    },
    {
      "name": "Instrument Model",
      "level": 1,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "Spectrometer model.",
      "allowOther": false
    },
    {
      "name": "Instrument Serial Number",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    }
  ],
  "Theme": [
    {
      "name": "Theme",
      "level": 1,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Agriculture",
        "Biochemistry",
        "Ecology",
        "Forest",
        "Global Change",
        "Land Cover",
        "Other",
        "Phenology",
        "Physiology",
        "Urban",
        "Water Quality"
      ],
      "description": "Research context for the the spectral measurements.",
      "allowOther": true
    },
    {
      "name": "Keywords",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Ecosystem Type",
      "level": 2,
      "input": "controlled",
      "units": "",
      "spectraLevel": true,
      "vocabulary": [
        "Aquatic",
        "Coastal",
        "Crops",
        "Forest",
        "Grassland",
        "Wetland"
      ],
      "description": "",
      "allowOther": false
    }
  ],
  "Location": [
    {
      "name": "Latitude",
      "level": 1,
      "input": "latlng",
      "units": "decimal degree",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Longitude",
      "level": 1,
      "input": "latlng",
      "units": "decimal degree",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "geojson",
      "level": 1,
      "input": "geojson",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Location Name",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    }
  ],
  "Date": [
    {
      "name": "Sample Collection Date",
      "level": 1,
      "input": "date",
      "units": "ISO Date ",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Measurement Date",
      "level": 2,
      "input": "date",
      "units": "ISO Date ",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Phenological Status",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    }
  ],
  "Species": [
    {
      "name": "Common Name",
      "level": 1,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "Common name of the target that was measured.",
      "allowOther": false
    },
    {
      "name": "Latin Genus",
      "level": 1,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "Latin genus of the target that was measured.",
      "allowOther": false
    },
    {
      "name": "Latin Species",
      "level": 1,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "Latin species of the target that was measured.",
      "allowOther": false
    },
    {
      "name": "USDA Symbol",
      "level": 1,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "USDA code of the target that was measured.",
      "allowOther": false
    },
    {
      "name": "Vegetation Type",
      "level": 1,
      "input": "text",
      "units": "",
      "spectraLevel": true,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    }
  ],
  "Citation": [
    {
      "name": "Citation",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Citation DOI",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Website",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Author",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Author Email",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Maintainer",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Maintainer Email",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Funding Source",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    },
    {
      "name": "Funding Source Grant Number",
      "level": 2,
      "input": "text",
      "units": "",
      "spectraLevel": false,
      "vocabulary": null,
      "description": "",
      "allowOther": false
    }
  ]
}
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvcHJlcmVuZGVyL2xkanNvbi5qcyIsImxpYi9zY2hlbWEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxkanNvbiA6IHJlcXVpcmUoJy4vcHJlcmVuZGVyL2xkanNvbicpLFxuICBzY2hlbWEgOiByZXF1aXJlKCcuL3NjaGVtYScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZW0sIHVybCkge1xuICBpZiggdXJsID09PSB1bmRlZmluZWQgKSB7XG4gICAgdXJsID0gJ2h0dHA6Ly9lY29zcGVjdHJhLm9yZyc7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0ge1xuICAgIHRpdGxlIDogaXRlbS5lY29zaXMucGFja2FnZV90aXRsZSxcbiAgICBkZXNjcmlwdGlvbiA6IGl0ZW0uZWNvc2lzLmRlc2NyaXB0aW9uLFxuICAgIGxkanNvbiA6IG51bGxcbiAgfTtcblxuICB2YXIgbGRqc29uID0ge1xuICAgICdAY29udGV4dCc6ICdodHRwOi8vc2NoZW1hLm9yZycsXG4gICAgJ0B0eXBlJzogJ1dlYlBhZ2UnLFxuICAgICdtYWluRW50aXR5Jzp7XG4gICAgICAgICdAdHlwZSc6ICdEYXRhc2V0JyxcbiAgICAgICAgbmFtZSA6IGl0ZW0uZWNvc2lzLnBhY2thZ2VfdGl0bGUsXG4gICAgICAgIGRhdGVQdWJsaXNoZWQgOiBpdGVtLmVjb3Npcy5jcmVhdGVkLFxuICAgICAgICBkZXNjcmlwdGlvbiA6IGl0ZW0uZWNvc2lzLmRlc2NyaXB0aW9uLFxuICAgICAgICB1cmwgOiB1cmwrJy8jcmVzdWx0LycraXRlbS5lY29zaXMucGFja2FnZV9pZCxcbiAgICAgICAgZ2VucmUgOiAnc3BlY3Ryb3Njb3B5JyxcbiAgICAgICAgcHJvdmlkZXIgOiB7XG4gICAgICAgICAgJ0B0eXBlJyA6ICdPcmdhbml6YXRpb24nLFxuICAgICAgICAgIGVtYWlsIDogJ2luZm9AZWNvc3BlY3RyYS5vcmcnLFxuICAgICAgICAgIHVybCA6ICdodHRwOi8vZWNvc3BlY3RyYS5vcmcnLFxuICAgICAgICAgIG5hbWUgOiAnRWNvU0lTJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbiA6ICdFY29zeXN0ZW0gU3BlY3RyYWwgSW5mb3JtYXRpb24gU3lzdGVtJ1xuICAgICAgICB9LFxuICAgICAgICBwdWJsaXNoZXIgOiB7XG4gICAgICAgICAgJ0B0eXBlJyA6ICdPcmdhbml6YXRpb24nLFxuICAgICAgICAgIG5hbWUgOiBpdGVtLmVjb3Npcy5vcmdhbml6YXRpb25cbiAgICAgICAgfSxcbiAgICAgICAgZGlzdHJpYnV0aW9uIDoge1xuICAgICAgICAgICdAdHlwZSc6ICdEYXRhRG93bmxvYWQnLFxuICAgICAgICAgIG5hbWUgOiBpdGVtLmVjb3Npcy5wYWNrYWdlX25hbWUrJy5jc3YnLFxuICAgICAgICAgIHVybCA6IHVybCsnL3BhY2thZ2UvZXhwb3J0P3BhY2thZ2VfaWQ9JytpdGVtLmVjb3Npcy5wYWNrYWdlX2lkKycmbWV0YWRhdGE9dHJ1ZScsXG4gICAgICAgICAgZmlsZUZvcm1hdCA6ICd0ZXh0L2NzdidcbiAgICAgICAgfVxuICAgICAgfVxuICB9O1xuXG4gIHJlc3VsdC5sZGpzb24gPSBsZGpzb247XG5cbiAgaWYoIGl0ZW0uV2Vic2l0ZSApIHtcbiAgICBsZGpzb24ubWFpbkVudGl0eS5wdWJsaXNoZXIudXJsID0gaXRlbS5XZWJzaXRlWzBdO1xuICB9XG4gIGlmKCBpdGVtLkF1dGhvciApIHtcbiAgICBsZGpzb24ubWFpbkVudGl0eS5hdXRob3IgPSB7XG4gICAgICAnQHR5cGUnIDogJ1BlcnNvbicsXG4gICAgICBuYW1lIDogaXRlbS5BdXRob3JbMF1cbiAgICB9O1xuICAgIGlmKCBpdGVtWydBdXRob3IgRW1haWwnXSApIHtcbiAgICAgIGxkanNvbi5tYWluRW50aXR5LmF1dGhvci5lbWFpbCA9IGl0ZW1bJ0F1dGhvciBFbWFpbCddWzBdO1xuICAgIH1cbiAgfVxuICBpZiggaXRlbS5LZXl3b3JkcyApIHtcbiAgICByZXN1bHQua2V5d29yZHMgPSBpdGVtLktleXdvcmRzLmpvaW4oJywgJyk7XG4gICAgbGRqc29uLm1haW5FbnRpdHkua2V5d29yZHMgPSBpdGVtLktleXdvcmRzLmpvaW4oJywgJyk7XG4gIH1cbiAgaWYoIGl0ZW0uZWNvc2lzLm9yZ2FuaXphdGlvbl9pbmZvICkge1xuICAgIGxkanNvbi5tYWluRW50aXR5LnB1Ymxpc2hlci5pbWFnZSA9IGl0ZW0uZWNvc2lzLm9yZ2FuaXphdGlvbl9pbmZvLmxvZ287XG4gICAgbGRqc29uLm1haW5FbnRpdHkucHVibGlzaGVyLmRlc2NyaXB0aW9uID0gaXRlbS5lY29zaXMub3JnYW5pemF0aW9uX2luZm8uZGVzY3JpcHRpb247XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJNZWFzdXJlbWVudFwiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiQWNxdWlzaXRpb24gTWV0aG9kXCIsXG4gICAgICBcImxldmVsXCI6IDEsXG4gICAgICBcImlucHV0XCI6IFwiY29udHJvbGxlZFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBbXG4gICAgICAgIFwiQ29udGFjdFwiLFxuICAgICAgICBcIk90aGVyXCIsXG4gICAgICAgIFwiUGl4ZWxcIixcbiAgICAgICAgXCJQcm94aW1hbFwiXG4gICAgICBdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1pbmltdW0gbWVhc3VyZW1lbnQgdW5pdCBmb3IgeW91ciBzcGVjdHJhIChpLmUuIGNvbnRhY3QgcHJvYmUsIHByb3hpbWFsIHdpdGggWC1kZWdyZWUgZm9yZW9wdGljLCBwaXhlbCwgb3RoZXIpLlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNhbXBsZSBQbGF0Zm9ybVwiLFxuICAgICAgXCJsZXZlbFwiOiAyLFxuICAgICAgXCJpbnB1dFwiOiBcInRleHRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IHRydWUsXG4gICAgICBcInZvY2FidWxhcnlcIjogW1xuICAgICAgICBcIkFpcnBsYW5lXCIsXG4gICAgICAgIFwiQm9vbVwiLFxuICAgICAgICBcIlNhdGVsbGl0ZVwiLFxuICAgICAgICBcIlRvd2VyXCIsXG4gICAgICAgIFwiVUFWXCJcbiAgICAgIF0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUGxhdGZvcm0gZnJvbSB3aGljaCB0aGUgc3BlY3RyYWwgbWVhc3VyZW1lbnRzIHdlcmUgbWFkZSAoZS5nLiBoYW5kaGVsZCwgYm9vbSwgdHJhbSwgVUFWKS5cIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTWVhc3VyZW1lbnQgVmVudWVcIixcbiAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgIFwiaW5wdXRcIjogXCJjb250cm9sbGVkXCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiB0cnVlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IFtcbiAgICAgICAgXCJHcmVlbmhvdXNlXCIsXG4gICAgICAgIFwiTGFib3JhdG9yeVwiLFxuICAgICAgICBcIk90aGVyXCIsXG4gICAgICAgIFwiT3V0ZG9vclwiXG4gICAgICBdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHRpbmcgaW4gd2hpY2ggdGhlIHNwZWN0cmFsIG1lYXN1cmVtZW50cyB3ZXJlIG1hZGUuXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVGFyZ2V0IFR5cGVcIixcbiAgICAgIFwibGV2ZWxcIjogMSxcbiAgICAgIFwiaW5wdXRcIjogXCJjb250cm9sbGVkXCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiB0cnVlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IFtcbiAgICAgICAgXCJBbmltYWxcIixcbiAgICAgICAgXCJCYXJrXCIsXG4gICAgICAgIFwiQnJhbmNoXCIsXG4gICAgICAgIFwiQ2Fub3B5XCIsXG4gICAgICAgIFwiRmxvd2VyXCIsXG4gICAgICAgIFwiTGVhZlwiLFxuICAgICAgICBcIk1pbmVyYWxcIixcbiAgICAgICAgXCJOUFZcIixcbiAgICAgICAgXCJPdGhlclwiLFxuICAgICAgICBcIlJlZmVyZW5jZVwiLFxuICAgICAgICBcIlJvY2tcIixcbiAgICAgICAgXCJTb2lsXCIsXG4gICAgICAgIFwiV2F0ZXJcIlxuICAgICAgXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmliZXMgdGhlIHRhcmdldCB0aGF0IHdhcyBtZWFzdXJlZC5cIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJNZWFzdXJlbWVudCBRdWFudGl0eVwiLFxuICAgICAgXCJsZXZlbFwiOiAxLFxuICAgICAgXCJpbnB1dFwiOiBcImNvbnRyb2xsZWRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IHRydWUsXG4gICAgICBcInZvY2FidWxhcnlcIjogW1xuICAgICAgICBcIkFic29ycHRhbmNlXCIsXG4gICAgICAgIFwiRE5cIixcbiAgICAgICAgXCJJbmRleFwiLFxuICAgICAgICBcIk90aGVyXCIsXG4gICAgICAgIFwiUmFkaWFuY2VcIixcbiAgICAgICAgXCJSZWZsZWN0YW5jZVwiLFxuICAgICAgICBcIlRyYW5zZmxlY3RhbmNlXCIsXG4gICAgICAgIFwiVHJhbnNtaXR0YW5jZVwiXG4gICAgICBdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkluZGV4IE5hbWVcIixcbiAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgIFwiaW5wdXRcIjogXCJ0ZXh0XCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiB0cnVlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IG51bGwsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWVhc3VyZW1lbnQgcXVhbnRpdHkncyBpbmRleCBuYW1lLiAgUGxlYXNlIHByb3ZpZGUgaWYgTWVhc3VyZW1lbnQgUXVhbnRpdHkgPSBcXFwiSW5kZXhcXFwiXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIk1lYXN1cmVtZW50IFVuaXRzXCIsXG4gICAgICBcImxldmVsXCI6IDIsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNjYWxlIGZvciBzcGVjdHJhbCBpbnN0ZW5zaXR5IChlLmcuIEROLCByYWRpYW5jZSwgaXJyYWRpYW5jZSwgcmVmbGVjdGFuY2UpXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIldhdmVsZW5ndGggVW5pdHNcIixcbiAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgIFwiaW5wdXRcIjogXCJjb250cm9sbGVkXCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiB0cnVlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IFtcbiAgICAgICAgXCJPdGhlclwiLFxuICAgICAgICBcIlVuaXRsZXNzXCIsXG4gICAgICAgIFwibm1cIixcbiAgICAgICAgXCJ1bVwiXG4gICAgICBdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIldhdmVsZW5ndGggdW5pdHMgKGUuZy4gbm0sIHVtLCBIeilcIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVGFyZ2V0IFN0YXR1c1wiLFxuICAgICAgXCJsZXZlbFwiOiAxLFxuICAgICAgXCJpbnB1dFwiOiBcImNvbnRyb2xsZWRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IHRydWUsXG4gICAgICBcInZvY2FidWxhcnlcIjogW1xuICAgICAgICBcIkRyaWVkXCIsXG4gICAgICAgIFwiRnJlc2hcIixcbiAgICAgICAgXCJHcmVlblwiLFxuICAgICAgICBcIkdyb3VuZFwiLFxuICAgICAgICBcIkxpcXVpZFwiLFxuICAgICAgICBcIkxpdmVcIixcbiAgICAgICAgXCJPdGhlclwiLFxuICAgICAgICBcIlBhbmVsXCIsXG4gICAgICAgIFwiU3RhbmRhcmRcIlxuICAgICAgXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTdGF0ZSBvZiB0aGUgbWVhc3VyZW1lbnQgdGFyZ2V0LlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxpZ2h0IFNvdXJjZVwiLFxuICAgICAgXCJsZXZlbFwiOiAxLFxuICAgICAgXCJpbnB1dFwiOiBcImNvbnRyb2xsZWRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IHRydWUsXG4gICAgICBcInZvY2FidWxhcnlcIjogW1xuICAgICAgICBcIkxhbXBcIixcbiAgICAgICAgXCJMYXNlclwiLFxuICAgICAgICBcIk90aGVyXCIsXG4gICAgICAgIFwiU3VuXCJcbiAgICAgIF0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb24gb2YgdGhlIGxpZ2h0IHNvdXJjZSB1c2VkIGZvciB5b3VyIHNwZWN0cmFsIG1lYXN1cmVtZW50c1wiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxpZ2h0IFNvdXJjZSBTcGVjaWZpY2F0aW9uc1wiLFxuICAgICAgXCJsZXZlbFwiOiAyLFxuICAgICAgXCJpbnB1dFwiOiBcInRleHRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IHRydWUsXG4gICAgICBcInZvY2FidWxhcnlcIjogbnVsbCxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRm9yZW9wdGljIFR5cGVcIixcbiAgICAgIFwibGV2ZWxcIjogMSxcbiAgICAgIFwiaW5wdXRcIjogXCJjb250cm9sbGVkXCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiB0cnVlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IFtcbiAgICAgICAgXCJCYXJlIEZpYmVyXCIsXG4gICAgICAgIFwiQ29zaW5lIERpZmZ1c2VyXCIsXG4gICAgICAgIFwiRm9yZW9wdGljXCIsXG4gICAgICAgIFwiR2Vyc2hvbiBUdWJlXCIsXG4gICAgICAgIFwiSW50ZWdyYXRpbmcgU3BoZXJlXCIsXG4gICAgICAgIFwiTGVhZiBDbGlwXCIsXG4gICAgICAgIFwiTm9uZVwiLFxuICAgICAgICBcIk90aGVyXCJcbiAgICAgIF0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb24gb2YgdGhlIGZvcmVvcHRpYyB1c2VkIHRvIG1ha2UgeW91ciBzcGVjdHJhbCBtZWFzdXJlbWVudFwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkZvcmVvcHRpYyBGaWVsZCBvZiBWaWV3XCIsXG4gICAgICBcImxldmVsXCI6IDIsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcImludGVnZXIgZGVncmVlc1wiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJGb3Jlb3B0aWMgU3BlY2lmaWNhdGlvbnNcIixcbiAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgIFwiaW5wdXRcIjogXCJ0ZXh0XCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiB0cnVlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IG51bGwsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9XG4gIF0sXG4gIFwiUHJvY2Vzc2luZyBJbmZvcm1hdGlvblwiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUHJvY2Vzc2luZyBBdmVyYWdlZFwiLFxuICAgICAgXCJsZXZlbFwiOiAyLFxuICAgICAgXCJpbnB1dFwiOiBcImNvbnRyb2xsZWRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IHRydWUsXG4gICAgICBcInZvY2FidWxhcnlcIjogW1xuICAgICAgICBcIk5vXCIsXG4gICAgICAgIFwiWWVzXCJcbiAgICAgIF0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSXMgdGhlIG1lYXN1cmVtZW50IGFuIGF2ZXJhZ2Ugb2Ygb3RoZXIgbWVhc3VyZW1lbnRzP1wiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQcm9jZXNzaW5nIEludGVycG9sYXRlZFwiLFxuICAgICAgXCJsZXZlbFwiOiAyLFxuICAgICAgXCJpbnB1dFwiOiBcImNvbnRyb2xsZWRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IHRydWUsXG4gICAgICBcInZvY2FidWxhcnlcIjogW1xuICAgICAgICBcIk5vXCIsXG4gICAgICAgIFwiWWVzXCJcbiAgICAgIF0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSXMgdGhlIG1lYXN1cmVtZW50IGludGVycG9sYXRlZD9cIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiUHJvY2Vzc2luZyBSZXNhbXBsZWRcIixcbiAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgIFwiaW5wdXRcIjogXCJjb250cm9sbGVkXCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiB0cnVlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IFtcbiAgICAgICAgXCJOb1wiLFxuICAgICAgICBcIlllc1wiXG4gICAgICBdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklzIHRoZSBtZWFzdXJlbWVudCByZXNhbXBsZWQ/XCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlByb2Nlc3NpbmcgSW5mb3JtYXRpb24gRGV0YWlsc1wiLFxuICAgICAgXCJsZXZlbFwiOiAyLFxuICAgICAgXCJpbnB1dFwiOiBcInRleHRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IGZhbHNlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IG51bGwsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT3RoZXIgZGV0YWlscyBhYm91dCBwcm9jZXNzaW5nIGFyZSBwcm92aWRlZCBoZXJlLlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfVxuICBdLFxuICBcIkluc3RydW1lbnRcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkluc3RydW1lbnQgTWFudWZhY3R1cmVyXCIsXG4gICAgICBcImxldmVsXCI6IDEsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWN0cm9tZXRlciBtYW51ZmFjdHVyZXIuXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkluc3RydW1lbnQgTW9kZWxcIixcbiAgICAgIFwibGV2ZWxcIjogMSxcbiAgICAgIFwiaW5wdXRcIjogXCJ0ZXh0XCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiB0cnVlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IG51bGwsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY3Ryb21ldGVyIG1vZGVsLlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJbnN0cnVtZW50IFNlcmlhbCBOdW1iZXJcIixcbiAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgIFwiaW5wdXRcIjogXCJ0ZXh0XCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiB0cnVlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IG51bGwsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9XG4gIF0sXG4gIFwiVGhlbWVcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlRoZW1lXCIsXG4gICAgICBcImxldmVsXCI6IDEsXG4gICAgICBcImlucHV0XCI6IFwiY29udHJvbGxlZFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBbXG4gICAgICAgIFwiQWdyaWN1bHR1cmVcIixcbiAgICAgICAgXCJCaW9jaGVtaXN0cnlcIixcbiAgICAgICAgXCJFY29sb2d5XCIsXG4gICAgICAgIFwiRm9yZXN0XCIsXG4gICAgICAgIFwiR2xvYmFsIENoYW5nZVwiLFxuICAgICAgICBcIkxhbmQgQ292ZXJcIixcbiAgICAgICAgXCJPdGhlclwiLFxuICAgICAgICBcIlBoZW5vbG9neVwiLFxuICAgICAgICBcIlBoeXNpb2xvZ3lcIixcbiAgICAgICAgXCJVcmJhblwiLFxuICAgICAgICBcIldhdGVyIFF1YWxpdHlcIlxuICAgICAgXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSZXNlYXJjaCBjb250ZXh0IGZvciB0aGUgdGhlIHNwZWN0cmFsIG1lYXN1cmVtZW50cy5cIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJLZXl3b3Jkc1wiLFxuICAgICAgXCJsZXZlbFwiOiAyLFxuICAgICAgXCJpbnB1dFwiOiBcInRleHRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IGZhbHNlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IG51bGwsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkVjb3N5c3RlbSBUeXBlXCIsXG4gICAgICBcImxldmVsXCI6IDIsXG4gICAgICBcImlucHV0XCI6IFwiY29udHJvbGxlZFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBbXG4gICAgICAgIFwiQXF1YXRpY1wiLFxuICAgICAgICBcIkNvYXN0YWxcIixcbiAgICAgICAgXCJDcm9wc1wiLFxuICAgICAgICBcIkZvcmVzdFwiLFxuICAgICAgICBcIkdyYXNzbGFuZFwiLFxuICAgICAgICBcIldldGxhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiBmYWxzZVxuICAgIH1cbiAgXSxcbiAgXCJMb2NhdGlvblwiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTGF0aXR1ZGVcIixcbiAgICAgIFwibGV2ZWxcIjogMSxcbiAgICAgIFwiaW5wdXRcIjogXCJsYXRsbmdcIixcbiAgICAgIFwidW5pdHNcIjogXCJkZWNpbWFsIGRlZ3JlZVwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMb25naXR1ZGVcIixcbiAgICAgIFwibGV2ZWxcIjogMSxcbiAgICAgIFwiaW5wdXRcIjogXCJsYXRsbmdcIixcbiAgICAgIFwidW5pdHNcIjogXCJkZWNpbWFsIGRlZ3JlZVwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJnZW9qc29uXCIsXG4gICAgICBcImxldmVsXCI6IDEsXG4gICAgICBcImlucHV0XCI6IFwiZ2VvanNvblwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMb2NhdGlvbiBOYW1lXCIsXG4gICAgICBcImxldmVsXCI6IDIsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogZmFsc2UsXG4gICAgICBcInZvY2FidWxhcnlcIjogbnVsbCxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiBmYWxzZVxuICAgIH1cbiAgXSxcbiAgXCJEYXRlXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW1wbGUgQ29sbGVjdGlvbiBEYXRlXCIsXG4gICAgICBcImxldmVsXCI6IDEsXG4gICAgICBcImlucHV0XCI6IFwiZGF0ZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcIklTTyBEYXRlIFwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJNZWFzdXJlbWVudCBEYXRlXCIsXG4gICAgICBcImxldmVsXCI6IDIsXG4gICAgICBcImlucHV0XCI6IFwiZGF0ZVwiLFxuICAgICAgXCJ1bml0c1wiOiBcIklTTyBEYXRlIFwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJQaGVub2xvZ2ljYWwgU3RhdHVzXCIsXG4gICAgICBcImxldmVsXCI6IDIsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfVxuICBdLFxuICBcIlNwZWNpZXNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNvbW1vbiBOYW1lXCIsXG4gICAgICBcImxldmVsXCI6IDEsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbW1vbiBuYW1lIG9mIHRoZSB0YXJnZXQgdGhhdCB3YXMgbWVhc3VyZWQuXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxhdGluIEdlbnVzXCIsXG4gICAgICBcImxldmVsXCI6IDEsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxhdGluIGdlbnVzIG9mIHRoZSB0YXJnZXQgdGhhdCB3YXMgbWVhc3VyZWQuXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkxhdGluIFNwZWNpZXNcIixcbiAgICAgIFwibGV2ZWxcIjogMSxcbiAgICAgIFwiaW5wdXRcIjogXCJ0ZXh0XCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiB0cnVlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IG51bGwsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGF0aW4gc3BlY2llcyBvZiB0aGUgdGFyZ2V0IHRoYXQgd2FzIG1lYXN1cmVkLlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJVU0RBIFN5bWJvbFwiLFxuICAgICAgXCJsZXZlbFwiOiAxLFxuICAgICAgXCJpbnB1dFwiOiBcInRleHRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IHRydWUsXG4gICAgICBcInZvY2FidWxhcnlcIjogbnVsbCxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJVU0RBIGNvZGUgb2YgdGhlIHRhcmdldCB0aGF0IHdhcyBtZWFzdXJlZC5cIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiVmVnZXRhdGlvbiBUeXBlXCIsXG4gICAgICBcImxldmVsXCI6IDEsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogdHJ1ZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfVxuICBdLFxuICBcIkNpdGF0aW9uXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJDaXRhdGlvblwiLFxuICAgICAgXCJsZXZlbFwiOiAyLFxuICAgICAgXCJpbnB1dFwiOiBcInRleHRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IGZhbHNlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IG51bGwsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkNpdGF0aW9uIERPSVwiLFxuICAgICAgXCJsZXZlbFwiOiAyLFxuICAgICAgXCJpbnB1dFwiOiBcInRleHRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IGZhbHNlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IG51bGwsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIldlYnNpdGVcIixcbiAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgIFwiaW5wdXRcIjogXCJ0ZXh0XCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiBmYWxzZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBdXRob3JcIixcbiAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgIFwiaW5wdXRcIjogXCJ0ZXh0XCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiBmYWxzZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBdXRob3IgRW1haWxcIixcbiAgICAgIFwibGV2ZWxcIjogMixcbiAgICAgIFwiaW5wdXRcIjogXCJ0ZXh0XCIsXG4gICAgICBcInVuaXRzXCI6IFwiXCIsXG4gICAgICBcInNwZWN0cmFMZXZlbFwiOiBmYWxzZSxcbiAgICAgIFwidm9jYWJ1bGFyeVwiOiBudWxsLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgXCJhbGxvd090aGVyXCI6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJNYWludGFpbmVyXCIsXG4gICAgICBcImxldmVsXCI6IDIsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogZmFsc2UsXG4gICAgICBcInZvY2FidWxhcnlcIjogbnVsbCxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTWFpbnRhaW5lciBFbWFpbFwiLFxuICAgICAgXCJsZXZlbFwiOiAyLFxuICAgICAgXCJpbnB1dFwiOiBcInRleHRcIixcbiAgICAgIFwidW5pdHNcIjogXCJcIixcbiAgICAgIFwic3BlY3RyYUxldmVsXCI6IGZhbHNlLFxuICAgICAgXCJ2b2NhYnVsYXJ5XCI6IG51bGwsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICBcImFsbG93T3RoZXJcIjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkZ1bmRpbmcgU291cmNlXCIsXG4gICAgICBcImxldmVsXCI6IDIsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogZmFsc2UsXG4gICAgICBcInZvY2FidWxhcnlcIjogbnVsbCxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiRnVuZGluZyBTb3VyY2UgR3JhbnQgTnVtYmVyXCIsXG4gICAgICBcImxldmVsXCI6IDIsXG4gICAgICBcImlucHV0XCI6IFwidGV4dFwiLFxuICAgICAgXCJ1bml0c1wiOiBcIlwiLFxuICAgICAgXCJzcGVjdHJhTGV2ZWxcIjogZmFsc2UsXG4gICAgICBcInZvY2FidWxhcnlcIjogbnVsbCxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgIFwiYWxsb3dPdGhlclwiOiBmYWxzZVxuICAgIH1cbiAgXVxufSJdfQ==
