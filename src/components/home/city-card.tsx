import React from "react";
import StaticStars from "@jektis/components/generic/static-stars";
import VoyageCardProps from "@jektis/types/city_class";
import Link from "next/link";

export default function CityCard({
  isHorizontal,
  cityProps,
  linkBase,
}: {
  isHorizontal: boolean;
  cityProps: VoyageCardProps;
  linkBase: string;
}): React.ReactNode {
  return (
    <Link
      className={isHorizontal ? "" : "w-fit sm:max-w-80"}
      href={`${linkBase}/${cityProps.id}`}
    >
      <div className={`items-center justify-center w-full `}>
        <div
          className={`relative flex border border-transparent rounded-xl w-full ${
            isHorizontal
              ? "sm:flex-row flex flex-col bg-[#ececec] bg-clip-border"
              : "flex-col max-w-[20rem]"
          }  text-gray-700 shadow-md`}
        >
          <img
            src={cityProps.imageUrl}
            alt="image"
            className={`object-cover ${
              isHorizontal
                ? "sm:w-2/5 w-96 rounded-l-xl"
                : "w-96 h-60 rounded-t-xl mb-2"
            } `}
          />
          <div className="px-6  py-3 bg-[#ececec] flex flex-col gap-2 border border-transparent rounded-xl">
            <div>
              <strong className="block leading-6 font-sans text-xl font-bold uppercase tracking-normal text-black antialiased">
                {cityProps.name}
              </strong>
              <p className="flex h-6 overflow-hidden items-start gap-3 flex-row font-sans tracking-normal text-blue-gray-900 antialiased">
                {cityProps.country}
              </p>
            </div>
            <div
              className={`flex flex-col  ${isHorizontal ? "" : "text-sm mb-2"}`}
            >
              <strong>
                {cityProps.numberOfDays} jours / {cityProps.numberofNights}{" "}
                nuits
              </strong>
              {isHorizontal && (
                <strong className="text-sm">
                  Du {cityProps.dateStart} au {cityProps.dateEnd} 2023
                </strong>
              )}
            </div>
            {isHorizontal && (
              <p className="flex flex-row gap-2 items-center">
                Note : <StaticStars number={cityProps.rate} />
              </p>
            )}
            <div
              className={
                isHorizontal
                  ? `flex flex-row justify-end`
                  : "absolute bottom-24 right-4"
              }
            >
              <button className="flex flex-row text-white px-4 border rounded-2xl items-center bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
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
    </Link>
  );
}
