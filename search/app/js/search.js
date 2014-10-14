Handlebars.registerHelper('info', function() {
  return new Handlebars.SafeString(this.info);
});
Handlebars.registerHelper('organization', function() {
  return new Handlebars.SafeString(this.organization);
});

ESIS.search = (function() {
	
	// handle bar template layouts
	var RESULT_TEMPLATE = [
	    '<div class="search-result-row animated fadeIn">',
	    	"<!--<div class='checkbox pull-right'>",
				"<label>",
				    "<input type='checkbox' {{#if isChecked}}checked{{/if}} onclick='ESIS.compare.toggle(this);' class='select-{{_id}}' itemid='{{_id}}' itemname='{{title}}' /> Compare",
				    "</label>",
			"</div>-->",
	    	"<h4><a href='#result/{{_id}}'>{{title}}</a></h4>",
	    	"<div style='margin-left:5px'>{{organization}}</div>",
	    	"<div class='row'>",
	    		"<div class='col-md-7' style='padding-bottom:10px;'>{{description}}</div>",
	    		"<div class='col-md-5'>{{info}}</div>",
	    "</div>"
	].join('');
	var TITLE_TEMPLATE = "Search Results: <span style='color:#888'>{{start}} to {{end}} of {{total}}</span>";
	
	// template functions
	var rowTemplate;
	var titleTemplate;
	
	var titleAttr = 'Spectrum Number';
	var infoAttrs = ['Category', 'Family', 'Genus', 'Scientific Name', 'Common Name', 'pkg_title'];

	var openFilters = [];
	var staticFilters = {};
	
	function init() {
		
		rowTemplate = Handlebars.compile(RESULT_TEMPLATE);
		titleTemplate = Handlebars.compile(TITLE_TEMPLATE);
		
		$(window).bind("search-start-event", function(e, results){
			_loading(true);
		});

		$(window).bind("search-update-event", function(e, results){
			_loading(false);
			_updateResultsTitle(results);
			_updateResults(results);
			_updateFilters(results); // this should always be before adding active filters
			_updateActiveFilters(results);
			_updatePaging(results);
			_updateRestLink();
			//_updateDownloadLinks();
		});
		
		// set search handlers
		$("#search-btn").on('click', function(){
			_search();
		});
		$("#search-text").on('keypress', function(e){
			if( e.which == 13 ) _search();
		});
	}
	
	function _search() {
		var query = CERES.mqe.getCurrentQuery();
		query.page = 0;
		query.text = $("#search-text").val();
		window.location = CERES.mqe.queryToUrlString(query);
	}
	
	
	function _updateActiveFilters() {
		var panel = $("#active-filters").html("");
		var query = CERES.mqe.getCurrentQuery();
		
		// make sure text box is always correct
		$("#search-text").val(query.text);
		
		if( query.filters.length == 0 ) return;
		
		panel.append("<h6 style='margin-top:0px'>You are currently searching for:</h6>");
		
		for( var i = 0; i < query.filters.length; i++ ) {
			// get query copy and splice array
			var tmpQuery = CERES.mqe.getCurrentQuery();
			tmpQuery.page = 0;
			
			var foo = tmpQuery.filters.splice(i,1);
			
			var f = "";
			for( var j in query.filters[i] ) {
				// see if it's a static filter
				if( typeof query.filters[i][j] == 'object' ) {
					if( staticFilters[j] ) {
						// grab label from static filter
						f = staticFilters[j].label;
						// also, make sure to check it's check box
						$("#static-filter-"+j).prop('checked', true);
					} else {
						f = j+': '+JSON.stringify(query.filters[i][j]);
					}
				} else {
					f = query.filters[i][j]; 
				}	
			}
			
			panel.append($('<a href="'+CERES.mqe.queryToUrlString(tmpQuery).replace(/"/g,'\\"')+'" style="margin:0 5px 5px 0" class="btn btn-primary btn-small"><i class="fa fa-times" style="color:white"></i> '+f+'</a>'))
			
		}
		
	}
	
	function _updateFilters(results) {
		var panel = $("#filter-nav").html("");
		
		// add the title
		panel.append($('<li class="nav-header">Narrow Your Search</li>'));
		panel.append($('<li class="divider"></li>'));
		
		var numFilters = CERES.mqe.getCurrentQuery().filters.length;

		// add filter blocks
		var c = 0;
		for( var key in results.filters ) {
			if( results.filters[key].length == 0 ) continue;
			
			
			var label = ESIS.labels.filters[key] ? ESIS.labels.filters[key] : key;
			
			var title = $("<li><a id='filter-block-title-"+key.replace(/\s/g,"_")+"' class='search-block-title'>"+label+"</a></li>");
			
			var display = "";
			if( openFilters.indexOf(key) > -1 ) display = "style='display:block'" 
			var block = $("<ul id='filter-block-"+key.replace(/\s/g,"_")+"' class='filter-block' "+display+"></ul>");
			
			for( var i = 0; i < results.filters[key].length; i++ ) {
				var item = results.filters[key][i];
				var query = CERES.mqe.getCurrentQuery();
				query.page = 0;
				
				var filter = {};
				filter[ESIS.filters[key] ? ESIS.filters[key] : key] = item.filter;
				query.filters.push(filter);
				
				block.append($('<li><a href="'+CERES.mqe.queryToUrlString(query).replace(/"/g,'\\"')+'">'+item.filter+' ('+item.count+')</a></li>'));
			}
			
			title.append(block);
			panel.append(title);
			c++;
		}
		
		if( c == 0 ) {
			panel.append($("<div>No filters available for this search</div>"));
			return;
		}
		
		// add hide/show handlers for the blocks
		$(".search-block-title").on('click', function(e){
			var id = e.target.id.replace(/filter-block-title-/, '');
			var panel = $("#filter-block-"+id);
			
			if( panel.css("display") == "none" ) {
				panel.show('blind');
				openFilters.push(id);
			} else {
				panel.hide('blind');
				openFilters.splice(openFilters.indexOf(id),1);
			}
		});
	}
	
	function _updatePaging(results) {
		var tmpQuery = CERES.mqe.getCurrentQuery();
		var numPages = Math.ceil( parseInt(results.total) / tmpQuery.itemsPerPage );
		var cPage = Math.floor( parseInt(results.start+1) / tmpQuery.itemsPerPage );
		
		var buttons = [];
		
		// going to show 7 buttons
		var startBtn = cPage - 3;
		var endBtn = cPage + 3;
		
		if( endBtn > numPages ) {
			startBtn = numPages-7;
			endBtn = numPages;
		}
		if( startBtn < 0 ) {
			startBtn = 0;
			endBtn = 6;
			if( endBtn > numPages ) endBtn = numPages;
		}
		
		var panel = $("#search-paging-btns");
		panel.html("");
		
		// add back button
		if( cPage != 0 ) {
			tmpQuery.page = cPage-1;
			panel.append($('<li><a href="'+CERES.mqe.queryToUrlString(tmpQuery).replace(/"/g,'\\"')+'">&#171;</a></li>'));
		}
		
		for( var i = startBtn; i < endBtn; i++ ) {
			var label = i+1;
			tmpQuery.page = i;
			var btn = $('<li><a href="'+CERES.mqe.queryToUrlString(tmpQuery).replace(/"/g,'\\"')+'">'+label+'</a></li>');
			if( cPage == i ) btn.addClass('active');
			panel.append(btn);
		}
		
		// add next button
		if(  cPage != numPages-1 && numPages != 0 ) {
			tmpQuery.page = cPage+1;
			panel.append($('<li><a href="'+CERES.mqe.queryToUrlString(tmpQuery).replace(/"/g,'\\"')+'">&#187;</a></li>'));
		}
		
	}
	
	function _updateResultsTitle(results) {
		var end = results.end;
		if( results.total < end ) end = results.total;
		
		var start = parseInt(results.start)+1;
		if( end == 0 ) start = 0;
		
		
		$("#results-title").html(titleTemplate({
			start : start,
			end   : end,
			total : results.total
		}));
	}
	
	function _updateResults(results) {
		var panel = $("#results-panel").html("");
		
		if( results.items.length == 0 ) {
			panel.append("<div style='font-style:italic;color:#999;padding:15px 10px'>No results found for your current search.</div>");
			return;
		}
		
		//ESIS.chart.clearSearchCharts();
		for( var i = 0; i < results.items.length; i++ ) {
			var item = results.items[i];
			var info = _getInfo(item);
			
			panel.append(rowTemplate({
				_id     : item._id,
				title   : _getTitle(item),
				organization   : _getOrganization(item),
				description : _getDescription(item),
				info    : info,
				isChecked : ESIS.compare.selected(item._id)
			}));
		//	ESIS.chart.addSearchChart(item, $('#'+item._id+'-chart'));
			
		}
		//ESIS.chart.redrawSearchCharts(true);
	}

	function _getTitle(item) {
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

	function _getDescription(item) {
		if( item.ecosis.description ) return item.ecosis.description;
		return 'No description provided';
	}

	function _getOrganization(item) {
		if( !item.ecosis.organization_name ) return '';
		if( item.ecosis.organization_name == '' ) return '';
	
		var link = '<a href="'+_createFilterUrl('organization_name', item.ecosis.organization_name)+'">';
		/*if( item.ecosis.organization_image_url ) {
			link += '<img class="img-thumbnail" src="'+ESIS.ckanHost+item.ecosis.organization_image_url+'" border=0  style="width:32px" /> ';
		}*/
		link += item.ecosis.organization_name+'</a><br /><br />';

		return link;
	}
	
	function _getInfo(item) {
		var info = "<ul>";

		for( var i = 0; i < infoAttrs.length; i++ ) {
			if( item[infoAttrs[i]] ) {

				var arr = item[infoAttrs[i]];
				var key = infoAttrs[i];
				var label = ESIS.labels.filters[key] ? ESIS.labels.filters[key] : key;

				info += "<li><b>"+label+": </b>";
				for( var j = 0; j < arr.length; j++ ) {
					if( _hasFilter(item,arr[j]) ) info += arr[j];
					else info += '<a href="'+_createFilterUrl(key, arr[j])+'">'+arr[j]+'</a>';
					
					if( j == 5 && j != arr.length - 1 ) {
						info += ' ...';
						break;
					}
					if( j < arr.length-1 ) info += ', ';

				}
				info += '</li>';
			}
		}
		
		
		
		info += "</ul>";
		return info;
	}

	function _updateRestLink() {
		var link = CERES.mqe.getRestLink();
		if( !link.match(/$http.*/) ) {
			link = window.location.protocol+'//'+window.location.host+link;
		}

		$('#current-search-rest-link').html(
			'<a href="'+link+'" target="_blank">REST Link</a>'+
			'<br /> <span style="color:#888;font-size:11px;font-style:italic">'+ decodeURIComponent(link)+'</span>'
		);
	}

/*
	function _updateDownloadLinks() {
		var q = CERES.mqe.getCurrentQuery();
		var filters = encodeURIComponent(JSON.stringify(q.filters));

		var link = '/rest/downloadQueryData?text='+q.text+'&filters='+filters;
		$('#current-download-data-link').html(
			'<a href="'+link+'" class="btn btn-link" target="_blank"><i class="fa fa-download"></i> Download Query Data</a>'
		);

		link = '/rest/downloadQueryMetadata?text='+q.text+'&filters='+filters;
		$('#current-download-metadata-link').html(
			'<a href="'+link+'" class="btn btn-link" target="_blank"><i class="fa fa-download"></i> Download Query Metadata</a>'
		);
	}
*/
	function _hasFilter(item, key) {
		var filter = {};
		var tmpQuery = CERES.mqe.getCurrentQuery();
		filter[key] = item[key];
		for( var i = 0; i < tmpQuery.filters.length; i++ ) {
			if( tmpQuery.filters[i][key] && tmpQuery.filters[i][key] == item[key] ) return true;
		}
		return false;
	}
	
	function _createFilterUrl(key, value) {
		var tmpQuery = CERES.mqe.getCurrentQuery();
		var filter = {};
		filter[ESIS.filters[key] ? ESIS.filters[key] : key] = value;
		tmpQuery.page = 0;
		tmpQuery.filters.push(filter);
		return CERES.mqe.queryToUrlString(tmpQuery).replace(/"/g,'\\"');
	}

	var loadingTimer = -1;
	function _loading(loading) {
		if( loadingTimer != -1 ) clearTimeout(loadingTimer);

		if( loading ) {	
			loadingTimer = setTimeout(function(){
				loadingTimer = -1;
				$('#loading').show();
			}, 150);
		} else {
			loadingTimer = -1;
			$('#loading').hide();
		}
	}

	
	return {
		init : init
	}
})();
                   
                   
