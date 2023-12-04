import React from "react";
import HotelDescriptionHeader from "@jektis/components/hotel-description/hotel-description-header";
import HotelImages from "@jektis/components/hotel-description/hotel-images";
import HotelDetailsNavbar from "@jektis/components/hotel-description/hotel-details-navbar";
import UpdateReservation from "@jektis/components/hotel-description/update-reservation";
import HotelReservationTable from "@jektis/components/hotel-description/hotel-reservation-table";
import Amenagement from "@jektis/components/hotel-description/amenagement";
import { getHotelById } from "@jektis/services";

export default function HotelDetailsIndex({
  params,
}: {
  params: { id: string };
}): React.ReactNode {
  const hotel = getHotelById(params.id);
  return (
    <div className="bg-white px-4">
      <HotelDescriptionHeader {...hotel} />
      <p className="mt-12 tracking-wide text-black text-2xl">
        {hotel.cityName}
      </p>
      <p className="text-black mb-8">
        Minimum stay: {hotel.minimumStay} Nuités /{" "}
        {hotel.inclusive && "All inclusive /"} {hotel.detailEnfant}
      </p>
      <HotelImages />
      <HotelDetailsNavbar />
      {/*reservation*/}
      <UpdateReservation />
      {/*table*/}
      <HotelReservationTable />

      <Amenagement />
      <div id="prestation" className="mr-32">
        <strong className="text-[#144e8b] text-3xl">
          PRESTATIONS ET SERVICES
        </strong>
        <p className="text-black text-sm mt-8 pb-24">
          L{"'"}iberostar Diar El Andalous est situé sur la coté
          médiaterranéenne à Sousse. Il surplombe les plages de sable fin et
          dispose d{"'"}une piscine intérieure et extérieure, d{"'"}un spa ainsi
          que d{"'"}une piscine et d{"'"}une aire de jeux pour enfants
        </p>
      </div>
    </div>
  );
}
