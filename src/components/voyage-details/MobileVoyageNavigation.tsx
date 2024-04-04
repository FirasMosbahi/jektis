"use client";

import React from "react";
import { VoyageDetailsSection } from "@jektis/enums/voyage";

export default function MobileVoyageNavigation({
  onClick,
  current,
}: {
  onClick: (section: VoyageDetailsSection) => void;
  current: VoyageDetailsSection;
}): React.ReactNode {
  let next: VoyageDetailsSection | undefined;
  let prvious: VoyageDetailsSection | undefined;
  let nextLabel: string | undefined;
  let previousLabel: string | undefined;
  switch (current) {
    case VoyageDetailsSection.programme:
      next = VoyageDetailsSection.servicesInclus;
      prvious = undefined;
      nextLabel = "services inclus";
      previousLabel = undefined;
      break;
    case VoyageDetailsSection.servicesInclus:
      next = VoyageDetailsSection.servicesNonInclus;
      prvious = VoyageDetailsSection.programme;
      nextLabel = "services non inclus";
      previousLabel = "programme";
      break;
    case VoyageDetailsSection.servicesNonInclus:
      prvious = VoyageDetailsSection.servicesInclus;
      next = VoyageDetailsSection.TarifsAndReservation;
      previousLabel = "services inclus";
      nextLabel = "tarifs & réservation";
      break;
    case VoyageDetailsSection.TarifsAndReservation:
      prvious = VoyageDetailsSection.servicesNonInclus;
      next = VoyageDetailsSection.Visa;
      previousLabel = "services non inclus";
      nextLabel = "visa";
      break;
    case VoyageDetailsSection.Visa:
      prvious = VoyageDetailsSection.TarifsAndReservation;
      next = VoyageDetailsSection.ChargeeDeVoyage;
      nextLabel = "chargée de voyage";
      previousLabel = "tarifs & réservation";
      break;
    case VoyageDetailsSection.ChargeeDeVoyage:
      prvious = VoyageDetailsSection.Visa;
      next = undefined;
      previousLabel = "visa";
      nextLabel = undefined;
      break;
  }

  console.log(current, nextLabel, previousLabel);
  return (
    <div className="flex lg:hidden flex-row justify-between pb-2 border-[#dbdbdb] text-blue-800 border-b-4">
      {previousLabel ? (
        <button
          className="underline underline-offset-2"
          onClick={() => onClick(prvious as VoyageDetailsSection)}
        >
          {`<< ${previousLabel}`}
        </button>
      ) : (
        <div></div>
      )}
      {nextLabel ? (
        <button
          className="underline underline-offset-2"
          onClick={() => onClick(next as VoyageDetailsSection)}
        >
          {`${nextLabel} >>`}
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
