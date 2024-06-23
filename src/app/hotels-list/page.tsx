"use client";

import React from "react";
import HotelsFilter from "@jektis/components/hotels-list/hotels-list-filter";
import HotelsList from "@jektis/components/hotels-list/hotels-list";
import { HotelCardProps } from "@jektis/types/hotel_class";
import Pagination from "@jektis/components/generic/pagination";
import SearchSideFilter from "@jektis/components/generic/SearchSideFilter";
import { HOTEL_SIDE_FILTER_DATA } from "@jektis/consts/side-filters-data";
import { getHotels } from "@jektis/actions/hotel-search-actions";

export default function PageIndex({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): React.ReactNode {
  const hotels: HotelCardProps[] = getHotels(
    searchParams?.category,
    searchParams?.city,
  );
  const page = Number.parseInt(
    typeof searchParams?.page === "string" ? searchParams?.page : "0",
  );
  const hotelsToShow = hotels.slice(page * 3, (page + 1) * 3);
  return (
    <div className="w-full">
      <HotelsFilter />
      <div className="w-full mt-8 flex lg:flex-row flex-col gap-8">
        <SearchSideFilter
          filters={HOTEL_SIDE_FILTER_DATA}
          nameFilterPlaceholder="nom de l'hotel"
        />
        <div className="w-full bg-white pb-8">
          <HotelsList hotels={hotelsToShow} />
          <Pagination pagesNumber={hotels.length / 3 - 1} />
        </div>
      </div>
    </div>
  );
}
