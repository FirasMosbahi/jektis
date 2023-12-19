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
    <div className="flex text-xl w-full flex-col mt-16 sm:mt-0 mr-12 lg:mr-0">
      {title && (
        <div className="flex flex-row py-2 mb-4 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
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
      <div className="flex flex-col justify-between h-96 sm:h-64 md:h-56 sm:flex-row gap-4">
        {cards.length > 0 && (
          <div className="w-[45%] sm:w-[30%] w-full h-full">
            <MiniCityCard cardData={cards[0]} linkBase={linksBase} />
          </div>
        )}
        {cards.length > 1 && (
          <div className="w-[45%] sm:w-[30%] w-full h-full">
            <MiniCityCard cardData={cards[1]} linkBase={linksBase} />
          </div>
        )}
        {cards.length > 2 && (
          <div className="md:w-[30%] md:block hidden h-full">
            <MiniCityCard cardData={cards[2]} linkBase={linksBase} />
          </div>
        )}
      </div>
    </div>
  );
}
