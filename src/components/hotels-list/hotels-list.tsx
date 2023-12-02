"use client";

import React from "react";
import { getHotels } from "@jektis/services";
import HotelCard from "@jektis/components/hotels-list/hotel-card";
import { useRouter } from "next/navigation";

export default function HotelsList(): React.ReactNode {
  const router = useRouter();
  function navigate(id: number) {
    router.push(`/hotels-list/${id}`);
  }
  const hotels = getHotels();
  return (
    <div className="bg-white lg:grid xl:grid-cols-2 grid-cols-1 md:flex md:flex-col sm:flex sm:flex-col gap-16 md:gap-8 px-4 py-8">
      {hotels.map((hotel, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => navigate(hotel.id)}
        >
          <HotelCard hotel={hotel} />
        </div>
      ))}
    </div>
  );
}
