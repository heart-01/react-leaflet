"use client";

import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import LayerControl from "./layers/LayerControl";
import MarkerFromCSV from "./files/MarkerFromCSV";

type Props = {};

const MapContent = (props: Props) => {
  return (
    <div>
      <MapContainer style={{ width: "100%", height: "100vh" }} center={[13, 100]} zoom={5} scrollWheelZoom={true}>
        <LayerControl />
        <MarkerFromCSV />
      </MapContainer>
    </div>
  );
};

export default MapContent;
