var map = L.map("map").setView([42.6026, 20.903], 9, {
  scrollWheelZoom: false,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function enableScrollWheelZoom() {
  map.scrollWheelZoom.enable();
}

function disableScrollWheelZoom() {
  map.scrollWheelZoom.disable();
}

map.on("click", enableScrollWheelZoom);

map.on("mouseout", disableScrollWheelZoom);

var customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

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
