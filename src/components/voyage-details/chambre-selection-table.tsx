import React from "react";
import ChambreReservationListItem from "@jektis/components/voyage-details/chambre-reservation-list-item";

export default function ChambreSelectionTable(): React.ReactNode {
  return (
    <div>
      <strong className="text-black">Sélectionner vos chambres :</strong>
      <div className="flex flex-col">
        <div className="grid py-2 mr-2 grid-cols-11 rounded-xl shadow-sm mt-8 bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
          <button
            type="button"
            className="col-span-3 lg:col-span-2 px-4 py-2  text-xl font-medium text-white border-r-2 border-white"
          >
            <strong>Nombre</strong>
          </button>
          <button
            type="button"
            className="col-span-6 lg:col-span-7 flex-col pl-8  items-start justify-center text-xl w-full font-medium text-white border-r-2 border-white"
          >
            <div className="pt-6 sm:pt-6 lg:pt-5 xl:pt-2">
              <strong>Désignation</strong>
            </div>
          </button>
          <button
            type="button"
            className=" col-span-2 md:px-4 py-2 flex flex-row items-start text-xl font-medium text-white border-white rounded-e-lg"
          >
            <strong className="lg:pl-4">Somme totale</strong>
          </button>
        </div>
        {/*<div className="grid mr-2 grid-cols-11 rounded-md shadow-sm mt-1 bg-[#ececec]">*/}
        {/*  <div className="pt-8 col-span-2 px-4 py-2  text-xl font-medium text-white border-r-2 border-white "></div>*/}
        {/*  <div className="col-span-7 flex flex-row gap-4 items-center pl-4 justify-start px-2 py-2 text-xl w-full font-medium text-white border-r-2 border-white"></div>*/}
        {/*  <div className="col-span-2 pt-8 px-4 py-2 flex flex-col items-end text-xl font-medium text-white"></div>*/}
        {/*</div>*/}
        <ChambreReservationListItem />
        <ChambreReservationListItem />
        <ChambreReservationListItem />
      </div>
      <div className="mt-4 flex flex-row justify-end">
        <button className="bg-gradient-to-r px-4 py-2 border-transparent rounded-xl flex flex-row items-baseline gap-2 from-[#004fa6] to-[#02c9b2]">
          <p className="">Total 2 Adultes :</p>
          <strong className="text-3xl">3580</strong>
          <sup className="text-sm">DT</sup>
        </button>
      </div>
    </div>
  );
}
