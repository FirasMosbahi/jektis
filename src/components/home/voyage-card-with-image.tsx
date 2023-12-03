import React from "react";
import MiniCityCard from "@jektis/components/home/mini-city-card";
import Link from "next/link";
import MiniCardProps from "@jektis/types/mini-card-props";

export default function VoyageCardWithImg({
  title,
  imageUrl,
  cards,
  linksBase,
  mainLink,
  titleLink,
}: {
  title?: string;
  imageUrl: string;
  cards: MiniCardProps[];
  mainLink?: string;
  linksBase: string;
  titleLink?: string;
}): React.ReactNode {
  return (
    <div className="flex w-full flex-col mt-16 sm:mt-0 mr-12 lg:mr-0">
      {title && (
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
      )}
      {mainLink && (
        <Link href={mainLink}>
          <img
            alt="img"
            src={imageUrl}
            className="md:h-80 h-60 w-full md:w-full xl:h-80 border-transparent rounded-xl"
          />
        </Link>
      )}
      {mainLink || (
        <img
          alt="img"
          src={imageUrl}
          className="md:h-80 h-60 w-full md:w-full xl:h-80 border-transparent rounded-xl"
        />
      )}
      <div className="flex flex-col justify-center sm:grid sm:grid-cols-3 gap-4">
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
