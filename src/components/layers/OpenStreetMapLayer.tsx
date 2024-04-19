import React from "react";
import { LayersControl, TileLayer } from "react-leaflet";

type Props = {};

const OpenStreetMapLayer = (props: Props) => {
  return (
    <LayersControl.BaseLayer name="OpenStreetMap.Mapnik" checked>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </LayersControl.BaseLayer>
  );
};

export default OpenStreetMapLayer;
