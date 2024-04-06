import React from "react";
import { NextArrowWhite } from "@jektis/components/icons";
import HotelReservationTableItem from "@jektis/components/hotel-description/hotel-reservation-table-item";

export default function HotelReservationTable(): React.ReactNode {
  return (
    <div className="flex flex-col mt-12">
      <div className="grid mr-2 grid-cols-11 rounded-md shadow-sm mt-8 bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
        <div className="col-span-3 py-2 text-center text-[18px] md:text-xl text-sm font-medium text-white border rounded-s-lg border-white">
          Type de chambre
        </div>
        <div className="lg:col-span-6 col-span-5 py-2 px-8 text-sm md:text-xl w-full font-medium text-white border border-b border-white">
          Services
        </div>
        <div className="lg:col-span-2 col-span-3 py-2 text-[18px] text-center text-sm md:text-xl font-medium text-white border border-white rounded-e-lg">
          Total 1 Nuitées
        </div>
      </div>
      <HotelReservationTableItem />
      <HotelReservationTableItem />
      <div className="flex text-white items-end flex-col gap-4 pt-4">
        <div className="flex flex-row lg:text-[16px] text-[12px] lg:w-72 w-48 border rounded-xl justify-center items-end py-4 bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
          Total 2 adultes :{" "}
          <strong className="md:text-2xl ml-2">
            {"  "}
            176.000<sup className="font-normal pl-0.5">DT</sup>
          </strong>
        </div>

        <div className="flex flex-row lg:w-72 w-48 mb-2 border rounded-xl justify-center items-center gap-4 py-2 bg-[#9d9d9d]">
          <strong className="lg:text-xl text-[12px]">
            Envoyer votre demande
          </strong>
          <NextArrowWhite className="lg:size-8 size-4" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}
