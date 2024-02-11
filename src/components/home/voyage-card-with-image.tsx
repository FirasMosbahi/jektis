import React from "react";
import MiniCityCard from "@jektis/components/home/mini-city-card";
import Link from "next/link";
import MiniCardProps from "@jektis/types/mini-card-props";
import { VoirPlus } from "@jektis/components/icons";

export default function VoyageCardWithImg({
  title,
  imageUrl,
  cards,
  linksBase,
  mainLink,
  titleLink,
  showSeeAllButton,
}: {
  title?: string;
  imageUrl: string;
  cards: MiniCardProps[];
  mainLink?: string;
  linksBase: string;
  titleLink?: string;
  showSeeAllButton?: boolean;
}): React.ReactNode {
  return (
    <div className="flex text-xl w-full flex-col mt-16 sm:mt-0 mr-12 lg:mr-0">
      {title && (
        <div className="flex text-white flex-row py-2 mb-4 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
          <strong className="ml-4">{title}</strong>
          {titleLink ? (
            <Link
              href={titleLink}
              className="flex text-white flex-col justify-end"
            >
              <p className="mr-4 text-sm flex flex-row items-center font-light gap-x-1 h-fit">
                Voir Toute la liste <VoirPlus width={12} height={12} />
              </p>
            </Link>
          ) : (
            <p className="mr-4 text-sm flex flex-row items-center font-light gap-x-1 h-fit">
              Voir Toute la liste <VoirPlus width={12} height={12} />
            </p>
          )}
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div
          className={`w-full max-h-[15.5rem] md:w-full border-transparent rounded-xl ${
            showSeeAllButton ? "relative" : ""
          }`}
        >
          {showSeeAllButton && (
            <Link
              href={mainLink ?? ""}
              className="absolute border-2 bottom-4 left-4 border-white bg-[#0051A3] cursor-pointer rounded-2xl px-2 flex flex-row gap-x-1 items-center text-[1.2rem] font-extralight"
            >
              Voir toute la liste <VoirPlus height={12} width={12} />
            </Link>
          )}
          <img
            alt="img"
            src={imageUrl}
            className="w-full max-h-[15.5rem] md:w-full border-transparent rounded-xl"
          />
        </div>

        <div className="flex flex-wrap overflow-hidden pt-2 gap-4">
          {cards.length > 0 && (
            <div className="md:w-[30%] min-w-[6rem] w-[45%] h-fit">
              <MiniCityCard cardData={cards[0]} linkBase={linksBase} />
            </div>
          )}
          {cards.length > 1 && (
            <div className="md:w-[30%] min-w-[6rem] w-[45%] h-fit">
              <MiniCityCard cardData={cards[1]} linkBase={linksBase} />
            </div>
          )}
          {cards.length > 2 && (
            <div className="md:w-[30%] min-w-[6rem] w-[45%] h-fit">
              <MiniCityCard cardData={cards[2]} linkBase={linksBase} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
