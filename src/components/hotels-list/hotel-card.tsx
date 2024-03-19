"use client";

import React from "react";
import { Ok, Star } from "@jektis/components/icons";
import HotelCardProps from "@jektis/types/hotel_class";
import ChamberDescription from "@jektis/components/hotels-list/chamber-description";
import HotelPricingButton from "@jektis/components/generic/HotelPricingButton";

export default function HotelCard({
  hotel,
}: {
  hotel: HotelCardProps;
}): React.ReactNode {
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < hotel.rate; i++) {
    stars.push(<Star className="w-25 h-25" width={30} height={30} />);
  }

  return (
    <>
      <div className="flex text-[14px] overflow-visible lg:flex-row flex-col items-center justify-center p-1 bg-white shadow-xl rounded-2xl mt-4 cursor-pointer">
        <div className="overflow-visible flex max-h-[320px] lg:flex-row lg:justify-between lg:pr-4 flex-col rounded-xl bg-[#ececec] bg-clip-border text-gray-700 shadow-md w-full">
          <div className="flex lg:flex-row flex-col">
            <div className="relative m-0 lg:w-52 lg:h-full h-60 w-full shrink-0 overflow-hidden rounded-xl lg:rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={hotel.imageUrl}
                alt="image"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="pl-4 lg:h-fit max-h-[22rem] overflow-hidden lg:py-2 lg:space-y-0.5">
              <div className="flex sm:flex-row flex-col sm:justify-between lg:mt-0 mt-2">
                <p className="block leading-none text-[18px] font-sans h-4 overflow-hidden font-bold uppercase tracking-normal text-black antialiased">
                  {hotel.name}
                </p>
                <div className="lg:hidden flex flex-row">{stars}</div>
              </div>
              <strong className="mb-2 flex text-[18px] font-semibold items-center gap-3 flex-row font-sans tracking-normal text-blue-gray-900 antialiased">
                {hotel.cityName}
              </strong>
              <div className="py-2 space-y-2 xl:text-[13px] xxl:text-[14px] xl:max-w-[320px]">
                <div className="bg-white border border-transparent text-weakBlue rounded-2xl w-fit">
                  <button className="border-l border-r-weakBlue border-r-2 xxl:px-2 xl:px-[8px] px-[5px] py-1">
                    <strong>LPD</strong>
                  </button>
                  <button className="border-l border-r-weakBlue border-r-2 xl:px-[7px] xxl:px-2 px-[8px] py-1">
                    <strong>DP</strong>
                  </button>
                  <button className="border-l border-r-weakBlue border-r-2 xl:px-[7px] xxl:px-2 px-[8px] py-1">
                    <strong>PC</strong>
                  </button>
                  <button className="border-l border-r-weakBlue border-r-2 xl:px-[7px] xxl:px-2 px-[8px] py-1">
                    <strong>All In</strong>
                  </button>
                  <button className="xxl:px-2 px-[5px] xl:px-[8px] py-1">
                    <strong>All In Soft</strong>
                  </button>
                </div>
                <div className="bg-white border max-w-[280px] border-transparent rounded-2xl flex-col justify-around flex py-2 gap-2 px-2">
                  <ChamberDescription
                    category="Chambre DBL Std BB"
                    isDisponible={true}
                    onSelect={() => console.log("clicked")}
                  />
                  <ChamberDescription
                    category="Chambre Vue Mer Std BB"
                    isDisponible={true}
                    onSelect={() => console.log("clicked")}
                  />
                </div>
              </div>
              <ul className="mb-8 xxl:text-[14px] xl:text-[13px] block font-sans font-normal leading-5 text-gray-700 antialiased">
                <li className="flex flex-row items-center gap-3">
                  <Ok /> <p>Minimum Stay : {hotel.minimumStay} nuités</p>
                </li>
                {hotel.inclusive && (
                  <li className="flex flex-row items-center gap-3">
                    <Ok /> All inclusive
                  </li>
                )}
                <li className="flex flex-row items-center gap-3">
                  <Ok /> {hotel.detailEnfant}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end lg:w-fit w-full lg:px-0 px-4 py-4 pt-2 xl:pl-8">
            <div className="lg:flex lg:flex-row hidden">{stars}</div>
            <div className="flex flex-col gap-2 items-end">
              <HotelPricingButton price={hotel.price} />
              <button className="bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1 border-0.5 border-transparent rounded-2xl ">
                <div className="bg-white  px-4 py-1 rounded-xl">
                  <p className="font-bold xxl:text-[22px] xl:text-[16px] text-[#00d3bc]">
                    Réserver
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
