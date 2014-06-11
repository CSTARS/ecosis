ESIS.result = (function() {
	
	var resultTemplate = null;
	
	var loaded = false;
	var waiting = null;
	
	var loadHandlers = [];
	var ignoreAttrs = ["group_by", "resource_id", "lastRun","lastUpdate","pkg_name","Name", "Description", "_id", "file", "spectra", "Additional Information", 'metadata','pkg_id','spectra_id'];
	
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
		for( var key in result ) {
			if( ignoreAttrs.indexOf(key) == -1 && result[key] ) {
				var label = ESIS.labels.filters[key] ? ESIS.labels.filters[key] : key;

				if( count % 2 == 0 ) leftList += "<li><b>"+label+": </b>"+wrapFilterLink(key, result[key])+"</li>";
				else rightList += "<li><b>"+label+": </b>"+wrapFilterLink(key, result[key])+"</li>";
				count++;
			}
		}
		resultPanel.find("#result-main-left-panel").html(leftList);
		resultPanel.find("#result-main-right-panel").html(rightList);

		leftList = "<ul>";
		rightList = "<ul>";
		count = 0;
		for( var key in result.metadata ) {
			if( ignoreAttrs.indexOf(key) == -1 && result.metadata[key] ) {
				var label = ESIS.labels.filters[key] ? ESIS.labels.filters[key] : key;

				if( count % 2 == 0 ) leftList += "<li><b>"+label+": </b>"+wrapFilterLink(key, result.metadata[key], true)+"</li>";
				else rightList += "<li><b>"+label+": </b>"+wrapFilterLink(key, result.metadata[key], true)+"</li>";
				count++;
			}
		}
		resultPanel.find("#result-secondary-left-panel").html(leftList);
		resultPanel.find("#result-secondary-right-panel").html(rightList);
		
		resultPanel.find("#resources-link").html('<div style="text-align:center;padding:15px"><a class="btn btn-primary btn-large" style="margin-bottom:15px" target="_blank" href="http://esis.casil.ucdavis.edu/dataset/'+
			result.pkg_name+'"><i class="icon-folder-close icon-white"></i> Dataset Resources</a></div>');

		ESIS.chart.draw(result, $("#result-chart-panel"));
		
		$("#result-back-btn").on('click', function(){
			$(window).trigger("back-to-search-event");
		});

		$('#export-go').on('click', function(){
			window.open('/rest/download?_id='+window.location.hash.split('/')[1]+
				'&format='+$('#export-type').val()+
				'&raw='+($('#export-metadata').is(':checked') ? 'false' : 'true')
				,'Download'); 
		});
	}

	function wrapFilterLink(key, value, metadata) {
		if( value.length > 30 ) return value;

		var q = CERES.mqe.getCurrentQuery();
		q.text = '';
		var f = {};
		f[(metadata ? 'metadata.'+key : key)] = value;
		q.filters = [f];
		return '<a href="'+CERES.mqe.queryToUrlString(q)+'">'+value+'</a>';
	}
	
	function getResultHtml(result) {
		
		var options = {
			Name : result.Name,
			Description : result.Description
		};

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