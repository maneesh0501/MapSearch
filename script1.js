  mapboxgl.accessToken = 'pk.eyJ1IjoibWFuaXNhbmEiLCJhIjoiY2toZHRocXptMG9mbDJxbjEwaXY3emZvOCJ9.SrxFKfHWUVcC0F7JOtrTVg';

  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

  function successLocation(position) {
  	console.log(position)
  	setupMap([position.coords.longitude, position.coords.latitude])
  }
  function errorLocation(position) {
  	setupMap([-2.24, 53.48])
  }

  function setupMap(center) {
	  const map = new mapboxgl.Map({
	    container: 'map',
	    style: 'mapbox://styles/mapbox/streets-v11',
	    center: center,
	    zoom: 8
	  });

	  map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);

// const nav = new mapboxg1.NavigationControl()
// map.addControl(nav)
}