"use client";

import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import LayerControl from "./layers/LayerControl";

type Props = {};

const MapContent = (props: Props) => {
  return (
    <div>
      <MapContainer style={{ width: "100%", height: "100vh" }} center={[13, 100]} zoom={5} scrollWheelZoom={true}>
        <LayerControl />
      </MapContainer>
    </div>
  );
};

export default MapContent;
