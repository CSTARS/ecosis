ESIS.allFiltersPopup = (function() {


  var popup;

  function init() {
     popup = $('#all-filters-popup');
     popup.modal({show: false});
  }


  function show(key, result) {
    var results = result[key];
    results.sort();

    var html = '';
    for( var i = 0; i < results.length; i++ ) {
      html += '<div>'+wrap(key, results[i], true)+'</div>';
    }


    popup.find('.modal-title').text(key);
    popup.find('.modal-body').html(html);

    popup.find('a').on('click', hide);

    popup.modal('show');
  }

  function hide() {
    popup.modal('hide');
  }

  function wrap(key, value, icon) {
    var q = MQE.getCurrentQuery();
    q.text = '';
    q.page = 0;

    var f = {};
    f[key] = value;
    q.filters = [f];

    return '<a href="'+MQE.queryToUrlString(q)+'" title="Filter by '+key+'='+value+'" style="white-space:normal">'+
          (icon ? '<i class="fa fa-plus-circle"></i> ' : '')+value+'</a>';
  }

  $(document).ready(init);

  return {
    show : show,
    hide : hide
  }

})();
