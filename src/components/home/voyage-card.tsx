import React from "react";
import CityCard from "@jektis/components/home/city-card";
import MiniCityCard from "@jektis/components/home/mini-city-card";
import MiniCardProps from "@jektis/types/mini-card-props";
import CityCardProps from "@jektis/types/city_class";
import Link from "next/link";

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
  bigCardProps: CityCardProps;
  titleLink?: string;
}): React.ReactNode {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row mb-4 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
        <strong className="ml-4">{title}</strong>
        {titleLink ? (
          <Link href={titleLink}>
            <p className="mr-4">Voir Tous</p>
          </Link>
        ) : (
          <p className="mr-4">Voir Tous</p>
        )}
      </div>
      <CityCard
        isHorizontal={true}
        cityProps={bigCardProps}
        linkBase={linksBase}
      />
      <div className="flex flex-col sm:grid sm:grid-cols-3 justify-center gap-4 w-full">
        {cards.length > 0 && (
          <MiniCityCard cardData={cards[0]} linkBase={linksBase} />
        )}
        {cards.length > 1 && (
          <MiniCityCard cardData={cards[1]} linkBase={linksBase} />
        )}
        <div className="md:block hidden">
          {cards.length > 2 && (
            <MiniCityCard cardData={cards[2]} linkBase={linksBase} />
          )}
        </div>
      </div>
    </div>
  );
}
