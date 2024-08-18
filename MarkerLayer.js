import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const MarkerLayer = ({ points }) => {
  return (
    <>
      {points.map((point, index) => (
        <Marker key={index} position={[point.lat, point.lng]}>
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default MarkerLayer;
