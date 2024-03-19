import { Calendar, NextArrow } from "@jektis/components/icons";
import React from "react";

export default function UpdateReservation(): React.ReactNode {
  return (
    <div className="mt-4 w-full">
      <strong className="text-[#17547a] text-3xl">Tarifs & Réservations</strong>
      <div className="flex flex-col lg:flex-row w-full lg:items-center justify-center gap-4 mt-6">
        <div className="flex flex-col justify-between lg:gap-8 lg:items-center w-full lg:flex-row text-black items-start lg:border lg:border-[#9d9d9d] lg:rounded px-4 py-2">
          <div className="flex flex-row gap-12 lg:w-fit">
            <div className="flex sm:flex-row flex-col items-center gap-8 border border-[#9d9d9d] rounded lg:border-transparent px-8 py-4 lg:mb-0 mb-8 lg:px-0 lg:py-0">
              <div className="flex flex-row gap-4 items-center">
                <Calendar width={28} height={28} />
                <div className="flex text-[#9d9d9d] text-xs flex-col mr-6">
                  <p>Du Jeudi</p>
                  <p>19/10/2023</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <NextArrow width={28} height={28} />
                <div className="flex text-[#9d9d9d] text-xs lg:w-fit flex-col">
                  <p className="w-full lg:text-nowrap">Au Vendredi</p>
                  <p>20/10/2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4 items-center border border-[#9d9d9d] rounded lg:border-transparent px-8 py-4 lg:px-0 lg:py-0">
            <p className="bg-[#9d9d9d] text-xs text-center text-white p-1 w-fit rounded text-nowrap">
              1 Nuitées
            </p>
            <strong className="text-center">
              1 chambre: 2 adultes + 0 enfants
            </strong>
          </div>
        </div>
        <div className="w-48 lg:pl-0 pl-4">
          <button className="bg-[#9d9d9d] text-white px-4 py-0.5 rounded-lg">
            <strong>Mettre à jour</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
