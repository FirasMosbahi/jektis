import React from "react";
import StaticStars from "@jektis/components/generic/static-stars";
import CityCardProps from "@jektis/types/city_class";
import Link from "next/link";

export default function CityCard({
  isHorizontal,
  cityProps,
  linkBase,
}: {
  isHorizontal: boolean;
  cityProps: CityCardProps;
  linkBase: string;
}): React.ReactNode {
  return (
    <Link
      className={isHorizontal ? "" : "w-full sm:w-96"}
      href={`${linkBase}/${cityProps.id}`}
    >
      <div className="flex items-center justify-center w-full">
        <div
          className={`relative flex rounded-xl w-full ${
            isHorizontal
              ? "sm:flex-row flex-col bg-[#ececec] bg-clip-border"
              : "flex-col"
          }  text-gray-700 shadow-md`}
        >
          <img
            src={cityProps.imageUrl}
            alt="image"
            className={`object-cover ${
              isHorizontal
                ? "sm:w-80 sm:h-80 w-96 h-48 rounded-l-xl"
                : "w-96 h-48 rounded-t-xl mb-2"
            } `}
          />
          <div className="p-6 bg-[#ececec] bg-clip-border">
            <strong className="block leading-6 font-sans text-2xl font-semibold uppercase tracking-normal text-black antialiased">
              {cityProps.name}
            </strong>
            <p className="mb-2 flex items-center gap-3 flex-row font-sans tracking-normal text-blue-gray-900 antialiased">
              {cityProps.country}
            </p>
            <div
              className={`flex flex-col  ${
                isHorizontal ? "mb-4" : "text-sm mb-2"
              }`}
            >
              <strong>
                {cityProps.numberOfDays} jours / {cityProps.numberofNights}{" "}
                nuits
              </strong>
              <strong>
                Du {cityProps.dateStart} au {cityProps.dateEnd} 2023
              </strong>
            </div>
            <div
              className={
                isHorizontal
                  ? ""
                  : "flex flex-col sm:flex-row justify-center gap-4 sm:gap-12"
              }
            >
              <p className="flex flex-row gap-2 items-center">
                Note : <StaticStars number={cityProps.rate} />
              </p>
              <div className="flex flex-row justify-start">
                <button className="flex flex-row text-white mt-8 px-4 border rounded-2xl items-center bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
                  <div>
                    <p className="text-xs">A partir de</p>
                    <strong className="text-3xl">{cityProps.price}</strong>
                  </div>
                  <strong>TND</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
