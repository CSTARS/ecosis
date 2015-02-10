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
		/*var group_by = '';
		if( item.ecosis.group_by && item.ecosis.group_by != '' ) {
			if( item[item.ecosis.group_by] && item[item.ecosis.group_by].length > 0 ) {
				group_by = ' ('+item.ecosis.group_by+': '+item[item.ecosis.group_by][0]+')';
			}
		}*/

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
		

		var metadata = '<table class="table">';
		for( var key in result ) {
			if( ignoreAttrs.indexOf(key) == -1 && result[key] && (result[key].length / result.ecosis.spectra_count) < .05 ) {
				var label = ESIS.labels.filters[key] ? ESIS.labels.filters[key] : key;

				metadata += "<tr><td>"+label+"</td><td><div style='max-height:100px;overflow:auto'>"+wrapFilterLinks(key, result[key])+"</div></td></tr>";
			}
		}
		metadata += '</table>';

		resultPanel.find("#result-metadata").html(metadata);

		$.get(ESIS.ckanHost+"/api/3/action/package_show?id="+result.ecosis.package_id,
			function(resp) {

				resp = resp.result;
				console.log(resp);

				var table = '<table class="table">';

				if( resp.organization ) {
					table += '<tr><td>Organization</td><td>';
					if( resp.organization.image_url && resp.organization.image_url != '' ) {
						table += '<img style="max-width:300px" src="'+ESIS.ckanHost+'/uploads/group/'+resp.organization.image_url+'" /><br />';
					}
					table += wrapFilterLink('ecosis.organization', resp.organization.title, true);
				}

				table += '<tr><td>Description</td><td>'+resp.notes+'</td></tr>';

				// set keywords
				table += '<tr><td>Keywords</td><td>';
				for( var i = 0; i < resp.tags.length; i++ ) {
					table += wrapFilterLink('ecosis.keywords', resp.tags[i].display_name, true);
					if( i < resp.tags.length -1 ) table += ', ';
				}
				if( resp.tags.length == 0 ) table += '[None]';
				table += '</td></tr>';

				// set resources
				table += '<tr><td>Resources</td><td>';
				for( var i = 0; i < resp.resources.length; i++ ) {
					table += '<a href="'+resp.resources[i].url.replace(/:\/\//,ESIS.ckanHost) + 
								'" target="_blank"><i class="fa fa-download"></i> '+resp.resources[i].name+'</a>';
					if( i < resp.resources.length -1 ) table += '<br />';
				}
				table += '</td></tr>';

				if( resp.metadata_created ) {
					table += '<tr><td>Uploaded</td><td>'+(new Date(resp.metadata_created).toLocaleDateString())+'</td></tr>';
				}
				

				table += '</table>'

				$('#dataset-content').html(table);


				// set package info for data viewer
				$.get(ESIS.ckanHost+"/ecosis/getSchema?id="+result.ecosis.package_id, 
					function(schema) {

					var viewer = document.querySelector('esis-data-viewer');
					var downloader = document.querySelector('esis-data-downloader');
					viewer.package = resp;
					viewer.item = result;
					viewer.schema = schema;
					viewer.spectra_count = result.ecosis.spectra_count;

					downloader.package_id = resp.id;
					viewer.addEventListener('filters-updated', function(e){
						downloader.filters = e.detail;
					});
				});
			}
		);

		
		$("#result-back-btn").on('click', function(){
			$(window).trigger("back-to-search-event");
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