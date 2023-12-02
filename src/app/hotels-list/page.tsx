import React from "react";
import HotelsFilter from "@jektis/components/hotels-list/hotels-list-filter";
import HotelsList from "@jektis/components/hotels-list/hotels-list";
import CustomPage from "@jektis/components/generic/CustomPage";

export default function PageIndex(): React.ReactNode {
  return (
    <CustomPage>
      <HotelsFilter />
      <div className="mb-8 mt-8 ">
        <HotelsList />
      </div>
    </CustomPage>
  );
}
