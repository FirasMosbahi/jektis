import React from "react";
import { VoyageDetailsSection } from "@jektis/enums/voyage";

export default function VoyageNavbar({
  onClick,
}: {
  onClick: (section: VoyageDetailsSection) => void;
}): React.ReactNode {
  return (
    <div
      className="hidden py-1 3xl:tracking-[0.2em] xxl:text-[18px] lg:text-[15px] bg-gradient-to-r w-full from-[#004fa6] to-[#02c9b2] lg:inline-flex border-transparent rounded-xl shadow-sm mt-8"
      role="group"
    >
      <button
        type="button"
        className="text-center py-4 w-[13%] font-medium text-white border-r-4 border-white"
        onClick={() => onClick(VoyageDetailsSection.programme)}
      >
        <strong className="">Programme</strong>
      </button>
      <button
        type="button"
        className="text-center py-4 w-[16%] font-medium text-white border-r-4 border-white"
        onClick={() => onClick(VoyageDetailsSection.servicesInclus)}
      >
        <strong>Services inclus</strong>
      </button>
      <button
        type="button"
        className="text-center w-[21%] py-4 font-medium text-white border-r-4 border-white"
        onClick={() => onClick(VoyageDetailsSection.servicesNonInclus)}
      >
        <strong>Services non inclus</strong>
      </button>
      <button
        type="button"
        className="text-center py-4 w-[21%] font-medium text-white border-r-4 border-white"
        onClick={() => onClick(VoyageDetailsSection.TarifsAndReservation)}
      >
        <strong>Tarifs et réservations</strong>
      </button>
      <button
        type="button"
        className="text-center w-[8%] py-4 font-medium text-white border-r-4 border-white"
        onClick={() => onClick(VoyageDetailsSection.Visa)}
      >
        <strong>Visa</strong>
      </button>
      <button
        type="button"
        className="text-center py-4 w-[21%] font-medium text-white"
        onClick={() => onClick(VoyageDetailsSection.ChargeeDeVoyage)}
      >
        <strong>Chargé de voyage</strong>
      </button>
    </div>
  );
}
