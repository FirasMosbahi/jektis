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
    stars.push(<Star width={15} height={15} />);
  }
  const { numberOfDays, numberOfNights } = getSejourStayDetails(
    city.dateStart,
    city.dateEnd,
  );
  return (
    <>
      <div className="flex items-center p-1.5  shadow-md shadow-gray-400 bg-white rounded-2xl justify-center w-full">
        <div
          className="overflow-hidden w-full max-h-[200px] relative flex lg:flex-row flex-col rounded-xl bg-[#ececec] bg-clip-border
            text-gray-700 shadow-md"
        >
          <div className="bg-gradient-radial from-[#183595] to-[#f903bf] border-transparent rounded-full p-24 -top-28 -right-16 lg:h-96 lg:w-96 lg:p-36 flex flex-row items-start justify-start absolute lg:-top-[310px] lg:-right-44"></div>
          <div className="absolute  flex flex-col items-end text-white top-2 right-4">
            <p className="text-[16px] font-extralight leading-none">Encore</p>
            <p className="text-[24px] font-bold leading-none">
              {city.remainingPlace} Places
            </p>
          </div>
          <img
            src={city.imageUrl}
            alt="image"
            className="object-cover w-full lg:w-[30%] lg:max-h-[200px] rounded-l-xl"
          />
          <div className="flex lg:flex-col sm:flex-row flex-col pr-2 pl-4 py-4 w-full bg-[#ececec] bg-clip-border">
            <div className="">
              <strong className="block leading-6 font-sans text-2xl font-semibold uppercase tracking-normal text-black antialiased">
                {city.name}
              </strong>
              <div className="flex flex-row items-center gap-10 lg:mt-0 mt-4 tracking-normal ">
                <p className="flex items-center gap-3 flex-row font-sans text-blue-gray-900">
                  {city.country}
                </p>
                <p className="flex text-xs pt-1 flex-col lg:flex-row gap-2 items-end">
                  Note : <div className="flex flex-row">{stars}</div>
                </p>
              </div>
              <div className="flex flex-col my-2 gap-0">
                <strong>
                  {numberOfDays} jours / {numberOfNights} nuits :
                </strong>
                <div className="flex lg:flex-row lg:text-[14px] flex-col lg:items-center items-start gap-4">
                  <div className="flex flex-row items-center">
                    <PlaneDeparture width={30} height={25} />{" "}
                    <p className="font-semibold">Depart: 05 Septembre 2023</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <PlaneArrival height={30} width={35} />{" "}
                    <p className="font-semibold">Retour: 25 Septembre 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-0 gap-4 items-end justify-end lg:justify-between w-full">
              <PriceButtonXl price={city.price} />
              <div className="flex flex-col xxl:w-[30%] w-[27%] justify-end">
                <button className="bg-red-600 xxl:text-[14px] text-[12px] tracking-[0.1em] xxl:px-2 px-1 text-white border border-transparent rounded-2xl flex flex-col items-center justify-center">
                  <strong>Facilités</strong> <strong>Jusqu{"'"}à 8 Mois</strong>
                </button>
              </div>
              <div className="flex flex-col  justify-end lg:w-[30%]">
                <button className="bg-gradient-to-r tracking-wide px-4 py-2 from-[#585657] to-[#9c9c9c] xxl:text-[18px] text-[14px] text-white border border-transparent rounded-2xl flex flex-col items-center justify-center">
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
