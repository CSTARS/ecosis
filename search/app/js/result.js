ESIS.result = (function() {

  var resultTemplate = null;

  var loaded = false;
  var waiting = null;

  var loadHandlers = [];
  var ignoreAttrs = ['_id', 'ecosis', 'count', 'lengths'];


  var mainFilters = ['ecosis.organization','ecosis.keywords','Family','Category'];

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


    var content = '<div class="well">'+result.ecosis.description+'</div>';



    for( var category in ESIS.schema ) {
      var items = ESIS.schema[category];

      var catHTML = '<h5>'+category+'</h5>'+
        '<div class="well well-sm" style="margin:0"><div class="row">';

      var c = 0;
      var table1 = '<div class="col-md-6"><table class="table">';
      var table2 = '<div class="col-md-6"><table class="table">';
      for( var i = 0; i < items.length; i++ ) {
        if( !result[items[i].name] ) continue;

        row = '<tr><td>'+items[i].name+'</td><td>'+wrapFilterLinks(items[i].name, result[items[i].name])+'</td></tr>'

        if( c % 2 == 0 ) table1 += row;
        else table2 += row;
        c++;
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

        metadata += "<tr><td>"+label+"</td><td><div style='max-height:100px;overflow:auto'>"+wrapFilterLinks(key, result[key])+"</div></td></tr>";
      }
    }
    metadata += '</table>';

    resultPanel.find("#result-metadata").html(metadata);


    var viewer = document.createElement('esis-spectra-viewer');
    var downloader = document.createElement('esis-data-downloader');
    viewer.package = result.ecosis.package_id;
    viewer.total = result.ecosis.spectra_count;

    resultPanel.find("#dataViewerRoot").append(viewer);

    //downloader.package_id = resp.id;
    viewer.addEventListener('filters-updated', function(e){
      downloader.filters = e.detail;
    });


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

      $('body,html').animate({scrollTop: $('#'+heading).offset().top-120}, 500);
    });
  }


  function wrapFilterLinks(key, values) {
    var links = '';
    for( var i = 0; i < values.length; i++ ) {
      links += wrapFilterLink(key, values[i]);
      if( i < values.length-1 ) links += ', ';
    }
    return links;
  }

  function wrapFilterLink(key, value, icon) {
    if( value.length > 30 ) return value;

    var q = MQE.getCurrentQuery();
    q.text = '';
    q.page = 0;
    var f = {};
    f[key] = value;
    q.filters = [f];
    return '<a href="'+MQE.queryToUrlString(q)+'" title="Filter by '+key+'='+value+'">'+
          (icon ? '<i class="fa fa-filter"></i> ' : '')+value+'</a>';
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
