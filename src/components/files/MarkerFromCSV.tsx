/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Marker, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

type Props = {};

interface CSVData {
  long: number;
  lat: number;
  Code: string;
  "Name Eng": string;
  "Name Thai": string;
  "Image URL": string;
  Y2554: number;
  Y2555: number;
}

const MarkerFromCSV = (props: Props) => {
  const [data, setData] = useState<CSVData[]>([]);

  const readCSVFile = async () => {
    const file = "/assets/Airport.csv";
    const data = await fetch(file);
    const text = await data.text();
    const json = Papa.parse(text, { header: true }).data as CSVData[];
    const filterData = json.filter((item: CSVData) => item.lat && item.long);
    setData(filterData);
  };

  const renderMarker = (airport: CSVData) => (
    <Marker key={airport.Code} position={[airport.lat, airport.long]}>
      <Popup className="my-popup" >
        <div className="text-md">{airport["Name Thai"]}</div>
        <img src={airport["Image URL"]} alt={airport["Name Thai"]} />
      </Popup>
    </Marker>
  );

  useEffect(() => {
    readCSVFile();
  }, []);

  return data && data.map((airport) => renderMarker(airport));
};

export default MarkerFromCSV;
