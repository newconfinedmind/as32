import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';


function MapExample() {
  const position = [35.86657378622825, 128.52440758716693]; // 지정 위치

  return (
    <MapContainer center={position} zoom={19} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          경원고등학교 <br /> 대구광역시 달서구 새방로 77(용산동 6번지)
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapExample;
