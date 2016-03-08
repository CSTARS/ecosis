ESIS.customFiltersPopup = (function() {
  var popup;

  function init() {
     popup = $('#custom-filters-popup');
     popup.modal({show: false});

     $('#set-custom-filter').on('click', setFilter)
     $('#inputCustomFilter').on('keypress', function(e){
       if( e.which == 13 ) setFilter();
     });
  }

  function show() {
    popup.modal('show');
  }

  function hide() {
    popup.modal('hide');
  }

  function setFilter() {
    var value = $('#inputCustomFilter').val();
    if( value == "" ) return;

    parts = value.split(',');
    var filters = [];
    for( var i = 0; i < parts.length; i++ ) {
      parts[i] = parts[i].trim();

      // TODO: how do we want to handle values.
      if( parts[i][0] == '^' ) {
        var dataField = {}, metadataField = {}, exists = {};
        var field = parts[i].replace(/\^/, '').trim();

        dataField['value.ecosis.spectra_metadata_schema.data'] = field;
        metadataField['value.ecosis.spectra_metadata_schema.metadata'] = field;

        exists['value.'+field] = {'$exists' : true};

        filters.push({
          '$or' : [
            dataField,
            metadataField,
            exists
          ]
        });

      } else if( parts[i].indexOf('=') > -1 ) {
        var p = parts[i].split('='), f;
        var field = p[0].trim();
        var value = p[1].trim().toLowerCase();

        var f = {};
        f[field] = value;

        filters.push(f);
      }
    }

    if( filters.length == 0 ) {
      alert('No filters detected in: "'+parts.join(', ')+'"');
      return;
    }

    var q = MQE.getCurrentQuery();
    q.page = 0;
    for( var i = 0; i < filters.length; i++ ) {
      q.filters.push(filters[i]);
    }

    $('#inputCustomFilter').val('');
    hide();
    window.location = MQE.queryToUrlString(q);
  }

  $(document).ready(init);

  return {
    hide : hide,
    show : show
  }
})()
