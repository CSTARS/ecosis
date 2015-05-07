
ESIS.home = (function(){

	function init() {
		$('#home-text').textillate();

		$.get('/rest/getSpectraCount', function(resp){
			var count = resp.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

			$('#home-total-count')
				.text(''+count+' spectra and counting.')
				.textillate();
		});
	}

	return {
		init : init
	}

})();
