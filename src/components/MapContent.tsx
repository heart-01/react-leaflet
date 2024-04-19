"use client";

import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

type Props = {};

const MapContent = (props: Props) => {
  return (
    <div>
      <MapContainer style={{ width: "100%", height: "100vh" }} center={[13, 100]} zoom={5} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default MapContent;
