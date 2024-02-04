"use client";

import React from "react";
import HotelsFilter from "@jektis/components/hotels-list/hotels-list-filter";
import HotelsList from "@jektis/components/hotels-list/hotels-list";
import CustomPage from "@jektis/components/generic/CustomPage";
import { HotelCategory } from "@jektis/types";
import { getHotels, getHotelsByCategory } from "@jektis/services";
import HotelCardProps from "@jektis/types/hotel_class";
import HotelsSideFilter from "@jektis/components/hotels-list/hotels-filter";
import Pagination from "@jektis/components/generic/pagination";

export default function PageIndex({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): React.ReactNode {
  const category = searchParams?.category;
  const city = searchParams?.city;
  const hotels: HotelCardProps[] = getHotels(category, city);
  const page = Number.parseInt(
    typeof searchParams?.page === "string" ? searchParams?.page : "0",
  );
  const hotelsToShow = hotels.slice(page * 3, (page + 1) * 3);
  return (
    <div className="w-full">
      <HotelsFilter />
      <div className="w-full mt-8 flex flex-row gap-8">
        <HotelsSideFilter />
        <div className="w-full bg-white pb-8">
          <HotelsList hotels={hotelsToShow} />
          <Pagination pagesNumber={hotels.length / 3 - 1} />
        </div>
      </div>
    </div>
  );
}
