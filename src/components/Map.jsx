import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ users }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  };

  const center = {
    lat: 20.5937, // Default center (e.g., India)
    lng: 78.9629,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
      >
        {/* Add markers for each user */}
        {users.map((user, index) => (
          <Marker
            key={index}
            position={{ lat: user.location.lat, lng: user.location.lng }}
            label={user.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
