import React from "react";
import { PlaneArrival, PlaneDeparture, Star } from "@jektis/components/icons";
import CityCardProps from "@jektis/types/city_class";
import PriceButtonXl from "@jektis/components/voyages/price_card";

export default function CityCardXl({
  city,
}: {
  city: CityCardProps;
}): React.ReactNode {
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < city.rate; i++) {
    stars.push(<Star width={20} height={20} />);
  }
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div
          className="overflow-hidden w-full mr-16 relative flex lg:flex-row flex-col rounded-xl bg-[#ececec] bg-clip-border
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
            className="object-cover w-full lg:w-80 h-60 lg:h-96 xl:h-64 rounded-l-xl"
          />
          <div className="px-6 py-4 bg-[#ececec] bg-clip-border">
            <strong className="block leading-6 font-sans text-2xl font-semibold uppercase tracking-normal text-black antialiased">
              {city.name}
            </strong>
            <div className="flex xl:flex-row flex-col xl:items-center items-start xl:gap-0 gap-4 xl:mt-0 mt-4 tracking-normal ">
              <p className="flex items-center gap-3 flex-row font-sans text-blue-gray-900">
                {city.country}
              </p>
              <p className="flex text-xs pt-1 xl:pl-8 flex-col xl:flex-row gap-2 xl:items-center items-start">
                Note : <div className="flex flex-row">{stars}</div>
              </p>
            </div>
            <div className="flex flex-col my-4 gap-4">
              <strong>
                {city.numberOfDays} jours / {city.numberofNights} nuits :
              </strong>
              <div className="flex lg:flex-row flex-col lg:items-center items-start gap-8">
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
            <div className="md:grid md:grid-cols-4 flex flex-col w-fit gap-4">
              <div className="col-span-2">
                <PriceButtonXl price={city.price} />
              </div>
              <div className="flex flex-col justify-end">
                <button className="bg-red-600 text-white border border-transparent rounded-2xl flex flex-col items-center justify-center h-3/5">
                  <strong>Facilités</strong> <strong>jusqu'à 8 mois</strong>
                </button>
              </div>
              <div className="flex flex-col justify-end">
                <button className="bg-gradient-to-r from-[#585657] to-[#9c9c9c] text-xl h-3/5 text-white border border-transparent rounded-2xl flex flex-col items-center justify-center">
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
