import React from "react";
import { LayersControl } from "react-leaflet";
import OpenStreetMapLayer from "./OpenStreetMapLayer";
import WorldImageryLayer from "./WorldImageryLayer";
import WorldPhysicalLayer from "./WorldPhysicalLayer";

type Props = {};

const LayerControl = (props: Props) => {
  return (
    <LayersControl position="topright">
      <OpenStreetMapLayer />
      <WorldImageryLayer />
      <WorldPhysicalLayer />
    </LayersControl>
  );
};

export default LayerControl;
