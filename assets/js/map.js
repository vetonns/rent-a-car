// Initialize the map
var map = L.map("map").setView([42.6026, 20.903], 9, {
  scrollWheelZoom: false, // Disable scroll wheel zoom by default
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Function to enable scroll wheel zoom
function enableScrollWheelZoom() {
  map.scrollWheelZoom.enable();
}

// Function to disable scroll wheel zoom
function disableScrollWheelZoom() {
  map.scrollWheelZoom.disable();
}

// Event listener to enable scroll wheel zoom on map click
map.on("click", enableScrollWheelZoom);

// Event listener to disable scroll wheel zoom when the mouse leaves the map
map.on("mouseout", disableScrollWheelZoom);

// Custom marker icon
var customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png", // Example URL for a custom icon
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
});

// Adding markers with a custom icon
L.marker([42.37056, 21.15528], { icon: customIcon })
  .addTo(map)
  .bindPopup("Lokacioni Ferizaj");

L.marker([42.667542, 21.166191], { icon: customIcon })
  .addTo(map)
  .bindPopup("Lokacioni Prishtin");

L.marker([42.4634, 21.4691], { icon: customIcon })
  .addTo(map)
  .bindPopup("Lokacioni Gjilan");

L.marker([42.6593, 20.288], { icon: customIcon })
  .addTo(map)
  .bindPopup("Lokacioni Peje");

L.marker([42.2139, 20.7397], { icon: customIcon })
  .addTo(map)
  .bindPopup("Lokacioni Prizren");

L.marker([42.5728, 21.0359], { icon: customIcon })
  .addTo(map)
  .bindPopup("Lokacioni AirPort");
