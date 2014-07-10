ESIS.result = (function() {
	
	var resultTemplate = null;
	
	var loaded = false;
	var waiting = null;
	
	var loadHandlers = [];
	var ignoreAttrs = ["Common_Name","pkg_groups","group_by", "resource_id", "lastRun","lastUpdate","pkg_name","Name", "Description", "_id", "file", "spectra", "Additional Information", 'metadata','pkg_id','spectra_id'];
	
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
		
		var q = CERES.mqe.getCurrentQuery();
		var resourceList = '<table class="table">'+
				'<tr><td style="white-space:nowrap">Dataset Name</td><td style="color:#888">'+result.pkg_title+'</td></tr>'+
				'<tr><td style="white-space:nowrap"><a target="_blank" href="'+ESIS.ckanHost+'/dataset/'+
						result.pkg_name+'"><i class="icon-share-alt"></i> All Resources</a></td><td style="color:#888">Go to a list of resources for the dataset this spectra came from.'+
						'  This resource list is dataset depent including everything from original spectra files to auxiliary files'+
						' such as pdf\'s, images, and readme\'s</td></tr>';
		if( result.group_by && result.group_by.attribute != '' ) {
			var parts = result.group_by.attribute.split('.');
			var q = CERES.mqe.getCurrentQuery();
			q.text = '';
			q.page = 0;
			q.filters = [{pkg_title : result.pkg_title}];
				
			var f = {};
			var name = '';
			if( parts[0] == 'ecosis' ) {
				f[parts[1]] = result[parts[1]];
				name = result[parts[1]];
			} else {
				f['metadata.'+parts[1]] = result.metadata[parts[1]];
				name = result.metadata[parts[1]];
			}
			q.filters.push(f);

			resourceList += '<tr><td style="white-space:nowrap"><a href="'+CERES.mqe.queryToUrlString(q)+'"><i class="icon-search"></i> '+
				'Dataset Grouped By</a></td><td>'+parts[1]+' = '+name+'</td></tr>';

			resourceList += '<tr><td style="white-space:nowrap"><a href="#group/'+encodeURIComponent(JSON.stringify(q.filters))+
				'/'+encodeURIComponent(result.group_by.sort)+'/'+result._id+'">Interact</a></td><td>Inspect by '+result.group_by.sort+'</td></tr>';
		}
		if( result.pkg_groups && result.pkg_groups.length > 0 ) {
			resourceList += '<tr><td>Dataset Group(s)</td><td>';
			var q = CERES.mqe.getCurrentQuery();
			q.text = '';
			q.page = 0;

			for( var i = 0; i < result.pkg_groups.length; i++ ) {
				q.filters = [{pkg_groups : result.pkg_groups[i]}];
				resourceList += '<a href="'+CERES.mqe.queryToUrlString(q)+'">'+result.pkg_groups[i]+'</a><br />';
			}
			resourceList += '</td></tr>';
		}

		resourceList += '</table>';

		resultPanel.find("#resources-link").html(resourceList);

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

		// set nav handler
		$('.nav.nav-btns a').on('click', function(){
			var heading = $(this).attr('goto');
			if( !heading || heading == '' ) return;

			$('body,html').animate({scrollTop: $('#'+heading).offset().top-70}, 500);
		});
	}

	function wrapFilterLink(key, value, metadata) {
		if( value.length > 30 ) return value;

		var q = CERES.mqe.getCurrentQuery();
		q.text = '';
		q.page = 0;
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
		
		result.Common_Name = result['Common Name']+' '+result['Spectrum Number'];
		return resultTemplate(result);
		
	}

	
	return {
		init : init,
		updateResult : updateResult,
		getResultHtml : getResultHtml,
		onLoad : onLoad
	}
	
})();