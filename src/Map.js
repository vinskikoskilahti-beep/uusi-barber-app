import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Luodaan selkeä marker (esim. kultainen hiustenleikkuumerkki)
const barberIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // voit vaihtaa omaan ikoniin
  iconSize: [30, 30], // koko
  iconAnchor: [15, 30], // missä kohta on tarkka sijainti kartalla
});

const BarberMap = ({ barbers }) => {
  // Keskitetään kartta Turkuun (Kauppatori)
  const centerLat = 60.4515;
  const centerLng = 22.2666;

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={13}
      style={{ width: "100%", height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Marker jokaiselle parturille ilman tekstiä */}
      {barbers.map((barber) => (
        <Marker
          key={barber.id}
          position={[barber.latitude, barber.longitude]}
          icon={barberIcon}
        />
      ))}
    </MapContainer>
  );
};

export default BarberMap;