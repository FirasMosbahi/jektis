import React from "react";
import StaticStars from "@jektis/components/generic/static-stars";
import Link from "next/link";
import { VoyageCardProps } from "@jektis/types";
import { getSejourStayDetails } from "@jektis/utils/voyage.utils";

export default function CityCard({
  isHorizontal,
  cityProps,
  linkBase,
  isFullScreen,
}: {
  isHorizontal: boolean;
  cityProps: VoyageCardProps;
  linkBase: string;
  isFullScreen?: boolean;
}): React.ReactNode {
  const { numberOfDays, numberOfNights } = getSejourStayDetails(
    cityProps.dateStart,
    cityProps.dateEnd,
  );
  return (
    <Link
      className={
        isHorizontal
          ? ` shadow-lg z-20 border border-transparent rounded-2xl ${
              isFullScreen ? "w-full" : "max-w-[80%]"
            } lg:max-w-full`
          : "w-[31%] min-w-[300px]"
      }
      href={`${linkBase}/${cityProps.id}`}
    >
      <div
        className={`items-center drop-shadow px-0.5 py-1 bg-transparent justify-center w-full `}
      >
        <div
          className={`relative flex border border-transparent rounded-xl w-full ${
            isHorizontal
              ? "sm:flex-row flex flex-col lg:h-[250px] "
              : `flex-col ${isFullScreen ? "" : "max-w-[20rem]"}`
          }  text-gray-700`}
        >
          <img
            src={cityProps.imageUrl}
            alt="image"
            className={`object-cover ${
              isHorizontal
                ? "sm:w-2/5 w-96 rounded-l-xl"
                : "w-96 h-60 mb-2 border border-transparent rounded-xl"
            } `}
          />
          <div
            className={`px-6 py-3 bg-[#fffdfd] w-full flex flex-col gap-2 border border-transparent ${
              isHorizontal ? "rounded-r-xl" : "min-h-32 rounded-xl"
            }`}
          >
            <div>
              <strong className="block h-6 overflow-hidden leading-6 font-sans text-xl font-bold uppercase tracking-normal text-black antialiased">
                {cityProps.name}
              </strong>
              <p className="flex h-6 overflow-hidden items-start gap-3 flex-row font-sans tracking-normal text-blue-gray-900 antialiased">
                {cityProps.country}
              </p>
            </div>
            <div
              className={`flex flex-col  ${isHorizontal ? "" : "text-sm mb-2"}`}
            >
              <strong className="italic">
                {numberOfDays} jours / {numberOfNights} nuits
              </strong>
              {isHorizontal && (
                <strong className="text-sm">
                  Du {cityProps.dateStart.toDateString()} au{" "}
                  {cityProps.dateEnd.toDateString()}
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
                  : "absolute bottom-4 right-4"
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
