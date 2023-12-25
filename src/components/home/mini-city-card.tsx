import React from "react";
import MiniCardProps from "@jektis/types/mini-card-props";
import Link from "next/link";

export default function MiniCityCard({
  cardData,
  linkBase,
}: {
  cardData: MiniCardProps;
  linkBase: string;
}): React.ReactNode {
  return (
    <Link href={`${linkBase}/${cardData.id}`}>
      <div
        className="relative bg-cover bg-center h-40 mt-4 flex flex-col justify-end border-transparent rounded-xl"
        style={{
          backgroundImage: `url(${cardData.imageUrl})`,
        }}
      >
        <div className="bg-[#ececec] bg-opacity-50 flex flex-row justify-center pt-4 pb-2">
          <strong className="text-xl text-[#14477f] text-center h-6 overflow-hidden">
            {cardData.name}
          </strong>
        </div>
        <div className="absolute lg:top-16 sm:top-16 top-16 left-40 sm:left-20 right-0 bottom-0 flex items-center justify-center z-10">
          <button className="flex h-8 flex-col text-white pb-0.5 px-4 border-transparent rounded-2xl items-start bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
            <div className="leading-none text-[0.6rem]">A partir de</div>
            <div>
              <strong className="leading-none text-[0.8rem]">
                {cardData.price}
              </strong>
              <sup className="leading-none text-[0.8rem]">TND</sup>
            </div>
          </button>
        </div>
      </div>
    </Link>
  );
}
