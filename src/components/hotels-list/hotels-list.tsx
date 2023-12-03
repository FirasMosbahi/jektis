import React from "react";
import HotelCard from "@jektis/components/hotels-list/hotel-card";
import Link from "next/link";
import HotelCardProps from "@jektis/types/hotel_class";

export default function HotelsList({
  hotels,
}: {
  hotels: HotelCardProps[];
}): React.ReactNode {
  return (
    <div className="bg-white lg:grid xl:grid-cols-2 grid-cols-1 md:flex md:flex-col sm:flex sm:flex-col gap-16 md:gap-8 px-4 py-8">
      {hotels.map((hotel, index) => (
        <Link
          key={index}
          className="cursor-pointer"
          href={`/hotels-list/${hotel.id}`}
        >
          <HotelCard hotel={hotel} />
        </Link>
      ))}
    </div>
  );
}
