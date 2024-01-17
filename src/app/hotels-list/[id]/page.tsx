import React from "react";
import HotelDescriptionHeader from "@jektis/components/hotel-description/hotel-description-header";
import HotelImages from "@jektis/components/hotel-description/hotel-images";
import HotelDetailsNavbar from "@jektis/components/hotel-description/hotel-details-navbar";
import UpdateReservation from "@jektis/components/hotel-description/update-reservation";
import HotelReservationTable from "@jektis/components/hotel-description/hotel-reservation-table";
import Amenagement from "@jektis/components/hotel-description/amenagement";
import { getHotelById } from "@jektis/services";
import Panorama from "@jektis/components/hotel-description/panorama";

export default function HotelDetailsIndex({
  params,
}: {
  params: { id: string };
}): React.ReactNode {
  const hotel = getHotelById(params.id);
  return (
    <div className="bg-white md:py-8 pb-8 px-10">
      <HotelDescriptionHeader {...hotel} />
      <p className="mt-12 tracking-wide text-black text-2xl">
        {hotel.cityName}
      </p>
      <p className="text-black mb-8">
        Minimum stay: {hotel.minimumStay} Nuités /{" "}
        {hotel.inclusive && "All inclusive /"} {hotel.detailEnfant}
      </p>
      <div className="mb-12">
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
