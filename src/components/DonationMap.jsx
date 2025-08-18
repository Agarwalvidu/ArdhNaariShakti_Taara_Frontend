import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./DonationMap.css";


const DonationMap = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    fetch("/api/donation-centers")
      .then((res) => res.json())
      .then((data) => setCenters(data))
      .catch((err) => console.error(err));
  }, []);

  const icons = {
    Clothes: new L.Icon({
      iconUrl: "/icons/clothes.png",
      iconSize: [32, 32],
    }),
    Food: new L.Icon({
      iconUrl: "/icons/food.png",
      iconSize: [32, 32],
    }),
    Shelter: new L.Icon({
      iconUrl: "/icons/shelter.png",
      iconSize: [32, 32],
    }),
    Hygiene: new L.Icon({
      iconUrl: "/icons/hygiene.png",
      iconSize: [32, 32],
    }),
  };

  return (
    <div className="w-full h-[600px]">
      <MapContainer center={[21.2101, 81.4285]} zoom={6} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {centers.map((center) => (
          <Marker
            key={center.id}
            position={[center.coordinates.lat, center.coordinates.lng]}
            icon={icons[center.type[0]] || icons.Clothes}
          >
            <Popup>
              <b>{center.name}</b><br />
              {center.address}<br />
              Type: {center.type.join(", ")} <br />
              Status: {center.availability} <br />
              {center.trans_friendly ? "🏳️‍⚧️ Trans-friendly" : ""}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DonationMap;

