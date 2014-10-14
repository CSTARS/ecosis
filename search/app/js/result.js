ESIS.result = (function() {
	
	var resultTemplate = null;
	
	var loaded = false;
	var waiting = null;
	
	var loadHandlers = [];
	var ignoreAttrs = ['_id', 'ecosis', 'count', 'lengths'];
	
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

	function getTitle(item) {
		var group_by = '';
		if( item.ecosis.group_by && item.ecosis.group_by != '' ) {
			if( item[item.ecosis.group_by] && item[item.ecosis.group_by].length > 0 ) {
				group_by = ' ('+item.ecosis.group_by+': '+item[item.ecosis.group_by][0]+')';
			}
		}

		if( item.ecosis.package_title ) return item.ecosis.package_title+group_by;
		if( item.ecosis.package_name ) return item.ecosis.package_name+group_by;
		return 'No Title';
	}
	
	function updateResult(result) {
		if( !loaded ) {
			waiting = result;
			return;
		}
		
		var resultPanel = $("#result");

		result._title = getTitle(result);

		resultPanel.html(getResultHtml(result));
		

		var metadata = '<table class="table">';
		for( var key in result ) {
			if( ignoreAttrs.indexOf(key) == -1 && result[key] ) {
				var label = ESIS.labels.filters[key] ? ESIS.labels.filters[key] : key;

				metadata += "<tr><td>"+label+"</td><td><div style='max-height:100px;overflow:auto'>"+wrapFilterLinks(key, result[key])+"</div></td></tr>";
			}
		}
		metadata += '</table>';

		resultPanel.find("#result-metadata").html(metadata);

		/*
		leftList = "<ul>";
		rightList = "<ul>";
		count = 0;
		for( var key in result.metadata ) {
			if( ignoreAttrs.indexOf(key) == -1 && result.metadata[key] ) {
				var label = ESIS.labels.filters[key] ? ESIS.labels.filters[key] : key;

				if( count % 2 == 0 ) leftList += "<li><b>"+label+": </b>"+wrapFilterLinks(key, result.metadata[key], true)+"</li>";
				else rightList += "<li><b>"+label+": </b>"+wrapFilterLinks(key, result.metadata[key], true)+"</li>";
				count++;
			}
		}
		resultPanel.find("#result-secondary-left-panel").html(leftList);
		resultPanel.find("#result-secondary-right-panel").html(rightList);
		*/
		
		var q = CERES.mqe.getCurrentQuery();
		var resourceList = '<table class="table">'+
				'<tr><td style="white-space:nowrap">Dataset Name</td><td style="color:#888">'+result.pkg_title+'</td></tr>'+
				'<tr><td style="white-space:nowrap"><a target="_blank" href="'+ESIS.ckanHost+'/dataset/'+
						result.pkg_name+'"><i class="icon-share-alt"></i> All Resources</a></td><td style="color:#888">Go to a list of resources for the dataset this spectra came from.'+
						'  This resource list is dataset depent including everything from original spectra files to auxiliary files'+
						' such as pdf\'s, images, and readme\'s</td></tr>';



		/*if( result.group_by && result.group_by.by != '' ) {
			var parts = result.group_by.by.split('.');
			var sortParts = result.group_by.sort_on.split('.');

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

			var sort = '';
			if( sortParts.length > 1 ) {
				if( sortParts[0] == 'ecosis' ) {
					sort = sortParts[1];
				} else {
					sort = 'metadata.'+sortParts[1];
				}
			}

			resourceList += '<tr><td style="white-space:nowrap"><a href="'+CERES.mqe.queryToUrlString(q)+'"><i class="icon-search"></i> '+
				'Dataset Grouped By</a></td><td>'+parts[1]+' = '+name+'</td></tr>';

			resourceList += '<tr><td style="white-space:nowrap"><a href="#group/'+encodeURIComponent(JSON.stringify(q.filters))+
				'/'+encodeURIComponent(result.group_by.sort_on)+'/'+result._id+'">Interact</a></td><td>Inspect by '+result.group_by.sort_on+'</td></tr>';
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

		resultPanel.find("#resources-link").html(resourceList);*/

		$.ajax({
			url : ESIS.ckanHost+"/spectra/getPackage?id="+result.ecosis.package_id,
			success : function(resp) {
				console.log(resp);

				var table = '<table class="table">';

				// set keywords
				table += '<tr><td>Description</td><td>'+result.ecosis.description+'</td></tr>';

				// set keywords
				table += '<tr><td>Keywords</td><td>';
				for( var i = 0; i < resp.tags.length; i++ ) {
					table += wrapFilterLink('ecosis.keywords', resp.tags[i].display_name);
					if( i < resp.tags.length -1 ) table += ', ';
				}
				table += '</td></tr>';

				// set resources
				table += '<tr><td>Resources</td><td>';
				for( var i = 0; i < resp.resources.length; i++ ) {
					table += '<a href="'+resp.resources[i].url.replace(/:\/\//,ESIS.ckanHost) + 
								'" target="_blank">'+resp.resources[i].name+'</a>';
					if( i < resp.resources.length -1 ) table += '<br />';
				}
				table += '</td></tr>';

				table += '</table>'

				$('#dataset-content').html(table);


				// set package info for data viewer
				document.querySelector('esis-data-viewer').package = resp;
				document.querySelector('esis-data-viewer').item = result;
				document.querySelector('esis-data-viewer').spectra_count = result.ecosis.spectra_count;
			}
		});

		//ESIS.chart.draw(result, $("#result-chart-panel"));
		
		$("#result-back-btn").on('click', function(){
			$(window).trigger("back-to-search-event");
		});

		$('#export-go').on('click', function(){
			window.open('/rest/download?package_id='+result._id+
				'&metadata='+($('#export-metadata').is(':checked') ? 'true' : 'false')
				,'Download'); 
		});

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

	function wrapFilterLink(key, value) {
		if( value.length > 30 ) return value;

		var q = CERES.mqe.getCurrentQuery();
		q.text = '';
		q.page = 0;
		var f = {};
		f[key] = value;
		q.filters = [f];
		return '<a href="'+CERES.mqe.queryToUrlString(q)+'">'+value+'</a>';
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