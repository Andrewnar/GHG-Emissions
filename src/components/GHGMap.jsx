import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./GHGMap.css";

const GHGMap = ({ countries }) => {
  console.log(countries);
  return (
    <MapContainer style={{ height: "90vh" }} zoom={2} center={[20, 100]}>
      <GeoJSON data={countries} />
    </MapContainer>
  );
};

export default GHGMap;
