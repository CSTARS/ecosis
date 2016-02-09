Handlebars.registerHelper('info', function() {
  return new Handlebars.SafeString(this.info);
});
Handlebars.registerHelper('title', function() {
  return new Handlebars.SafeString(this.title);
});
Handlebars.registerHelper('organization', function() {
  return new Handlebars.SafeString(this.organization);
});

ESIS.search = (function() {

  // handle bar template layouts
  var RESULT_TEMPLATE = [
      '<div class="panel panel-default animated fadeIn">',
        '<div class="panel-body">',
          "<div class='row'>",
            '<div class="col-md-7" style="padding-bottom:10px;">',
              '<h4><a href="#result/{{_id}}">{{title}}</a></h4>',
              '<h6>{{organization}}</h6>',
              '<div>{{description}}</div>'+
            '</div>',
            "<div class='col-md-5' style='padding-top:15px'>{{info}}</div>",
          "</div>",
        '</div>',
      "</div>"
  ].join('');
  var TITLE_TEMPLATE = "Search Results: <span style='color:#888'>{{start}} to {{end}} of {{total}}</span>";

  // template functions
  var rowTemplate;
  var titleTemplate;

  var titleAttr = 'Spectrum Number';
  var infoAttrs = ['Theme', 'Target Type', 'Common Name'];

  var openFilters = [];
  var staticFilters = {};

  function init() {

    rowTemplate = Handlebars.compile(RESULT_TEMPLATE);
    titleTemplate = Handlebars.compile(TITLE_TEMPLATE);

    $(window).bind("search-start-event", function(e, results){
      _loading(true);
    });

    $(window).bind("search-update-event", function(e, results){
      _loading(false);
      _updateResultsTitle(results);
      _updateResults(results);
      _updateFilters(results); // this should always be before adding active filters
      _updateActiveFilters(results);
      _updatePaging(results);
      _updateRestLink();
      //_updateDownloadLinks();
    });

    // set search handlers
    $("#search-btn").on('click', function(){
      _search();
    });
    $("#search-text").on('keypress', function(e){
      if( e.which == 13 ) _search();
    });
  }

  function _search() {
    var query = MQE.getCurrentQuery();
    query.page = 0;
    query.text = $("#search-text").val();
    window.location = MQE.queryToUrlString(query);
  }


  function _updateActiveFilters() {
    var panel = $("#active-filters").html("");
    var query = MQE.getCurrentQuery();

    // make sure text box is always correct
    $("#search-text").val(query.text);

    if( query.filters.length == 0 ) return;

    panel.append('<div class="help-block" style="margin-top: 0">You are currently searching for:</h6>');

    for( var i = 0; i < query.filters.length; i++ ) {
      // get query copy and splice array
      var tmpQuery = MQE.getCurrentQuery();
      tmpQuery.page = 0;

      tmpQuery.filters.splice(i,1);

      var f = "";
      var key = "";

      for( var j in query.filters[i] ) {
        key = j;


        var existsFilter = _isExistsFilter(query.filters[i][j], j) // see if it's a static filter
        if( existsFilter ){
          f = 'Exists: '+existsFilter;
        } else if( typeof query.filters[i][j] == 'object' ) {
          if( staticFilters[j] ) {
            // grab label from static filter
            f = staticFilters[j].label;
            // also, make sure to check it's check box
            $("#static-filter-"+j).prop('checked', true);
          } else {
            f = j+': '+JSON.stringify(query.filters[i][j]);
          }

        } else {
          f = query.filters[i][j];
        }
      }

      if( key == 'ecosis.geojson' ) {
        var btn = '<div class="btn-group" style="margin:0 5px 5px 0; text-transform:none"><a class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown" href="#"> Location Filter'+
                ' <span class="caret"></span></a><ul class="dropdown-menu" style="z-index:2000">' +
                '<li><a href="'+MQE.queryToUrlString(tmpQuery)+'" ><i class="icon-remove"></i> Remove</a></li>' +
                '<li><a id="geo-filter-edit"><i class="icon-edit"></i> Edit</a></li>' +
                '</ul></div>';
        btn = $(btn);
        panel.append(btn);
        btn.find("#geo-filter-edit").on('click', function(){
          ESIS.map.show();
        });

      } else {
        panel.append($('<a href="'+MQE.queryToUrlString(tmpQuery).replace(/"/g,'\\"')+'" style="margin:0 5px 5px 0;text-transform:none" class="btn btn-primary btn-sm"><i class="fa fa-times" style="color:white"></i> '+f+'</a>'))
      }

    }

  }

  function _updateFilters(results) {
    var panel = $("#filter-nav").html("");

    // add the title
    panel.append($('<li class="nav-header page-header" style="margin:0">Narrow Your Search</li>'));
    panel.append($('<li class="divider"></li>'));

    var numFilters = MQE.getCurrentQuery().filters.length;

    // add filter blocks
    var c = 0;
    for( var key in results.filters ) {
      if( results.filters[key].length == 0 ) continue;


      var label = ESIS.labels.filters[key] ? ESIS.labels.filters[key] : key;

      var title = $("<li><a id='filter-block-title-"+key.replace(/\s/g,"_")+"' class='search-block-title'>"+label+"</a></li>");

      var display = "";

      if( openFilters.indexOf(key) > -1 ) display = "style='display:block'"

      var block = $("<ul id='filter-block-"+key.replace(/\s/g,"_")+"' class='filter-block' "+display+"></ul>");

      var added = false;
      for( var i = 0; i < results.filters[key].length; i++ ) {
        var item = results.filters[key][i];
        if( _hasFilterSimple(key, item.filter) ) continue;

        var query = MQE.getCurrentQuery();
        query.page = 0;

        var filter = {};
        filter[ESIS.filters[key] ? ESIS.filters[key] : key] = item.filter;
        query.filters.push(filter);

        block.append($('<li><a href="'+MQE.queryToUrlString(query).replace(/"/g,'\\"')+'">'+item.filter+' ('+item.count+')</a></li>'));
        added = true;
      }

      if( added ) {
        title.append(block);
        panel.append(title);
        c++;
      }
    }

    // append location filter
    if( !_queryHasFilter(MQE.getCurrentQuery(), 'ecosis.geojson') ) {
      panel.append($('<li><a id="filter-block-title-geo" style="cursor:pointer;font-weight:bold">Location</a></li>'));
      $("#filter-block-title-geo").on('click', function(){
        ESIS.map.show();
      });

      $('#search-text').removeAttr('disabled').attr('placeholder','Keywords');
      $('#search-btn').removeClass('disabled');

      c++;
    } else {
      $('#search-text').attr('disabled','').attr('placeholder','Not supported with location filter');
      $('#search-btn').addClass('disabled');
    }

    panel.append($('<li><a id="filter-block-title-custom" style="cursor:pointer;font-weight:bold">Custom Filter</a></li>'));
    $("#filter-block-title-custom").on('click', function(){
      ESIS.customFiltersPopup.show();
    });
    c++;


    if( c == 0 ) {
      panel.append($("<div>No filters available for this search</div>"));
      return;
    }

    // add hide/show handlers for the blocks
    $(".search-block-title").on('click', function(e){
      var id = e.target.id.replace(/filter-block-title-/, '');
      var panel = $("#filter-block-"+id);

      if( panel.css("display") == "none" ) {
        panel.show('blind');
        openFilters.push(id);
      } else {
        panel.hide('blind');
        openFilters.splice(openFilters.indexOf(id),1);
      }
    });
  }

  function _updatePaging(results) {
    var tmpQuery = MQE.getCurrentQuery();
    var numPages = Math.ceil( parseInt(results.total) / tmpQuery.itemsPerPage );
    var cPage = Math.floor( parseInt(results.start+1) / tmpQuery.itemsPerPage );

    var buttons = [];

    // going to show 7 buttons
    var startBtn = cPage - 3;
    var endBtn = cPage + 3;

    if( endBtn > numPages ) {
      startBtn = numPages-7;
      endBtn = numPages;
    }
    if( startBtn < 0 ) {
      startBtn = 0;
      endBtn = 6;
      if( endBtn > numPages ) endBtn = numPages;
    }

    var panel = $("#search-paging-btns");
    panel.html("");

    // add back button
    if( cPage != 0 ) {
      tmpQuery.page = cPage-1;
      panel.append($('<li><a href="'+MQE.queryToUrlString(tmpQuery).replace(/"/g,'\\"')+'">&#171;</a></li>'));
    }

    for( var i = startBtn; i < endBtn; i++ ) {
      var label = i+1;
      tmpQuery.page = i;
      var btn = $('<li><a href="'+MQE.queryToUrlString(tmpQuery).replace(/"/g,'\\"')+'">'+label+'</a></li>');
      if( cPage == i ) btn.addClass('active');
      panel.append(btn);
    }

    // add next button
    if(  cPage != numPages-1 && numPages != 0 ) {
      tmpQuery.page = cPage+1;
      panel.append($('<li><a href="'+MQE.queryToUrlString(tmpQuery).replace(/"/g,'\\"')+'">&#187;</a></li>'));
    }

  }

  function _updateResultsTitle(results) {
    var end = results.end;
    if( results.total < end ) end = results.total;

    var start = parseInt(results.start)+1;
    if( end == 0 ) start = 0;


    $("#results-title").html(titleTemplate({
      start : start,
      end   : end,
      total : results.total
    }));
  }

  function _updateResults(results) {
    var panel = $("#results-panel").html("");

    if( results.items.length == 0 ) {
      panel.append("<div style='font-style:italic;color:#999;padding:15px 10px'>No results found for your current search.</div>");
      return;
    }

    //ESIS.chart.clearSearchCharts();
    for( var i = 0; i < results.items.length; i++ ) {
      var item = results.items[i];
      var info = _getInfo(item);

      panel.append(rowTemplate({
        _id     : item._id,
        title   : _getTitle(item),
        organization   : _getOrganization(item),
        description : _getDescription(item),
        info    : info
      }));
    //  ESIS.chart.addSearchChart(item, $('#'+item._id+'-chart'));

    }
    //ESIS.chart.redrawSearchCharts(true);
  }

  function _getTitle(item) {
    var count = ' <small>('+(item.ecosis.spectra_count || 0)+')</small>';

    if( item.ecosis.package_title ) return item.ecosis.package_title+count;
    if( item.ecosis.package_name ) return item.ecosis.package_name+count;
    return 'No Title'+count;
  }

  function _getDescription(item) {
    if( item.ecosis.description ) {
      if( item.ecosis.description.length > 300 ) {
        return item.ecosis.description.substr(0, 300)+'...';
      }
      return item.ecosis.description;
    }
    return 'No description provided';
  }

  function _getOrganization(item) {
    if( !item.ecosis.organization ) return '';
    if( item.ecosis.organization == '' || item.ecosis.organization == 'None' ) return '';

    var link = '<a href="'+_createFilterUrl('ecosis.organization', item.ecosis.organization)+'">';
    /*if( item.ecosis.organization_image_url ) {
      link += '<img class="img-thumbnail" src="'+ESIS.ckanHost+item.ecosis.organization_image_url+'" border=0  style="width:32px" /> ';
    }*/
    link += item.ecosis.organization+'</a><br /><br />';

    return link;
  }

  function _getInfo(item) {
    var info = "<ul>";

    for( var i = 0; i < infoAttrs.length; i++ ) {
      if( item[infoAttrs[i]] ) {
        var arr = item[infoAttrs[i]];
        var key = infoAttrs[i];
        var label = ESIS.labels.filters[key] ? ESIS.labels.filters[key] : key;

        info += "<li><b>"+label+": </b>";
        for( var j = 0; j < arr.length; j++ ) {
          if( _hasFilter(item,arr[j]) ) info += arr[j];
          else info += '<a href="'+_createFilterUrl(key, arr[j])+'">'+arr[j]+'</a>';

          if( j == 5 && j != arr.length - 1 ) {
            info += ' ...';
            break;
          }
          if( j < arr.length-1 ) info += ', ';

        }
        info += '</li>';
      }
    }



    info += "</ul>";
    return info;
  }

  function _updateRestLink() {
    var link = MQE.getRestLink();
    if( !link.match(/$http.*/) ) {
      link = window.location.protocol+'//'+window.location.host+link;
    }

    $('#current-search-rest-link').html(
      '<a href="'+link+'" target="_blank"><i class="fa fa-link"></i> Search API Link</a> | '+
      '<a href="http://cstars.github.io/ecosis/" target="_blank"><i class="fa fa-book"></i> EcoSIS API Documentation</a> | '+
      '<a href="http://tutorial.ecospectra.org" target="_blank"><i class="fa fa-question-circle"></i> EcoSIS Tutorials</a>'+
      '<br /> <span style="color:#888;font-size:11px;font-style:italic">'+ decodeURIComponent(link)+'</span>'
    );
  }

  function  _hasFilterSimple(key, value) {
    if( ESIS.filters[key] ) key = ESIS.filters[key];

    var filter = {};
    var tmpQuery = MQE.getCurrentQuery();

    for( var i = 0; i < tmpQuery.filters.length; i++ ) {
      if( tmpQuery.filters[i][key] && tmpQuery.filters[i][key] == value ) return true;
    }

    return false;
  }

  function _hasFilter(item, key) {
    var filter = {};
    var tmpQuery = MQE.getCurrentQuery();
    filter[key] = item[key];
    for( var i = 0; i < tmpQuery.filters.length; i++ ) {
      if( tmpQuery.filters[i][key] && tmpQuery.filters[i][key] == item[key] ) return true;
    }
    return false;
  }

  function _isExistsFilter(item, key) {
    if( key == '$or' ) {
      for( var i = 0; i < item.length; i++ ) {
        var f = item[i];
        if( f['value.ecosis.spectra_schema.data'] ) {
          return f['value.ecosis.spectra_schema.data'];
        } else if ( f['value.ecosis.spectra_schema.metadata'] ) {
          return f['value.ecosis.spectra_schema.metadata'];
        }
      }
    }

    return null;
  }

  function _queryHasFilter(query, key, value) {
    for( var i = 0; i < query.filters.length; i++ ) {
      if( query.filters[i][key] && value == null ) return true;
      if(  query.filters[i][key] && query.filters[i][key] == value ) return true;
    }
    return false;
  }

  function _createFilterUrl(key, value) {
    var tmpQuery = MQE.getCurrentQuery();
    var filter = {};
    filter[ESIS.filters[key] ? ESIS.filters[key] : key] = value;
    tmpQuery.page = 0;
    tmpQuery.filters.push(filter);
    return MQE.queryToUrlString(tmpQuery).replace(/"/g,'\\"');
  }


  function _loading(loading) {
    if( loading ) {
      $('#loading').show();
    } else {
      $('#loading').hide();
    }
  }


  return {
    init : init
  }
})();
