ESIS.group = (function() {

	var total = {};

	var cIndex = -1;
	var order = [];
	var cache = {};
	var data, options;

	// controlls
	var previous;
	var next;
	var selector;
	var loading;
	var chartEle, chart;
	var max = 0;

	function init() {
		previous = $('#group-prev').on('click', function(){
			var i = cIndex - 1;
			if( i < 0 ) i = order.length-1;
			_set(i);
		});

		next = $('#group-next').on('click', function(){
			var i = cIndex + 1;
			if( i >= order.length ) i = 0;
			_set(i);
		});
		
		loading = $('#group-loading');
		chartEle = $('#group-chart');

		selector = $('#group-select').on('change', function(){
			_set(parseInt(selector.val()));
		});

		$(window).on('resize', function(){
			if( window.location.hash.match(/#group.*/) ) _redraw();
		});
	}

	function show() {
		var parts = window.location.hash.split('/');

		var filters = JSON.parse(decodeURIComponent(parts[1]));
		var title = '';
		for( var i = 0; i < filters.length; i++ ) {
			for( var key in filters[i] ) title += filters[i][key]+', ';
		}
		$('#group-header').html('<b>Inspecting:<b> <span style="color:#888">'+title.replace(/,\s$/, '')+'</span>');

		var back = CERES.mqe.queryToUrlString(CERES.mqe.getCurrentQuery());
		$('#group-back-search').attr('href', back);

		$('#group-back-spectra').attr('href','#result/'+parts[3]);

		max = 0;

		$.get('/rest/group/getInfo?filters='+parts[1]+'&sort='+parts[2], function(resp) {
			if( resp.error ) return alert('Failed to fetch group info :(');

			var sort = decodeURIComponent(parts[2]).split('.'), val;
			order = _numSort(resp, sort[1], sort[0] != 'metadata');

			
			selector.html('');

			for( var i = 0; i < order.length; i++ ) {
				var item = order[i];

				if( sort[0] == 'metadata' ) val = item.metadata[sort[1]];
				else val = item[sort[1]];

				selector.append('<option value="'+i+'">'+sort[1]+': '+val+'</option>');
			}

			_set(0, true);
		});
	}

	function _set(index, redraw) {
		if( cIndex == index ) return;
		cIndex = index;
		selector.val(cIndex+'');

		var id = order[cIndex]._id;
		$('#group-link').html('<a href="#result/'+id+'">Spectra Landing Page</a>');

		
		if( cache[id] ) {
			_show(cache[id], redraw);
		} else {
			loading.show();
			$.get('/rest/get?_id='+id, function(resp){
				loading.hide();
				cache[id] = resp;
				_show(resp, redraw);
			});
		}
	}

	function _show(item, redraw) {
		data = new google.visualization.DataTable();
        data.addColumn('number', item["X Units"]);
        data.addColumn('number', item["Y Units"]);
        
        var arr = [];
        for( var i = 0; i < item.spectra.length; i++ ) {
        	var x = parseFloat(item.spectra[i][0])*1;
        	var y = parseFloat(item.spectra[i][1])*1;
        	if( x || y ) {
        		arr.push([x, y]);
        		if( y > max ) max = y+.1;
        	}
        }
        data.addRows(arr);
        
        options = {
        	title : item.Name,
        	vAxis: {title: item["Y Units"]},
	  		hAxis: {title: item["X Units"]},
	  		legend : {position:"none"},
	  		animation:{
		        duration: 1000,
		        easing: 'out',
		    },
		    vAxis: { 
			    viewWindowMode:'explicit',
			    viewWindow: {
			        max: max,
			    }
			}
        }

		if( redraw ) _redraw();
		else chart.draw(data, options);
	}

	function _redraw() {
		chartEle.html('');

        var h = chartEle.width() / 2;
        if( h < 200 ) h = 200;
        chartEle.height(h);
            
        chart = new google.visualization.LineChart(chartEle[0]);
        chart.draw(data, options);
	}

	function _numSort(list, sort, isPrimary ) {
		if( list.length == 0 ) return list;

		if( isPrimary ) {
			if( isNaN(parseFloat(list[0][sort])) ) return list;
		} else {
			if( isNaN(parseFloat(list[0].metadata[sort])) ) return list;
		}
		
		for( var i = 0; i < list.length; i++ ) {
			if( isPrimary ) {
				val1 = parseFloat(list[i][sort]);
				if( !isNaN(val1) ) list[i]._sort = val1;
				else list[i]._sort = -1;
			} else {
				val1 = parseFloat(list[i].metadata[sort]);
				if( !isNaN(val1) ) list[i]._sort = val1;
				else list[i]._sort = -1;
			}
		}
		
		list.sort(function(a, b){
			if( a._sort < b._sort ) return -1;
			else if( a._sort > b._sort ) return 1;
			return 0;
		});
		return list;
	} 

	return {
		show : show,
		init : init
	}

})();