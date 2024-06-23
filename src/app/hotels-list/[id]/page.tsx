import React from "react";
import HotelDescriptionHeader from "@jektis/components/hotel-description/hotel-description-header";
import HotelImages from "@jektis/components/hotel-description/hotel-images";
import HotelDetailsNavbar from "@jektis/components/hotel-description/hotel-details-navbar";
import UpdateReservation from "@jektis/components/hotel-description/update-reservation";
import HotelReservationTable from "@jektis/components/hotel-description/hotel-reservation-table";
import { getHotelById } from "@jektis/actions/hotel-details-actions";

export default function HotelDetailsIndex({
  params,
}: {
  params: { id: string };
}): React.ReactNode {
  const hotel = getHotelById(params.id);
  return (
    <div className="bg-white lg:py-8 lg:pb-8 lg:mt-0 mt-12 px-10">
      <HotelDescriptionHeader {...hotel} />
      <p className="lg:mt-12 mt-4 text-center lg:text-start tracking-wide text-black text-2xl">
        {hotel.cityName}
      </p>
      <p className="text-black lg:mb-8 mb-2 lg:text-start text-center">
        Minimum stay: {hotel.minimumStay} Nuités /{" "}
        {hotel.inclusive && "All inclusive /"} {hotel.detailEnfant}
      </p>
      <div className="mb-2">
        <HotelImages images={hotel.images} />
      </div>
      <br />
      <HotelDetailsNavbar />
      {/*reservation*/}
      <UpdateReservation />
      {/*table*/}
      <HotelReservationTable />
    </div>
  );
}
