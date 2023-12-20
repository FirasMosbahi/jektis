"use client";

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";

export default function Address({
  long,
  lat,
}: {
  long: number;
  lat: number;
}): React.ReactNode {
  const position: LatLngTuple = [36.8545936, 10.1836798];
  return (
    <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/*<Marker position={position}>*/}
      {/*  <Popup>*/}
      {/*    <Localisation />*/}
      {/*  </Popup>*/}
      {/*</Marker>*/}
    </MapContainer>
  );
}
