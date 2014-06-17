Handlebars.registerHelper('info', function() {
  return new Handlebars.SafeString(this.info);
});

ESIS.search = (function() {
	
	// handle bar template layouts
	var RESULT_TEMPLATE = [
	    '<div class="search-result-row animated fadeIn">',
	    	"<div class='checkbox pull-right'>",
				"<label>",
				    "<input type='checkbox' {{#if isChecked}}checked{{/if}} onclick='ESIS.compare.toggle(this);' class='select-{{_id}}' itemid='{{_id}}' itemname='{{title}}' /> Compare",
				    "</label>",
				"</div>",
	    	"<h4><a href='#result/{{_id}}'>{{title}}</a></h4>",
	    	"<div class='row-fluid'>",
	    		"<div class='span7' style='padding-bottom:10px;'><div id='{{_id}}-chart' style='height:150px'></div></div>",
	    		"<div class='span5'>{{info}}</div>",
	    "</div>"
	].join('');
	var TITLE_TEMPLATE = "Search Results: <span style='color:#888'>{{start}} to {{end}} of {{total}}</span>";
	
	// template functions
	var rowTemplate;
	var titleTemplate;
	
	var titleAttr = 'Spectrum Number';

	var openFilters = [];
	var staticFilters = {};
	
	function init() {
		
		rowTemplate = Handlebars.compile(RESULT_TEMPLATE);
		titleTemplate = Handlebars.compile(TITLE_TEMPLATE);
		
		$(window).bind("search-update-event", function(e, results){
			_updateResultsTitle(results);
			_updateResults(results);
			_updateFilters(results); // this should always be before adding active filters
			_updateActiveFilters(results);
			_updatePaging(results);
			_updateRestLink();
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
			
			panel.append($("<a href='"+CERES.mqe.queryToUrlString(tmpQuery)+"' style='margin:0 5px 5px 0' class='btn btn-primary btn-small'><i class='icon-remove icon-white'></i> "+f+"</a>"))
			
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
			if( (key == "Particle Size" || key == "Subclass") && numFilters == 0 ) continue;
			
			
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
				filter[key] = item.filter;
				query.filters.push(filter);
				
				block.append($("<li><a href='"+CERES.mqe.queryToUrlString(query)+"'>"+item.filter+" ("+item.count+")</a></li>"));
			}
			
			title.append(block);
			panel.append(title);
			c++;
		}
		
		if( c == 0 ) {
			panel.append($("<div>No filters available for this search</div>"));
			if( results.total > 0 ) panel.append(_createCustomFilter());
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
			panel.append($("<li><a href='"+CERES.mqe.queryToUrlString(tmpQuery)+"'>&#171;</a></li>"));
		}
		
		for( var i = startBtn; i < endBtn; i++ ) {
			var label = i+1;
			tmpQuery.page = i;
			var btn = $("<li><a href='"+CERES.mqe.queryToUrlString(tmpQuery)+"'>"+label+"</a></li>");
			if( cPage == i ) btn.addClass('active');
			panel.append(btn);
		}
		
		// add next button
		if(  cPage != numPages-1 && numPages != 0 ) {
			tmpQuery.page = cPage+1;
			panel.append($("<li><a href='"+CERES.mqe.queryToUrlString(tmpQuery)+"'>&#187;</a></li>"));
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
		
		ESIS.chart.clearSearchCharts();
		for( var i = 0; i < results.items.length; i++ ) {
			var item = results.items[i];
			var info = _getInfo(item);
			
			panel.append(rowTemplate({
				_id     : item._id,
				title   : _getTitle(item),
				info    : info,
				isChecked : ESIS.compare.selected(item._id)
			}));
			ESIS.chart.addSearchChart(item, $('#'+item._id+'-chart'));
			
		}
		ESIS.chart.redrawSearchCharts(true);
	}

	function _getTitle(item) {
		if( item['Spectrum Number'] || item.Common ) {
			var title = '';
			title += item['Common Name'] ? item['Common Name'] : 'No Name';
			if( item['Spectrum Number'] ) title += ' - '+item['Spectrum Number'];
			return title;
		}
		return 'No Title';
	}
	
	function _getInfo(item) {
		var info = "<ul>";
		
		//var tmpQuery = CERES.mqe.getCurrentQuery();
		/*if( item.Type ) {
			if( _hasFilter(item,"Type") ) info += "<li><b>Type: </b>"+item.Type+"</li>";
			else info += "<li><b>Type: </b><a href='"+_createFilterUrl(item,"Type")+"'>"+item.Type+"</a></li>";
		}
		if( item.Class ) {
			if( _hasFilter(item,"Class") ) info += "<li><b>Class: </b>"+item.Class+"</li>";
			else info += "<li><b>Class: </b><a href='"+_createFilterUrl(item,"Class")+"'>"+item.Class+"</a></li>";
		}
		if( item.Subclass ) {
			if( _hasFilter(item,"Subclass") ) info += "<li><b>Subclass: </b>"+item.Subclass+"</li>";
			else info += "<li><b>Subclass: </b><a href='"+_createFilterUrl(item,"Subclass")+"'>"+item.Subclass+"</a></li>";
		}
		if( item["Particle Size"] ) {
			if( _hasFilter(item,"Particle Size") ) info += "<li><b>Particle Size: </b>"+item["Particle Size"]+"</li>";
			else info += "<li><b>Particle Size: </b><a href='"+_createFilterUrl(item,"Particle Size")+"'>"+item["Particle Size"]+"</a></li>";
		}*/

		var types = ['Type', 'Family', 'Category', 'Common Name'];

		for( var i = 0; i < types.length; i++ ) {
			if( item[types[i]] ) {
				if( _hasFilter(item,types[i]) ) info += "<li><b>"+types[i]+": </b>"+item[types[i]]+"</li>";
				else info += "<li><b>"+types[i]+": </b><a href='"+_createFilterUrl(item,types[i])+"'>"+item[types[i]]+"</a></li>";
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
	
	function _hasFilter(item, key) {
		var filter = {};
		var tmpQuery = CERES.mqe.getCurrentQuery();
		filter[key] = item[key];
		for( var i = 0; i < tmpQuery.filters.length; i++ ) {
			if( tmpQuery.filters[i][key] && tmpQuery.filters[i][key] == item[key] ) return true;
		}
		return false;
	}
	
	function _createFilterUrl(item, key) {
		var tmpQuery = CERES.mqe.getCurrentQuery();
		var filter = {};
		filter[key] = item[key];
		tmpQuery.page = 0;
		tmpQuery.filters.push(filter);
		return CERES.mqe.queryToUrlString(tmpQuery);
	}

	
	return {
		init : init
	}
})();
                   
                   
