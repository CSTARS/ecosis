var ESIS = {
	widgets : {}	
};

ESIS.app = (function() {
	
	var DEFAULT_PAGE = "home";
	var validPages = [DEFAULT_PAGE, "search", "result", "all", "edit"];
	
	var cPage = "";
	
	$(document).ready(function() {
		
		// mqe.js handles the hash parsing and fires this event
		$(window).bind("page-update-event", function(e, hash){
			_updatePage(hash[0]);
			_updatePageContent(hash);
		});
		
		CERES.mqe.init({
			defaultPage : "search"
		});
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
	
	function _updatePageContent(hash) {
		if ( cPage == "all" ) {
			ESIS.all.init();
		} else if ( cPage == "edit" ) {
			ESIS.edit.init();
		}
	}
	
	
})();


ESIS.labels = {};
ESIS.labels.filters = {
	"topics"           : "Topics",
	"eduResources"    : "Educational Resources",
	"counties"         : "County Active in",
	"audiences"    : "Target Audience"
};