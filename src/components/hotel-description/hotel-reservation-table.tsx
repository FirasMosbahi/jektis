import React from "react";
import { NextArrowWhite } from "@jektis/components/icons";
import HotelReservationTableItem from "@jektis/components/hotel-description/hotel-reservation-table-item";

export default function HotelReservationTable(): React.ReactNode {
  return (
    <div className="flex flex-col mt-12">
      <div className="grid mr-2 grid-cols-11 inline-flex rounded-md shadow-sm mt-8 bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
        <button
          type="button"
          className="col-span-3 px-4 py-2  md:text-xl text-sm font-medium text-white border rounded-s-lg border-white"
        >
          <strong>Type de chambre</strong>
        </button>
        <button
          type="button"
          className="col-span-6 flex-col pl-8 items-star text-sm px-4 py-2 md:text-xl w-full font-medium text-white border border-b border-white"
        >
          <strong>Services</strong>
        </button>
        <button
          type="button"
          className=" col-span-2 px-4 py-2 flex flex-row text-sm items-start md:text-xl font-medium text-white border border-white rounded-e-lg"
        >
          <strong className="md:pl-4">Total 1 Nuitées</strong>
        </button>
      </div>
      <HotelReservationTableItem />
      <HotelReservationTableItem />
      <div className="flex flex-row justify-end">
        <div className="flex flex-row border rounded-xl justify-end items-end px-8 py-4 bg-gradient-to-r from-[#004fa6] to-[#02c9b2] mt-8 w-fit">
          Total 2 adultes :{" "}
          <strong className="md:text-2xl ml-2">
            {"  "}
            176.000<sup>DT</sup>
          </strong>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="flex flex-row border rounded-xl justify-center items-center gap-4 px-8 py-2 bg-[#9d9d9d] mt-8 w-fit">
          <strong className="text-xl">Je réserve</strong>
          <NextArrowWhite width={25} height={25} />
        </div>
      </div>
    </div>
  );
}
