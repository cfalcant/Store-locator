mapboxgl.accessToken = "pk.eyJ1IjoiY2ZhbGNhbnQiLCJhIjoiY2o5Z2UxaHRkMngzaDMzbnJ5MDd6ZmxnMiJ9.qadx8NPsZFFFlsI7cCLwqg";
// This adds the map to your page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9'
  // initial position in [lon, lat] format
  center: [-77.034084, 38.909671],
  // initial zoom
  zoom: 14
});
var stores = {
  //data from sweetgreen.geojson, downloaded above
};
map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addLayer({
    id: 'locations',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: stores
    },
    layout: {
      'icon-image': 'restaurant-15',
      'icon-allow-overlap': true,
    }
  });
});
