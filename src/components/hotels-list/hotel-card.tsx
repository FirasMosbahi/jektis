"use client";

import React from "react";
import { Ok, Star } from "@jektis/components/icons";
import HotelCardProps from "@jektis/types/hotel_class";
import PriceButton from "@jektis/components/generic/price-button";
import ChamberDescription from "@jektis/components/hotels-list/chamber-description";

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
      <div className="flex items-center justify-center mt-4 cursor-pointer">
        <div className="relative flex flex-row rounded-xl bg-[#ececec] bg-clip-border text-gray-700 shadow-md pr-8">
          <div className="relative h-80 m-0 w-60 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={hotel.imageUrl}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 space-y-2">
            <strong className=" block font-sans text-2xl font-semibold uppercase leading-relaxed tracking-normal text-black antialiased">
              {hotel.name}
            </strong>
            <strong className="mb-2 flex items-center text-xl gap-3 flex-row font-sans tracking-normal text-blue-gray-900 antialiased">
              {hotel.cityName}
            </strong>
            <div className="bg-white border border-transparent text-weakBlue rounded-2xl w-fit">
              <button className="border-l border-r-weakBlue border-r-2 px-4 py-1">
                <strong>LPD</strong>
              </button>
              <button className="border-l border-r-weakBlue border-r-2 px-4 py-1">
                <strong>DP</strong>
              </button>
              <button className="border-l border-r-weakBlue border-r-2 px-4 py-1">
                <strong>PC</strong>
              </button>
              <button className="border-l border-r-weakBlue border-r-2 px-4 py-1">
                <strong>All In</strong>
              </button>
              <button className="px-4 py-1">
                <strong>All In Soft</strong>
              </button>
            </div>
            <div className="bg-white border border-transparent rounded-2xl flex-col justify-around pt-4 px-2">
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
            <ul className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
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
          <div className="flex flex-col justify-between items-end py-4 pt-8 pl-16">
            <div className="flex flex-row">{stars}</div>
            <div className="flex flex-col gap-2 items-end">
              <div
                id="price"
                className="flex flex-col items-start border-2 rounded-xl px-8 py-1  text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
              >
                <p className="text-xs">A partir de</p>
                <div className="flex flex-row items-center">
                  <strong className="text-4xl">{hotel.price}</strong>
                  <div className="flex flex-col">
                    <strong className="text-2xl">TND</strong>
                    <p className="text-xs">Par personne</p>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1 border border-transparent rounded-2xl ">
                <div className="bg-white text-green-600 px-4 py-2 rounded-xl">
                  Réserver
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
