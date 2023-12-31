import React from "react";
import { PlaneArrival, PlaneDeparture, Star } from "@jektis/components/icons";
import PriceButtonXl from "@jektis/components/voyages/price_card";
import { VoyageCardProps } from "@jektis/types";
import { getSejourStayDetails } from "@jektis/app/utils/voyage.utils";

export default function CityCardXl({
  city,
}: {
  city: VoyageCardProps;
}): React.ReactNode {
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < city.rate; i++) {
    stars.push(<Star width={20} height={20} />);
  }
  const { numberOfDays, numberOfNights } = getSejourStayDetails(
    city.dateStart,
    city.dateEnd,
  );
  return (
    <>
      <div className="flex items-center p-1.5 shadow-md shadow-gray-400 bg-white rounded-2xl justify-center w-full">
        <div
          className="overflow-hidden w-full relative flex xl:flex-row flex-col rounded-xl bg-[#ececec] bg-clip-border
            text-gray-700 shadow-md"
        >
          <div className="bg-gradient-radial from-[#183595] to-[#f903bf] border-transparent rounded-full p-24 -top-28 -right-16 xl:h-96 xl:w-96 xl:p-48 flex flex-row items-start justify-start absolute xl:-top-72 xl:-right-48"></div>
          <div className="absolute flex flex-col items-end text-white top-2 right-4">
            <p className="text-sm">Encore</p>
            <strong className="text-xl">{city.remainingPlace} Places</strong>
          </div>
          <img
            src={city.imageUrl}
            alt="image"
            className="object-cover w-full xl:w-[30%] xl:h-[19rem] h-[12rem] rounded-l-xl"
          />
          <div className="flex xl:flex-col sm:flex-row flex-col px-6 py-4 w-full bg-[#ececec] bg-clip-border">
            <div className="">
              <strong className="block leading-6 font-sans text-2xl font-semibold uppercase tracking-normal text-black antialiased">
                {city.name}
              </strong>
              <div className="flex flex-col xl:items-start items-start xl:gap-0 gap-4 xl:mt-0 mt-4 tracking-normal ">
                <p className="flex items-center gap-3 flex-row font-sans text-blue-gray-900">
                  {city.country}
                </p>
                <p className="flex text-xs pt-1 flex-col xl:flex-row gap-2 items-start">
                  Note : <div className="flex flex-row">{stars}</div>
                </p>
              </div>
              <div className="flex flex-col my-4 gap-4">
                <strong>
                  {numberOfDays} jours / {numberOfNights} nuits :
                </strong>
                <div className="flex xl:flex-row flex-col lg:items-center items-start gap-8">
                  <div className="flex flex-row gap-4 items-center">
                    <PlaneDeparture width={30} height={30} />{" "}
                    <strong>Depart: 05 Septembre 2023</strong>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <PlaneArrival height={30} width={30} />{" "}
                    <strong>Retour: 25 Septembre 2023</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-0 gap-4 items-end justify-end xl:justify-between w-full">
              <PriceButtonXl price={city.price} />
              <div className="flex flex-col xl:w-[30%] justify-end">
                <button className="bg-red-600 px-2 text-white border border-transparent rounded-2xl flex flex-col items-center justify-center">
                  <strong>Facilités</strong> <strong>jusqu{"'"}à 8 mois</strong>
                </button>
              </div>
              <div className="flex flex-col justify-end xl:w-[30%]">
                <button className="bg-gradient-to-r tracking-wide px-4 py-2 from-[#585657] to-[#9c9c9c] text-xl text-white border border-transparent rounded-2xl flex flex-col items-center justify-center">
                  <strong>Programme</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
