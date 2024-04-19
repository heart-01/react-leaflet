import React from "react";
import { LayersControl, TileLayer } from "react-leaflet";

type Props = {};

const WorldPhysicalLayer = (props: Props) => {
  return (
    <LayersControl.BaseLayer name="Esri.WorldImagery">
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
    </LayersControl.BaseLayer>
  );
};

export default WorldPhysicalLayer;
