import React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  return (
    <Map
      initialViewState={{
        latitude: 60.1695,  // Helsinki
        longitude: 24.9354,
        zoom: 12,
      }}
      style={{ width: '100%', height: '400px' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker latitude={60.1695} longitude={24.9354} color="red" />
    </Map>
  );
};

export default MapComponent;
