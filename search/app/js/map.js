ESIS.map = (function() {
	var map;
	var centerMarker;
	var circle;
	//var r = 16093; // default to 10 miles
  var r = 844906; // 525 miles
	var ll = null;

	var markers = [];
	var previewQueryTimer = -1;
	var host = null;

	function init(chost) {
	    host = chost;
	    ll = new google.maps.LatLng(39.251, -97.850);
		$("#geo-filter").modal({show:false});
		if( !_addPreviewSearch() ) $("#geo-filter-current-matches-outer").css("visibility","hidden");
	}

	function show() {
		$("#geo-filter").modal('show');

		// first time, let the popup show, then init map
		if( !map ) {
			setTimeout(function(){
				_initMap();
			},500);
		} else {
			_updateLL();
			setTimeout(function(){
				google.maps.event.trigger(map, "resize");
			},500);
		}
	}

	function _updateLL() {
		ll = map.getCenter();

		// update radius
		var b = map.getBounds();
		if( b ) {
			var ll1 = new google.maps.LatLng(b.getNorthEast().lat(), ll.lng());
			var ll2 = new google.maps.LatLng(b.getSouthWest().lat(), ll.lng());

			var d = google.maps.geometry.spherical.computeDistanceBetween(ll1, ll2);
			r = (d / 2) * .75;
		}

		circle.setRadius(r);
		centerMarker.setPosition(ll);
		$("#geo-filter-current-lat").html(ll.lat().toFixed(3));
		$("#geo-filter-current-lng").html(ll.lng().toFixed(3));
		$("#geo-filter-current-radius").html(Math.round(r * .000621371)+" miles");

		// now do a quick search, if not IE8
		if( !_addPreviewSearch() ) return;


		if( previewQueryTimer != -1 ) clearTimeout(previewQueryTimer);
		for (var i = 0; i < markers.length; i++ ) markers[i].setMap(null);
		markers = [];
		$("#geo-filter-current-matches").html("Loading...");

		previewQueryTimer = setTimeout(function(){
			var query = MQE.getCurrentQuery();

			// if there is already a map filter, remove it, this is an edit
			for( var i = 0; i < query.filters.length; i++ ) {
				if( query.filters[i]['ecosis.geojson'] ) {
					query.filters.splice(i, 1);
					break;
				}
			}

			query.filters.push({
        'ecosis.geojson' : {
          $near: {
             $geometry: {
                type: "Point" ,
                coordinates: [ ll.lng(), ll.lat() ]
             },
             $maxDistance: r
          }
				}
			});

			$.ajax({
				url : (host ? host : '')+'/rest/geoPreview?filters='+encodeURIComponent(JSON.stringify(query.filters)),
				success : function(resp) {
					$("#geo-filter-current-matches").html('<span class="text-primary">'+resp.count+'</span>');
				}
			});
		},300);

	}

	function _initMap() {

		// set geo filter map
		var mapOptions = {
				center : new google.maps.LatLng(39.251, -97.850),
				zoom : 4,
				mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map($("#geo-filter-map")[0],  mapOptions);

		centerMarker = new google.maps.Marker({
			map	: map,
			position : map.getCenter(),
			title : 'Center'
		});

		// Add circle overlay and bind to marker
		circle = new google.maps.Circle({
			map : map,
			radius : r,
			fillColor : '#AA0000'
		});
		circle.bindTo('center', centerMarker, 'position');

		google.maps.event.addListener(map, 'bounds_changed', _updateLL);
		_updateLL();

		$("#geo-filter-select").on('click', function(){
			var ll = map.getCenter();
			var query = MQE.getCurrentQuery();
			query.page = 0;

      // no text filters allowed
      query.text = '';

			// if there is already a map filter, remove it, this is an edit
			for( var i = 0; i < query.filters.length; i++ ) {
				if( query.filters[i]['ecosis.geojson'] ) {
					query.filters.splice(i, 1);
					break;
				}
			}

			// $near is not allowed w/ text filter right now so using this
			// http://docs.mongodb.org/manual/reference/operator/centerSphere/#op._S_centerSphere
			query.filters.push({
        'ecosis.geojson' : {
          $near: {
             $geometry: {
                type: "Point" ,
                coordinates: [ ll.lng(), ll.lat() ]
             },
             $maxDistance: r
          }
        }
			});
			$("#geo-filter").modal('hide');
			window.location = MQE.queryToUrlString(query);
		});

		// set geolocate functionality
		if ( navigator.geolocation ) {
			$("#geo-filter-geolocate").on('click', function(){
				$(this).addClass("disabled").html('Locating...');
				navigator.geolocation.getCurrentPosition(
						function(position) {
							$("#geo-filter-geolocate").removeClass("disabled").html('Locate Me');
							map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
						},
						function(error) {
							$("#geo-filter-geolocate").removeClass("disabled").html('Locate Me');
							switch (error.code) {
								case error.PERMISSION_DENIED:
									alert("User denied the request for Geolocation.");
									break;
								case error.POSITION_UNAVAILABLE:
									alert("Location information is unavailable.");
									break;
								case error.TIMEOUT:
									alert("The request to get user location timed out.");
									break;
								case error.UNKNOWN_ERROR:
									alert("An unknown error occurred.");
									break;
							}
						}
				);
			});
		} else {
			$("#geo-filter-geolocate").remove();
		}
	}

	function _addPreviewSearch() {
		if( window.navigator.userAgent.match(/MSIE\s[78]/) ) return false;
		return true;
	}


	return {
		show : show,
		init : init
	}

})();
