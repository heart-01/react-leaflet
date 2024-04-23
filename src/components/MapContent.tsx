"use client";

import React from "react";
import { MapContainer, Polygon, TileLayer, useMap } from "react-leaflet";
import LayerControl from "./layers/LayerControl";
import MarkerFromCSV from "./files/MarkerFromCSV";
import { LatLngExpression } from "leaflet";

type Props = {};

const MapContent = (props: Props) => {
  const polygon: LatLngExpression[] = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

  return (
    <div>
      <MapContainer style={{ width: "100%", height: "100vh" }} center={[13, 100]} zoom={5} scrollWheelZoom={true}>
        <LayerControl />
        <MarkerFromCSV />
        <Polygon positions={polygon} />
      </MapContainer>
    </div>
  );
};

export default MapContent;
