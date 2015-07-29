ESIS.home = (function(){

	var ptRegex1 = /^-?\d+\.?\d*$/;
	var ptRegex2 = /^-?\d*\.\d+$/;

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

	function chartReady() {
		chartIsLoaded = true;
		if( waiting ) redrawChart();
	}

	function init() {
		showing = true;

		$.get('/spectra/count', function(resp){
			var count = resp.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

			$('#home-total-count')
				.text(''+count+' spectra and counting.')
				.textillate();
		});

		$(window).on('resize', redrawChart);
		$(window).on('hashchange', function(){
			hash = window.location.hash.replace(/#/g, '');

			if( hash == '' || hash == 'home' ) {
				if( showing ) return;

				showing = true;
				startRandom();
			} else {
				showing = false;
				clearTimeout(timeoutId);
			}
		});

		startRandom();
	}

	function startRandom() {
		if( !showing ) return;
		$.get('/spectra/random', drawRandomSpectra);
	}

	function drawRandomSpectra(resp) {
		spectra = resp;

		if( resp['Common Name'] ) {
			$('#random-common-name')
				.html('<span class="random-label">Common Name:</span> '+_createAnchor('Common Name', resp))
				.find('a, .random-label')
				.textillate(textEffect);
		} else {
			$('#random-common-name').text('');
		}

		if( resp['Latin Genus'] ) {
			$('#random-genus')
				.html('<span class="random-label">Genus:</span> '+_createAnchor('Latin Genus', resp))
				.find('a, .random-label')
				.textillate(textEffect);
		} else {
			$('#random-genus').text('');
		}

		if( resp['Latin Species'] ) {
			$('#random-species')
				.html('<span class="random-label">Species:</span> '+_createAnchor('Latin Species', resp))
				.find('a, .random-label')
				.textillate(textEffect);
		} else {
			$('#random-species').text('');
		}


		$('#random-title')
			.html('<a href="#result/'+resp.ecosis.package_id+'">'+resp.ecosis.package_title+'</a>')
			.find('a')
			.textillate(textEffect);

		timeoutId = setTimeout(startRandom, 15000);
		setTimeout(function(){
			$('#random-chart')[0].className = 'animated fadeOut';
			$('#random').find('a, .random-label').textillate('out');
		}, 14000);

		if( chartIsLoaded ) {
			redrawChart();
		} else {
			waiting = true;
		}
	}

	function redrawChart() {
		if( !showing ) return;

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

	return {
		init : init,
		chartReady : chartReady
	}

})();
