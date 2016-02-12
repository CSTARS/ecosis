ESIS.home = (function(){

	var ptRegex1 = /^-?\d+\.?\d*$/;
	var ptRegex2 = /^-?\d*\.\d+$/;
	var initialized = false;

	var textEffect = {
		in: {
			effect: 'rollIn',
			shuffle: true
		},
		out: {
			effect: 'rollOut',
			shuffle: true
		}
	}
	var chartIsLoaded = false;
	var waiting = false;
	var spectra = null;
	var dataArray = [];
	var chart = null;
	var dt = null;
	var hash = null;
	var showing = false;
	var timeoutId = -1;
	var first = true;

	function chartReady() {
		chartIsLoaded = true;
		if( waiting ) redrawChart();
	}

	function onHashChange() {
		if( first ) {
			first = false;
			$.get('/spectra/count', function(resp){
				var count = resp.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

				$('#home-total-count').text(''+count+' spectra and counting.');
			});
		}

		hash = window.location.hash.replace(/#/g, '');

		if( hash == '' || hash == 'home' ) {
			if( showing ) return;

			showing = true;
			startRandom();
		} else {
			showing = false;
			clearTimeout(timeoutId);
		}
	}

	function startRandom() {
		if( !showing ) return;
		$.get('/spectra/random', drawRandomSpectra);
	}

	function drawRandomSpectra(resp) {
		spectra = resp;

		if( resp['Common Name'] ) {
			$('#random-common-name')
				.html('<span class="random-label">Common Name:</span> '+_createAnchor('Common Name', resp));
		} else {
			$('#random-common-name').text('');
		}

		if( resp['Latin Genus'] ) {
			$('#random-genus')
				.html('<span class="random-label">Genus:</span> '+_createAnchor('Latin Genus', resp));
		} else {
			$('#random-genus').text('');
		}

		if( resp['Latin Species'] ) {
			$('#random-species')
				.html('<span class="random-label">Species:</span> '+_createAnchor('Latin Species', resp));
		} else {
			$('#random-species').text('');
		}
		$('#random-title')
			.html('<a href="#result/'+resp.ecosis.package_id+'">'+resp.ecosis.package_title+'</a>');

		timeoutId = setTimeout(startRandom, 15000);
		setTimeout(function(){
			if( $('#random-chart')[0] ) {
				$('#random-chart')[0].className = 'animated fadeOut';
			}

		}, 14000);

		if( chartIsLoaded ) {
			redrawChart();
		} else {
			waiting = true;
		}
	}

	function redrawChart() {
		if( !showing || !spectra ) return;

		dataArray = [];

		for( var k in spectra.datapoints ) {
				var v = spectra.datapoints[k];
				if( ptRegex1.exec(k) || ptRegex2.exec(k) ) {
						dataArray.push([parseFloat(k), parseFloat(v)]);
				}
		}

		dataArray.sort(function(a, b){
				if( a[0] < b[0] ) return -1;
				if( a[0] > b[0] ) return 1;
				return 0;
		});

		var skip = Math.ceil(dataArray.length / 500);
		if( skip > 1 ) {
			var tmp = [];
			for( var i = 0; i < dataArray.length; i += skip ) {
				tmp.push(dataArray[i]);
			}
			dataArray = tmp;
		}

		dataArray.splice(0,0,['Wavelength','Reflectance'])

		var options = {
				height: 300,
				width: $('#random-chart').width(),
				legend : {
						position : 'none'
				},
				animation : {
            duration : 750,
            easing : 'out'
        }
		};

		dt = google.visualization.arrayToDataTable(dataArray);

		if( !chart ) chart = new google.charts.Line($('#random-chart')[0]);

		chart.draw(dt, options);
		$('#random-chart')[0].className = 'animated fadeIn';
	}

	function _createAnchor(key, spectra) {
		if( !spectra[key] ) return '';

		var filter = {};
		filter[key] = spectra[key];
		filter = [filter];

		return '<a href="#search//'+encodeURIComponent(JSON.stringify(filter))+'/0/6">'+spectra[key]+'</a>';
	}

	setTimeout(function(){
		$(window).on('resize', redrawChart);
		$(window).on('hashchange', onHashChange);

		onHashChange();
	}, 500);

	if( window.chartReady ) {
		chartReady();
	}

	return {
		chartReady : chartReady
	}

})();
