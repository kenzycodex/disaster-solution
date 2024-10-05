'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Box from '@mui/material/Box';
import { Icon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { FaMapMarkerAlt } from 'react-icons/fa';  

interface DisasterMapProps {
  center?: [number, number];
  zoom?: number;
  markers?: { position: [number, number]; description: string }[];
  sx?: any;
}

// Function to create a custom disaster icon using react-icons (FontAwesome Map Marker)
const createDisasterIcon = () => {
  const iconMarkup = renderToStaticMarkup(<FaMapMarkerAlt style={{ color: 'red', fontSize: '40px' }} />);
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(iconMarkup)}`,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -30],
  });
};

const disasterIcon = createDisasterIcon();

export const DisasterMap: React.FC<DisasterMapProps> = ({
  center = [9.082, 8.6753], // Default center is Nigeria
  zoom = 6,
  markers = [],
  sx,
}) => {
  useEffect(() => {
    // Placeholder for possible real-time data updates or live connections
  }, []);

  return (
    <Box
      sx={{
        ...sx,
        height: { xs: '300px', sm: '400px', md: '500px', lg: '600px' },
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true} // Enable scroll zoom for better UX
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={disasterIcon}>
            <Popup>{marker.description}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

// Example usage of the DisasterMap component
const exampleMarkers = [
  { position: [9.0765, 7.3986], description: 'Disaster Location 1 in Nigeria' },
  { position: [6.5244, 3.3792], description: 'Disaster Location 2 in Lagos' },
];

export const ExampleDisasterMapContainer = () => (
  <DisasterMap markers={exampleMarkers} sx={{ borderRadius: '10px', boxShadow: 2 }} />
);
