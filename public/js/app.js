var ESIS = {
	widgets : {},
	ckanHost : ''
};

if( window.location.host == 'ecospectra.org' ) {
	ESIS.ckanHost = 'http://data.ecospectra.org';
} else if ( window.location.host == 'dev-search.ecospectra.org' ) {
	ESIS.ckanHost = 'http://dev-data.ecospectra.org';
} else {
	ESIS.ckanHost = 'http://192.168.2.138:5000';
}

function qs(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// init app
(function() {

	var DEFAULT_PAGE = "home";
	var validPages = [DEFAULT_PAGE, "search", "result", "all", "edit", "compare", "group"];

	var cPage = "";
  var firstRender = true;

	$(document).ready(function() {

		// mqe.js handles the hash parsing and fires this event
		$(window).bind("page-update-event", function(e, hash){
			if( window.prerender && firstRender ) {
				firstRender = false;
				console.log('Ignoring first render');
				return;
			}

			_updatePage(hash[0]);
		});

		MQE.init({defaultPage:DEFAULT_PAGE});
		//ESIS.home.init();
		ESIS.search.init();
		ESIS.result.init();
	});

	function _updatePage(page) {
		if( page == cPage ) return;

		$('body').scrollTop(0);

		if( validPages.indexOf(page) == -1 ) page = DEFAULT_PAGE;

		try {
			if( page !== 'result' ) {
				document.title = 'EcoSIS - Spectral Library';
			}
		} catch(e) {}

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
