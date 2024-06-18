import React from "react";
import Link from "next/link";
import { HotelCardProps } from "@jektis/types/hotel_class";

export default function MiniHotelCard({
  isHorizontal,
  hotelProps,
  linkBase,
  isFullScreen,
}: {
  isHorizontal: boolean;
  hotelProps: HotelCardProps;
  linkBase: string;
  isFullScreen?: boolean;
}): React.ReactNode {
  return (
    <Link
      className={isFullScreen ? "w-full" : "min-w-[300px]"}
      href={`${linkBase}/${hotelProps.id}`}
    >
      <div className={`items-center justify-center w-full `}>
        <div
          className={`relative flex border border-transparent rounded-xl w-full flex-col ${
            isFullScreen ? "" : "max-w-[20rem]"
          } text-gray-700 shadow-md`}
        >
          <img
            src={hotelProps.imageUrl}
            alt="image"
            className={`object-cover ${
              isHorizontal
                ? "sm:w-2/5 w-96 rounded-l-xl"
                : `${isFullScreen ? "w-full" : "w-96"} h-60 rounded-t-xl mb-2`
            } `}
          />
          <div className="px-6 py-3 bg-[#ececec] flex flex-col gap-2 border border-transparent rounded-xl">
            <div>
              <strong className="block h-6 overflow-hidden leading-6 font-sans text-xl font-bold uppercase tracking-normal text-black antialiased">
                {hotelProps.name}
              </strong>
              <p className="flex h-6 overflow-hidden items-start gap-3 flex-row font-sans tracking-normal text-blue-gray-900 antialiased">
                {hotelProps.cityName}
              </p>
            </div>
            <div className="flex flex-col text-sm mb-2">
              <strong className="italic">
                minimum stay : {hotelProps.minimumStay} jours
              </strong>
            </div>
            <div className="absolute bottom-24 right-4">
              <button className="flex flex-row text-white px-4 border rounded-2xl items-center bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
                <div>
                  <p className="text-xs">A partir de</p>
                  <strong className="text-3xl">{hotelProps.price}</strong>
                </div>
                <strong>TND</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
