import React from "react";
import { Ok, Star } from "@jektis/components/icons";
import HotelCardProps from "@jektis/types/hotel_class";
import PriceButton from "@jektis/components/generic/price-button";

export default function HotelCard({
  hotel,
}: {
  hotel: HotelCardProps;
}): React.ReactNode {
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < hotel.rate; i++) {
    stars.push(<Star />);
  }

  return (
    <>
      <div className="flex items-center justify-center mt-4 cursor-pointer">
        <div className="relative flex flex-row rounded-xl bg-[#ececec] bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={hotel.imageUrl}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <p className=" block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-black antialiased">
              {hotel.detail}
            </p>
            <p className="mb-2 flex items-center gap-3 flex-row font-sans tracking-normal text-blue-gray-900 antialiased">
              {hotel.cityName} <div className="flex flex-row">{stars}</div>
            </p>
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
            <PriceButton
              price={hotel.price}
              enfantGratuit={!!hotel.detailEnfant}
            />
          </div>
        </div>
      </div>
    </>
  );
}
