import React from "react";
import { getSejourStayDetails } from "@jektis/app/utils/voyage.utils";

export default function VoyageOffer({
  name,
  country,
  imageUrl,
  price,
  startDate,
  endDate,
}: {
  name: string;
  country: string;
  imageUrl: string;
  price: number;
  startDate: Date;
  endDate: Date;
}): React.ReactNode {
  const { numberOfDays, numberOfNights } = getSejourStayDetails(
    startDate,
    endDate,
  );
  return (
    <div className="relative ml-6">
      <div className="text-black flex flex-row gap-32 lg:gap-4 justify-start items-end mb-8">
        <strong className="text-3xl lg:text-6xl">{name}</strong>
        <p className="lg:text-2xl">
          {country} - {numberOfNights} Nuits / {numberOfDays} Jours
        </p>
      </div>

      <img
        alt="dubai"
        src={imageUrl}
        className="w-screen h-96 border-transparent rounded-xl"
      />
      <div
        style={{ borderRadius: 15 }}
        className="bg-gradient-to-r hidden md:block from-[#004fa6] to-[#02c9b2] w-fit absolute sm:top-16 md:top-12 lg:top-32 xl:top-32 right-12"
      >
        <div
          id="price"
          className="flex flex-col items-start border-2 rounded-xl px-4 py-1  text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
        >
          <p className="text-xs">A partir de</p>
          <div className="flex flex-row items-center">
            <strong className="text-4xl">{price}</strong>
            <div className="flex flex-col">
              <strong className="text-2xl">TND</strong>
              <p className="text-xs">Par personne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
