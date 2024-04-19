import React from "react";
import { LayersControl, TileLayer } from "react-leaflet";

type Props = {};

const WorldImageryLayer = (props: Props) => {
  return (
    <LayersControl.BaseLayer name="Esri.WorldPhysical">
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}" />
    </LayersControl.BaseLayer>
  );
};

export default WorldImageryLayer;
