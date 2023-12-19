"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Localisation } from "@jektis/components/icons";

import "leaflet/dist/leaflet.css";

export default function Address({
  long,
  lat,
}: {
  long: number;
  lat: number;
}): React.ReactNode {
  const position = [36.8545936, 10.1836798];
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
