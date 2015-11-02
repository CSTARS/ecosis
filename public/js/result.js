ESIS.result = (function() {

  var resultTemplate = null;

  var loaded = false;
  var waiting = null;

  var loadHandlers = [];
  var ignoreAttrs = ['_id', 'ecosis', 'count', 'lengths'];

  // filters that should not be active
  var noLink = ['Citation', 'Citation DOI', 'Funding Source Grant Number', 'Funding Source']
  var mainFilters = ['ecosis.organization','ecosis.keywords','Family','Category'];

  var MAX_FILTER_LINKS = 15;

  var topAttributes = {
      Description : 'ecosis.description',
      License : 'ecosis.license',
      Organization : 'ecosis.organization',
      Version : 'ecosis.version',
      Keywords : 'Keywords'
  }

  function init() {
    $('#result').load('/result.handlebars', function() {
      var source = $("#result-template").html();
      resultTemplate = Handlebars.compile(source);

      loaded = true;

      if( waiting != null ) updateResult(waiting);

      for( var i = 0; i < loadHandlers.length; i++ ) {
        var f = loadHandlers[i];
        f();
      }
    });

    $(window).bind('result-update-event', function(e, result){
      updateResult(result);
    });
  }

  // fires when template is loaded
  function onLoad(handler) {
    if( resultTemplate == null ) loadHandlers.push(handler);
    else handler();
  }

  function getTitle(item) {
    /*
    var group_by = '';
    if( item.ecosis.group_by && item.ecosis.group_by != '' ) {
      if( item[item.ecosis.group_by] && item[item.ecosis.group_by].length > 0 ) {
        group_by = ' ('+item.ecosis.group_by+': '+item[item.ecosis.group_by][0]+')';
      }
    }
    */

    if( item.ecosis.package_title ) return item.ecosis.package_title;
    if( item.ecosis.package_name ) return item.ecosis.package_name;
    return 'No Title';
  }

  function updateResult(result) {
    if( !loaded ) {
      waiting = result;
      return;
    }

    var resultPanel = $("#result");

    result.ecosis._title = getTitle(result);

    resultPanel.html(getResultHtml(result));


    var content = '<div class="well"><div class="row"><div class="col-sm-6">'


    for( var key in topAttributes ) {
      var val;
      if( topAttributes[key].indexOf('ecosis.') > -1 ) {
        val = result.ecosis[topAttributes[key].replace(/ecosis\./,'')];
      } else {
        val = result[topAttributes[key]];
      }
      if( !val ) continue;

      if( Array.isArray(val) ) {
        val = wrapFilterLinks(topAttributes[key], val);
      } else if( key != 'Description' && key != 'Version' ) {
        val = wrapFilterLink(topAttributes[key], val);
      }

      content += '<div class="row"><div class="col-md-4"><b>'+key+'</b></div><div class="col-md-8">'+val+'</div></div>';
    }

    // add developer link
    content += '<div class="row"><div class="col-md-4"><b>API Link</b></div><div class="col-md-8">' +
      '<a href="/package/get?package_id='+result.ecosis.package_id+'" target="_blank"><i class="fa fa-link"></i> Dataset API Link</a>'+
      '<br/><a href="http://cstars.github.io/ecosis/" target="_blank"><i class="fa fa-book"></i> EcoSIS API Documentation</a></div></div>';


    content += '<div class="row"><div class="col-md-4"><b>Spectra</b></div><div class="col-md-8">' +
        result.ecosis.spectra_count+'</div></div>';

    // set min / max wavelength
    if( result.ecosis.spectra_schema && result.ecosis.spectra_schema.data ) {
      var min = -1, max = -1, val;
      var keys = result.ecosis.spectra_schema.data;
      for( var i = 0; i < keys.length; i++ ) {
        val = parseFloat(keys[i]);
        if( isNaN(val) ) continue;

        if( min == -1 ) min = val;
        if( max == -1 ) max = val;
        if( min > val ) min = val;
        if( max < val ) max = val;
      }

      if( min != -1 && max != -1 ) {
        content += '<div class="row"><div class="col-md-4"><b>Wavelength Range</b></div><div class="col-md-8">' +
            min +' - '+ max +'</div></div>';
      }
    }

    content += '</div><div class="col-sm-6">';


    // add resources
    content += '<h5 class="resources-title"><i class="fa fa-files-o"></i> Resources</h5>'+
               '<div style="max-height: 400px; overflow:auto"><ul class="list-group">';
    if( result.ecosis.resources && result.ecosis.resources.length > 0) {
      for( var i = 0; i < result.ecosis.resources.length; i++ ) {
        var r = result.ecosis.resources[i];

        content += '<li class="list-group-item" style="padding: 10px;font-size: 16px"><a href="'+r.url+'" ><i class="fa fa-file-o"></i> '+r.name+'</a></li>';
      }
    } else {
      content += '<li class="list-group-item">No resources provided</li>';
    }

    content += '</ul></div>';
    content += '</div></div></div>';


    var hasLocation = result.ecosis.geojson || result.ecosis.spectra_bbox_geojson ? true : false;

    // add category metadata
    for( var category in ESIS.schema ) {
      if( category == 'Location' && !hasLocation ) continue;

      var items = ESIS.schema[category];

      var catHTML = '<h4 class="page-header" style="margin-left: 5px; margin-bottom: 0">'+category+'</h4>'+
        '<div class="well" style="margin:0">';


      if( category == 'Location') {
        content += catHTML+'<div id="result-map" style="height:300px"></div></div>';
        continue;
      }

      catHTML += '<div class="row">';

      var c = 0;
      var table1 = '<div class="col-sm-6">';
      var table2 = '<div class="col-sm-6">';
      for( var i = 0; i < items.length; i++ ) {
        if( !result[items[i].name] ) continue;

        row = '<div class="row"><div class="col-md-3"><b>'+items[i].name+'</b></div>'+
              '<div class="col-md-9">'+wrapFilterLinks(items[i].name, result[items[i].name])+'</div></div>';
        if( items[i].description ) row += '<div class="help-block">'+items[i].description +'</div>';

        if( c % 2 == 0 ) table1 += row;
        else table2 += row;
        c++;

        if( items[i].allowOther && result[items[i].name+' Other'] ) {
          row = '<div class="row"><div class="col-md-3"><b>'+items[i].name+' Other</b></div>'+
                '<div class="col-md-9">'+wrapFilterLinks(items[i].name+' Other', result[items[i].name+' Other'])+'</div></div>';

          if( c % 2 == 0 ) table1 += row;
          else table2 += row;
          c++;
        }

      }
      catHTML += table1+'</table></div>'+table2+'</table></div></div></div>'

      if( c > 0 ) content += catHTML;

    }

    resultPanel.find('#dataset-content').html(content);

    // if we have geojson, create map
    if( hasLocation ) {
      L.Icon.Default.imagePath = '/images';
      var map = L.map('result-map', {scrollWheelZoom : false}).setView([42.065, -111.821], 13);

      // add an OpenStreetMap tile layer
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      var l1, l2, l3
      if( result.ecosis.geojson ) {
        l1 = L.geoJson(result.ecosis.geojson).addTo(map);
      }
      if( result.ecosis.spectra_bbox_geojson ) {
        l2 = L.geoJson(result.ecosis.spectra_bbox_geojson).addTo(map);
      }

      $.get('/geo/spectra?package_id='+result.ecosis.package_id, function(resp){
        if( resp.error ) {
          if( l2 ) map.fitBounds(l2.getBounds());
          else if( l1 ) map.fitBounds(l1.getBounds());
          return;
        }
        if( resp.length == 0 ) {
          if( l2 ) map.fitBounds(l2.getBounds());
          else if( l1 ) map.fitBounds(l1.getBounds());
          return;
        }

        var l3 = L.geoJson(resp).addTo(map);
        map.fitBounds(l3.getBounds());
      });
    }

    // set handler for any ALL btns
    resultPanel.find('.all-filters-link').on('click', function(){
      ESIS.allFiltersPopup.show($(this).attr('key'), result);
    });

    var metadata = '<table class="table">';
    for( var key in result ) {
      if( ignoreAttrs.indexOf(key) == -1 && result[key] && (result[key].length / result.ecosis.spectra_count) < .05 ) {
        if( mainFilters.indexOf(key) != -1 ) continue;

        var label = ESIS.labels.filters[key] ? ESIS.labels.filters[key] : key;

        metadata += "<tr><td><b>"+label+"</b></td><td><div style='max-height:100px;overflow:auto; padding:2px'>"+wrapFilterLinks(key, result[key])+"</div></td></tr>";
      }
    }
    metadata += '</table>';

    resultPanel.find("#result-metadata").html(metadata);

    var viewer = document.createElement('esis-spectra-viewer');
    var downloader = document.createElement('esis-data-downloader');
    viewer.package = result.ecosis.package_id;
    downloader.package = result.ecosis.package_id;
    viewer.total = result.ecosis.spectra_count;

    resultPanel.find("#dataViewerRoot").append(viewer);
    resultPanel.find("#downloaderRoot").append(downloader);

    //downloader.package_id = resp.id;
    viewer.addEventListener('filter-update', function(e){
      downloader.update(e.detail);
    });

    if( viewer.update ) viewer.update(result);

    $(".result-back-btn").on('click', function(){
      $(window).trigger("back-to-search-event");
    });

    $('#additionalFilterToggle').on('click', function() {
      var i = $(this).find('i');
      var open = i[0].classList.contains('fa-arrow-down');
      if( open ) {
        i.removeClass('fa-arrow-down');
        i.addClass('fa-arrow-right');
      } else {
        i.removeClass('fa-arrow-right');
        i.addClass('fa-arrow-down');
      }
      $('#result-metadata').toggle('slow');
    });


    // set nav handler
    $('a[goto]').on('click', function(){
      var heading = $(this).attr('goto');
      if( !heading || heading == '' ) return;

      $('body,html').animate({scrollTop: $('#'+heading).offset().top-15}, 500);
    });

    console.log('result - 4');

    window.__mqe_lploaded = true;
		if( window.__mqe_lpready ) window.__mqe_lpready();
  }

  function wrapFilterLinks(key, values) {
    var links = [];
    var more = false;
    for( var i = 0; i < values.length; i++ ) {
      if( i == MAX_FILTER_LINKS ) {
        more = true;
        break;
      }
      links.push(wrapFilterLink(key, values[i], false));
    }
    return links.join(', ')+(more ? '<span> ...</span> <a key="'+key+'" class="all-filters-link"><i class="fa fa-external-link-square"></i> ALL ('+values.length+')</a>' : '');
  }

  function wrapFilterLink(key, value, icon) {
    if( key == 'Website' ) {
      if( !value.match(/^(http|https|ftp)/) ) value = 'http://'+value;
      var link = '<a href="'+value+'" target="_blank"><i class="fa fa-globe"></i> '+value+'</a>';

      return link;
    }

    if( key == 'Author Email' || key == 'Maintainer Email' ) {
      var link = '<a href="mailto:'+value+'" target="_blank"><i class="fa fa-envelope-o"></i> '+value+'</a>';
      return link;
    }

    if( noLink.indexOf(key) > -1 ) return value;
    if( value.length > 80 ) return value;

    var q = MQE.getCurrentQuery();
    q.text = '';
    q.page = 0;
    var f = {};
    f[key] = value;
    q.filters = [f];
    return '<a href="'+MQE.queryToUrlString(q)+'" title="Filter by '+key+'='+value+'" style="white-space:normal">'+
          (icon ? '<i class="fa fa-plus-circle"></i> ' : '')+value+'</a>';
  }

  function getResultHtml(result) {
    return resultTemplate(result);

  }


  return {
    init : init,
    updateResult : updateResult,
    getResultHtml : getResultHtml,
    onLoad : onLoad
  }

})();
