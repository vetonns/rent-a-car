// Initialize the map
var map = L.map("map").setView([42.6026, 20.903], 9, {
  scrollWheelZoom: false, // Disable scroll wheel zoom by default
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Function to enable scroll wheel zoom when the map is clicked
function enableScrollWheelZoom() {
  map.scrollWheelZoom.disable();
}

// Event listener to enable scroll wheel zoom when the map is clicked
map.on("click", enableScrollWheelZoom);

// Function to disable scroll wheel zoom when the map is not clicked
function disableScrollWheelZoom() {
  map.scrollWheelZoom.disable();
}

// Event listener to disable scroll wheel zoom when the map loses focus (clicked elsewhere on the page)
map.on("mouseout", disableScrollWheelZoom);

// Custom marker icon
var customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png", // Example URL for a custom icon
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
});

// Adding a marker with a custom icon

L.marker([42.37056, 21.15528], { icon: customIcon })
  .addTo(map)
  .bindPopup("Lokacioni Ferizaj")
  .openPopup();

L.marker([42.667542, 21.166191], { icon: customIcon })
  .addTo(map)
  .bindPopup("Lokacioni Prishtin")
  .openPopup();
