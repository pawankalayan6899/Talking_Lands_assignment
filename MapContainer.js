import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerLayer from './MarkerLayer';
import PolygonLayer from './PolygonLayer';
import { getSpatialData } from '../services/api'; // Corrected import path
import 'leaflet/dist/leaflet.css';

const MyMap = () => {
  const [data, setData] = useState({ points: [], polygons: [] });

  useEffect(() => {
    async function fetchData() {
      const spatialData = await getSpatialData();
      setData(spatialData);
    }
    fetchData();
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerLayer points={data.points} />
      <PolygonLayer polygons={data.polygons} />
    </MapContainer>
  );
};

export default MyMap;
