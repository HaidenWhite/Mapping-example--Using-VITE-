import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const map = L.map("map1");

const attrib = "Copyright OpenStreetMap contributors, Open Database License";

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: attrib
    }
).addTo(map);

const homepos = L.latLng(50.85, -1.2);
L.marker(homepos).addTo(map);

map.setView(L.latLng(50.9, -1.4), 14);
map.on("click", e => {
    const pos = e.latlng;
    alert(`You clicked at:${pos.lat} ${pos.lng}`);
    const marker = L.marker(pos).addTo(map);
    const text = prompt('Please enter some text');
    if(text !== null) {
        marker.bindPopup(text);
    }
});