function initchart() {
	ESIS.chart.init();
}

ESIS.chart = (function(){
	
	var pendingChart = null;
	var cPanel = null;
	var chartsReady = false;
	var data = null;
	var options = null;

    var chart = null;
	
	function init() {
		chartsReady = true;

		if( pendingChart != null ) {
			if( pendingChart instanceof Array ) {
				drawCompare(pendingChart);
			} else {
				draw(pendingChart);
			}
			
		}
		
		$(window).resize(function(){
			_redraw();
		});
	}

	function drawCompare(items, panel) {
		if( panel ) cPanel = panel
		
		// TODO
		if( !chartsReady ) {
			pendingChart = items;
			return;
		}
		cPanel.html("");
		
		data = new google.visualization.DataTable();

        data.addColumn('number', items[0]["X Units"]);

        var hash = {};
        var hashArray = [];
        for( var i = 0; i < items.length; i++ ) {
        	hashArray.push({});
        	data.addColumn('number', items[i].Name);

        	for( var j = 0; j < items[i].spectra.length; j++ ) {
        		var x = parseFloat(items[i].spectra[j][0])*1;
        		var y = parseFloat(items[i].spectra[j][1])*1;
        	//for( var j = 0; j < items[i].data.spectra[0].length; j++ ) {
        	//	var x = items[i].data.spectra[0][j]*1;
        	//	var y = items[i].data.spectra[1][j]*1;
        		if( !hash[x] ) hash[x] = [x];
        		hashArray[i][x] = [y];
        	}
        }


        for( var i = 0; i < items.length; i++ ) {
        	for( var key in hash ) {
        		if( hashArray[i][key] ) {
        			hash[key].push(hashArray[i][key]*1)
        		} else {
        			hash[key].push(null);
        		}
        	}
        }
       
       var arr = [];
       for( var key in hash ) {
       		arr.push(hash[key]);
       }

       arr.sort(function(a, b){
       		if( a[0] > b[0] ) return 1;
       		if( a[0] < b[0] ) return -1;
       		return 0;
       });

       data.addRows(arr);
        
        options = {
        	explorer : {},
        	title : '',
        	interpolateNulls : true,
        	vAxis: {title: items[0]["Y Units"]},
	  		hAxis: {title: items[0]["X Units"]},
	  		legend : {position:'top'}
        }
                
        _redraw();
	}
	
	function draw(item, panel) {
		if( panel ) cPanel = panel
		
		if( !chartsReady ) {
			pendingChart = item;
			return;
		}
		cPanel.html("");
		
		data = new google.visualization.DataTable();
        data.addColumn('number', item["X Units"]);
        data.addColumn('number', item["Y Units"]);
        
        var arr = [];
        /*for( var i = 0; i < item.data.spectra[0].length; i++ ) {
        	var x = item.data.spectra[0][i]*1;
        	var y = item.data.spectra[1][i]*1;
        	if( x || y) arr.push([item.data.spectra[0][i]*1, item.data.spectra[1][i]*1]);
        }*/
        for( var i = 0; i < item.spectra.length; i++ ) {
        	var x = parseFloat(item.spectra[i][0])*1;
        	var y = parseFloat(item.spectra[i][1])*1;
        	if( x || y) arr.push([parseFloat(item.spectra[i][0])*1, parseFloat(item.spectra[i][1])*1]);
        }
        data.addRows(arr);
        
        options = {
        	title : item.Name,
        	vAxis: {title: item["Y Units"]},
	  		hAxis: {title: item["X Units"]},
	  		legend : {position:"none"}
        }

        $('#print-chart').on('click', function(){
            window.open(chart.getImageURI());
        });
        
        
        _redraw();
	}

	function _redraw() {
		var hash = window.location.hash;
		if( !hash.match(/#result.*/) && !hash.match(/#compare.*/) ) return;
		
		cPanel.html("");
        
        var h = cPanel.width() / 2;
        //if( h > 400 ) h = 400;
        if( h < 200 ) h = 200;
        
        cPanel.height(h);
        	
        chart = new google.visualization.LineChart(cPanel[0]);
        chart.draw(data, options);
	}
	
	return {
		init : init,
		draw : draw,
		drawCompare: drawCompare
	}
})();