import React from "react";
import { VoyageDetailsSection } from "@jektis/enums/voyage";

export default function VoyageNavbar({
  onClick,
}: {
  onClick: (section: VoyageDetailsSection) => void;
}): React.ReactNode {
  return (
    <div
      className="hidden py-1 bg-gradient-to-r w-full from-[#004fa6] to-[#02c9b2] lg:inline-flex border-transparent rounded-xl shadow-sm mt-8"
      role="group"
    >
      <button
        type="button"
        className="text-sm px-6 py-4 font-medium text-white border-r-4 border-white"
        onClick={() => onClick(VoyageDetailsSection.programme)}
      >
        <strong className="xl:text-xl">Programme</strong>
      </button>
      <button
        type="button"
        className="px-6 py-4 text-sm font-medium text-white border-r-4 border-white"
        onClick={() => onClick(VoyageDetailsSection.servicesInclus)}
      >
        <strong className="xl:text-xl">Services inclus</strong>
      </button>
      <button
        type="button"
        className="px-6 py-4 text-sm font-medium text-white border-r-4 border-white"
        onClick={() => onClick(VoyageDetailsSection.servicesNonInclus)}
      >
        <strong className="xl:text-xl">Services non inclus</strong>
      </button>
      <button
        type="button"
        className="px-6 py-4 text-sm font-medium text-white border-r-4 border-white"
        onClick={() => onClick(VoyageDetailsSection.TarifsAndReservation)}
      >
        <strong className="xl:text-xl">Tarifs et réservations</strong>
      </button>
      <button
        type="button"
        className="px-6 py-4 text-sm font-medium text-white border-r-4 border-white"
        onClick={() => onClick(VoyageDetailsSection.Visa)}
      >
        <strong className="xl:text-xl">Visa</strong>
      </button>
      <button
        type="button"
        className="px-8 py-4 text-sm font-medium text-white"
        onClick={() => onClick(VoyageDetailsSection.ChargeeDeVoyage)}
      >
        <strong className="xl:text-xl">Chargé de voyage</strong>
      </button>
    </div>
  );
}
