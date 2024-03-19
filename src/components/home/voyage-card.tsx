import React from "react";
import CityCard from "@jektis/components/home/city-card";
import MiniCityCard from "@jektis/components/home/mini-city-card";
import MiniCardProps from "@jektis/types/mini-card-props";
import { VoyageCardProps } from "@jektis/types/city_class";
import Link from "next/link";
import { VoirPlus } from "@jektis/components/icons";

export default function VoyageCard({
  title,
  cards,
  linksBase,
  bigCardProps,
  titleLink,
}: {
  title: string;
  cards: MiniCardProps[];
  linksBase: string;
  bigCardProps: VoyageCardProps;
  titleLink?: string;
}): React.ReactNode {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row mb-4 text-xl py-2 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
        <strong className="ml-4 text-white">{title}</strong>
        {titleLink ? (
          <Link href={titleLink} className="flex flex-col justify-end">
            <p className="mr-4 text-sm flex text-white flex-row items-center font-light gap-x-1 h-fit">
              Voir Toute la liste <VoirPlus width={12} height={12} />
            </p>
          </Link>
        ) : (
          <p className="mr-4 text-sm text-white flex flex-row items-center font-light gap-x-1 h-fit">
            Voir Toute la liste <VoirPlus width={12} height={12} />
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <CityCard
          isHorizontal={true}
          cityProps={bigCardProps}
          linkBase={linksBase}
        />
        <div className="flex mt-2 flex-row overflow-x-scroll no-scrollbar gap-x-6 justify-between w-full">
          {cards.length > 0 && (
            <div className="w-[30%] min-w-[100px] h-fit">
              <MiniCityCard cardData={cards[0]} linkBase={linksBase} />
            </div>
          )}
          {cards.length > 1 && (
            <div className="w-[30%] min-w-[100px] h-fit">
              <MiniCityCard cardData={cards[1]} linkBase={linksBase} />
            </div>
          )}
          {cards.length > 2 && (
            <div className="w-[30%] min-w-[100px] h-fit">
              <MiniCityCard cardData={cards[2]} linkBase={linksBase} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
