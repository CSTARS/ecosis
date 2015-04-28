ESIS.result = (function() {

  var resultTemplate = null;

  var loaded = false;
  var waiting = null;

  var loadHandlers = [];
  var ignoreAttrs = ['_id', 'ecosis', 'count', 'lengths'];

  // filters that should not be active
  var noLink = ['Citation', 'Citation DOI', 'Funding Source Grant Number', 'Funding Source']
  var mainFilters = ['ecosis.organization','ecosis.keywords','Family','Category'];

  var topAttributes = {
      Description : 'ecosis.description',
      License : 'ecosis.license',
      Organization : 'ecosis.organization',
      Version : 'ecosis.version'
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
      console.log(result);
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

      content += '<div class="row"><div class="col-md-3"><b>'+key+'</b></div><div class="col-md-9">'+val+'</div></div>';
    }

    // add developer link
    content += '<div class="row"><div class="col-md-3"><b>API Link</b></div><div class="col-md-9">' +
      '<a href="/rest/get?_id='+result.ecosis.package_id+'" target="_blank"><i class="fa fa-link"></i> Developer Rest Link</a></div></div>';

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


    // add category metadata
    for( var category in ESIS.schema ) {
      // TODO: implement this
      if( category == 'Location') continue;

      var items = ESIS.schema[category];

      var catHTML = '<h4 class="page-header" style="margin-left: 5px; margin-bottom: 0">'+category+'</h4>'+
        '<div class="well" style="margin:0"><div class="row">';

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
    viewer.update();


    $("#result-back-btn").on('click', function(){
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

    /*$('#export-go').on('click', function(){
      window.open('/rest/download?package_id='+result.ecosis.package_id+
        '&metadata='+($('#export-metadata').is(':checked') ? 'true' : 'false')
        ,'Download');
    });*/

    // set nav handler
    $('a[goto]').on('click', function(){
      var heading = $(this).attr('goto');
      if( !heading || heading == '' ) return;

      $('body,html').animate({scrollTop: $('#'+heading).offset().top-15}, 500);
    });
  }


  function wrapFilterLinks(key, values) {
    var links = '';
    for( var i = 0; i < values.length; i++ ) {
      links += wrapFilterLink(key, values[i], false);
      if( i < values.length-1 ) links += ', ';
    }
    return '<div style="max-height:200px; overflow:auto; padding: 2px">'+links+'</div>';
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

    result.isChecked = ESIS.compare.selected(result._id);

    return resultTemplate(result);

  }


  return {
    init : init,
    updateResult : updateResult,
    getResultHtml : getResultHtml,
    onLoad : onLoad
  }

})();
