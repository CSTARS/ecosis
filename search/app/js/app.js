var ESIS = {
	widgets : {},
	ckanHost : ''
};

if( window.location.host == 'ecospectra.org' ) {
	ESIS.ckanHost = 'http://data.ecospectra.org';
} else if ( window.location.host == 'dev-search.ecospectra.org' ) {
	ESIS.ckanHost = 'http://dev-data.ecospectra.org';
} else {
	ESIS.ckanHost = 'http://192.168.1.9:5000';
}

// init app
(function() {

	var DEFAULT_PAGE = "home";
	var validPages = [DEFAULT_PAGE, "search", "result", "all", "edit", "compare", "group"];

	var cPage = "";

	$(document).ready(function() {

		// mqe.js handles the hash parsing and fires this event
		$(window).bind("page-update-event", function(e, hash){
			_updatePage(hash[0]);
		});

		MQE.init({defaultPage:DEFAULT_PAGE});
		ESIS.home.init();
		ESIS.search.init();
		ESIS.result.init();
	});

	function _updatePage(page) {
		if( page == cPage ) return;

		$('body').scrollTop(0);

		if( validPages.indexOf(page) == -1 ) page = DEFAULT_PAGE;

		$("#"+cPage).hide();
		$("#"+page).show();

		cPage = page;
	}

})();


ESIS.labels = {};

ESIS.labels.filters = {
	"groups" : "Group",
	"package_title" : "Dataset",
	"keywords" : "Keywords",
	"organization" : "Organization"
};
ESIS.filters = {
	"organization" : "ecosis.organization"
}

// chart stuff

var chartLoadHandlers = [];
function initchart() {
	for( var i = 0; i < chartLoadHandlers.length; i++ ) chartLoadHandlers[i]();
}
