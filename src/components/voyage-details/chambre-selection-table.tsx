"use client";

import React from "react";
import ChambreReservationListItem from "@jektis/components/voyage-details/chambre-reservation-list-item";
import { Chambre } from "@jektis/types";
import { NextArrowWhite } from "@jektis/components/icons";
export default function ChambreSelectionTable({
  chambres,
}: {
  chambres: Chambre[];
}): React.ReactNode {
  let reservation: any = {};
  chambres.forEach((chambre) => {
    reservation[chambre.title] = 0;
  });
  const [chambresData, setChambresData] = React.useState(reservation);
  function updateReservation(type: string, quantity: number) {
    setChambresData((prevData: any) => ({ ...prevData, [type]: quantity }));
  }
  function getTotalPrice(): number {
    let price = 0;
    Object.entries(chambresData).forEach(([key, value]) => {
      const unitPrice = chambres.find((c) => c.title === key)?.unitPrice;
      price += (unitPrice ?? 0) * (value as number);
    });
    return price;
  }
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
        {chambres.map((chambre, index) => (
          <ChambreReservationListItem
            key={index}
            title={chambre.title}
            qty={chambresData[chambre.title]}
            onUpdate={(qty: number) => updateReservation(chambre.title, qty)}
            price={chambre.unitPrice}
          />
        ))}
      </div>
      <div className="flex text-white flex-row justify-end">
        <div className="flex leading-none flex-row text-[18px] border rounded-xl justify-end font-semibold items-end px-4 py-4 bg-gradient-to-r from-[#004fa6] to-[#02c9b2] mt-8 w-fit">
          Total :{" "}
          <div className="flex flex-row">
            <p className="md:text-[32px] leading-none font-extrabold ml-2">
              {"  "}
              {getTotalPrice().toFixed(0)}
            </p>
            <p className="leading-none font-medium">DT</p>
          </div>
        </div>
      </div>
      <div className="flex text-white flex-row justify-end">
        <div className="flex flex-row border rounded-xl justify-center items-center gap-4 px-8 py-2 bg-[#9d9d9d] mt-8 w-fit">
          <strong className="text-xl">Réserver</strong>
          <NextArrowWhite width={25} height={25} />
        </div>
      </div>
    </div>
  );
}
