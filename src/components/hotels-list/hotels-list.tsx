"use client";

import React from "react";
import HotelCard from "@jektis/components/hotels-list/hotel-card";
import Link from "next/link";
import { HotelCardProps } from "@jektis/types/hotel_class";
import MiniHotelCard from "@jektis/components/mobile-home-page/MiniHotelCard";

export default function HotelsList({
  hotels,
}: {
  hotels: HotelCardProps[];
}): React.ReactNode {
  return (
    <div className="bg-white flex flex-col gap-16 md:gap-8 px-4 w-full py-8">
      {hotels.map((hotel, index) => (
        <Link
          key={index}
          className="cursor-pointer"
          href={`/hotels-list/${hotel.id}`}
        >
          <div className="lg:block hidden">
            <HotelCard hotel={hotel} />
          </div>
          <div className="lg:hidden">
            <MiniHotelCard
              isFullScreen={true}
              isHorizontal={false}
              hotelProps={hotel}
              linkBase="/hotels-list/"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
