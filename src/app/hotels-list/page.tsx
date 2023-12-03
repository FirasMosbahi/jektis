import React from "react";
import HotelsFilter from "@jektis/components/hotels-list/hotels-list-filter";
import HotelsList from "@jektis/components/hotels-list/hotels-list";
import CustomPage from "@jektis/components/generic/CustomPage";
import { HotelCategory } from "@jektis/types";
import { getHotels, getHotelsByCategory } from "@jektis/services";
import HotelCardProps from "@jektis/types/hotel_class";

export default function PageIndex({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): React.ReactNode {
  const category = searchParams?.category;
  const hotels: HotelCardProps[] = getHotels(category);

  return (
    <CustomPage>
      <HotelsFilter />
      <div className="mb-8 mt-8 ">
        <HotelsList hotels={hotels} />
      </div>
    </CustomPage>
  );
}
