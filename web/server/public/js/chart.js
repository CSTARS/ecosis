function initchart() {
	ESIS.chart.init();
}

ESIS.chart = (function(){
	
	var pendingChart = null;
	var cPanel = null;
	var chartsReady = false;
	var data = null;
	var options = null;
	
	function init() {
		if( pendingChart != null ) {
			draw(pendingChart);
		}
		
		$(window).resize(function(){
			_redraw();
		});
		
		chartsReady = true;
	}
	
	function draw(item, panel) {
		panel.html("");
		cPanel = panel
		
		if( !chartsReady ) {
			pendingChart = item;
			return;
		}
		
		data = new google.visualization.DataTable();
        data.addColumn('number', item["X Units"]);
        data.addColumn('number', item["Y Units"]);
        
        var arr = [];
        for( var i = 0; i < item.spectra[0].length; i++ ) {
        	var x = item.spectra[0][i]*1;
        	var y = item.spectra[1][i]*1;
        	if( x || y) arr.push([item.spectra[0][i]*1, item.spectra[1][i]*1]);
        }
        data.addRows(arr);
        
        options = {
        	title : item.Name,
        	vAxis: {title: item["Y Units"]},
	  		hAxis: {title: item["X Units"]},
	  		legend : {position:"none"}
        }
        
        _createExportBtn(item.Name, item["X Units"], item["Y Units"], arr);
        
        _redraw();
	}
	
	// TODO: need to test in more browsers
	function _createExportBtn(name, xName, yName, arr) {
		var url = "data:application/csv;charset=UTF-8,";
		var data = xName+","+yName+"\n";
		for( var i = 0; i < arr.length; i++ ) {
			data += arr[i][0]+","+arr[i][1]+"\n";
		}
		$("#result-export").html("<a class='btn' target='_blank' download='"+name+".csv' href='"+url+encodeURIComponent(data)+"'>Download CSV</a>");
		
	}
	
	function _redraw() {
		if( !window.location.hash.match(/#result.*/) ) return;
		
		cPanel.html("");
		
		
        
        var h = cPanel.width() / 2;
        if( h > 400 ) h = 400;
        if( h < 200 ) h = 200;
        
        cPanel.height(h);
        	
        var chart = new google.visualization.LineChart(cPanel[0]);
        chart.draw(data, options);
	}
	
	return {
		init : init,
		draw : draw
	}
})();