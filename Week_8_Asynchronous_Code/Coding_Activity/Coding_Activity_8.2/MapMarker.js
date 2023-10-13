function createMapMarker() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';


  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.13354927705186,11.026073866222179],
    zoom: 12,
  });

  var marker = new mapboxgl.Marker()
  .setLngLat([77.13354927705186,11.026073866222179])
  .addTo(map);
}


window.onload = () => {
  createMapMarker();
};