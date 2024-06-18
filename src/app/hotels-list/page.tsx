"use client";

import React from "react";
import HotelsFilter from "@jektis/components/hotels-list/hotels-list-filter";
import HotelsList from "@jektis/components/hotels-list/hotels-list";
import { getHotels } from "@jektis/services";
import { HotelCardProps } from "@jektis/types/hotel_class";
import HotelsSideFilter from "@jektis/components/hotels-list/hotels-filter";
import Pagination from "@jektis/components/generic/pagination";
import { FilterSection } from "@jektis/types/filter-type";
import Stars from "@jektis/components/generic/stars";
import SearchSideFilter from "@jektis/components/generic/SearchSideFilter";
import { HOTEL_SIDE_FILTER_DATA } from "@jektis/consts/side-filters-data";

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
