import { Calendar, NextArrow } from "@jektis/components/icons";
import React from "react";

export default function UpdateReservation(): React.ReactNode {
  return (
    <div className="mt-4 w-full">
      <strong className="text-[#17547a] text-3xl">Tarifs & Réservations</strong>
      <div className="flex flex-col xl:flex-row w-full xl:items-center justify-center gap-4 mt-6">
        <div className="flex flex-col justify-around xl:gap-8 xl:items-center w-full xl:flex-row text-black items-start xl:border xl:border-[#9d9d9d] xl:rounded px-4 py-2">
          <div className="flex flex-row gap-12 xl:w-fit">
            <div className="flex sm:flex-row flex-col items-center gap-4 border border-[#9d9d9d] rounded xl:border-transparent px-8 py-4 xl:mb-0 mb-8 xl:px-0 xl:py-0">
              <div className="flex flex-row gap-4 items-center">
                <Calendar />
                <div className="flex text-[#9d9d9d] text-xs flex-col mr-6">
                  <p>Du Jeudi</p>
                  <p>19/10/2023</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <NextArrow />
                <div className="flex text-[#9d9d9d] text-xs xl:w-fit flex-col">
                  <p className="w-full xl:text-nowrap">Au Vendredi</p>
                  <p>20/10/2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4 items-center border border-[#9d9d9d] rounded xl:border-transparent px-8 py-4 xl:px-0 xl:py-0">
            <p className="bg-[#9d9d9d] text-xs text-center text-white p-1 w-fit rounded text-nowrap">
              1 Nuitées
            </p>
            <strong className="text-center">
              1 chambre: 2 adultes + 0 enfants
            </strong>
          </div>
        </div>
        <div className="w-48 xl:pl-0 pl-4">
          <button className="bg-[#9d9d9d] text-white px-4 py-2 rounded-xl">
            <strong>Mettre à jour</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
