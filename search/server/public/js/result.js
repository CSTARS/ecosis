ESIS.result = (function() {
	
	var resultTemplate = null;
	
	var loaded = false;
	var waiting = null;
	
	var loadHandlers = [];
	var ignoreAttrs = ["Name", "Description", "_id", "file", "spectra", "Additional Information"];
	
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
	
	function updateResult(result) {
		if( !loaded ) {
			waiting = result;
			return;
		}
		
		var resultPanel = $("#result");
		resultPanel.html(getResultHtml(result));
		
		var leftList = "<ul>";
		var rightList = "<ul>";
		var count = 0;
		for( var key in result.data ) {
			if( ignoreAttrs.indexOf(key) == -1 && result.data[key] ) {
				if( count % 2 == 0 ) leftList += "<li><b>"+key+": </b>"+result.data[key]+"</li>";
				else rightList += "<li><b>"+key+": </b>"+result.data[key]+"</li>";
				count++;
			}
		}
		resultPanel.find("#result-left-panel").html(leftList);
		resultPanel.find("#result-right-panel").html(rightList);
		
		ESIS.chart.draw(result, $("#result-chart-panel"));
		
		$("#result-back-btn").on('click', function(){
			$(window).trigger("back-to-search-event");
		});
	}
	
	function getResultHtml(result) {
		
		var options = {
			Name : result.Name,
			Description : result.Description
		};
		
		return resultTemplate(result);
		
	}

	
	return {
		init : init,
		updateResult : updateResult,
		getResultHtml : getResultHtml,
		onLoad : onLoad
	}
	
})();