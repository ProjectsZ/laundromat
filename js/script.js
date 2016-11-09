function initialise() {
	var mapCanvas = document.getElementById('map-canvas');
	
	// Center
	var center = new google.maps.LatLng(40.725326, -73.9779426);

	// Map Options		
	var mapOptions = {
		zoom: 16,
		center: center,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
			{stylers: [{ visibility: 'simplified' }]},
			{elementType: 'labels', stylers: [{ visibility: 'on' }]}
		]
	};
	
	// Create the Map
	map = new google.maps.Map(mapCanvas, mapOptions);

	var marker1 = new Marker({
		map: map,
		position: new google.maps.LatLng(40.725326, -73.9779426),
		icon: {
			path: SQUARE_PIN,
			fillColor: '#00CCBB',
			fillOpacity: 1,
			strokeColor: '',
			strokeWeight: 0
		},
		map_icon_label: '<span class="map-icon map-icon-laundry"></span>'
	});
	
};

google.maps.event.addDomListener(window, 'load', initialise);