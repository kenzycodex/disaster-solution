'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';
import Box from '@mui/material/Box';
import RoomIcon from '@mui/icons-material/Room';
import { renderToStaticMarkup } from 'react-dom/server';
import type { SxProps } from '@mui/material/styles';
import 'leaflet-fullscreen'; // Adding full-screen functionality
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'; // Full-screen styles

interface DisasterMapProps {
  center?: [number, number];
  zoom?: number;
  markers?: { position: [number, number]; description: string }[];
  sx?: SxProps;
}

// Custom disaster icon using Material UI RoomIcon
const createDisasterIcon = () => {
  const iconMarkup = renderToStaticMarkup(
    <RoomIcon style={{ color: 'red', fontSize: '40px' }} />
  );
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(iconMarkup)}`,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -30],
  });
};

const disasterIcon = createDisasterIcon();

// Full-screen button hook
const FullscreenButton = () => {
  const map = useMap();
  useEffect(() => {
    L.control.fullscreen().addTo(map);
  }, [map]);
  return null;
};

export const DisasterMap: React.FC<DisasterMapProps> = ({
  center = [9.082, 8.6753], // Default center set to Nigeria
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
        borderRadius: '10px',
        boxShadow: 2,
      }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true} // Enabling scroll wheel zoom for a better experience
        className="leaflet-container" // Ensuring the map fits the box correctly
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <FullscreenButton /> {/* Adding the full-screen button */}
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={disasterIcon}>
            <Popup>{marker.description}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

// Example usage of the DisasterMap component:
const exampleMarkers = [
  { position: [9.0765, 7.3986], description: 'Disaster Location 1 in Nigeria' },
  { position: [6.5244, 3.3792], description: 'Disaster Location 2 in Lagos' },
];

export const ExampleDisasterMapContainer = () => (
  <DisasterMap markers={exampleMarkers} />
);