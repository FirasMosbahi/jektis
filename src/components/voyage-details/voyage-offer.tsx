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
    <div className="relative lg:ml-6">
      <div className="text-black flex flex-row gap-8 lg:gap-4 justify-start items-end mb-8">
        <strong className="lg:text-[52px] text-[32px] leading-none">
          {name.length > 12 ? name.split(" ")[0] : name}
        </strong>
        <p className="lg:text-[32px] text-[16px] leading-none">
          {country} , {numberOfNights} Nuits - {numberOfDays} Jours
        </p>
      </div>

      <img
        alt="dubai"
        src={imageUrl}
        className="w-screen lg:h-96 h-60 border-transparent rounded-xl"
      />
      <div
        style={{ borderRadius: 15 }}
        className="bg-gradient-to-r from-[#004fa6] to-[#02c9b2] w-fit absolute top-16 right-12"
      >
        <div
          id="price"
          className="flex flex-col items-start border-2 rounded-xl px-4 py-1  text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
        >
          <p className="text-xs leading-none">A partir de</p>
          <div className="flex flex-row items-center">
            <p className="lg:text-[40px] text-[28px] leading-none font-extrabold">
              {price}
            </p>
            <div className="flex flex-col">
              <p className="lg:text-[22px] text-[16px] leading-none font-bold">
                TND
              </p>
              <p className="lg:text-xs text-[8px] leading-none">Par personne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
