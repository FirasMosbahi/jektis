import { VoyageCardProps } from "@jektis/types";
import CityCard from "@jektis/components/home/city-card";
import React from "react";

type ScrollableCardsListElementProps = {
  linksBase: string;
  citiesProps: VoyageCardProps[];
};

export default function ScrollableCardsList({
  data,
}: {
  data: ScrollableCardsListElementProps;
}) {
  return (
    <div className="flex flex-row gap-8 overflow-x-scroll no-scrollbar">
      {data.citiesProps.map((e, index) => (
        <CityCard
          cityProps={e}
          linkBase={data.linksBase}
          isHorizontal={false}
          key={index}
        />
      ))}
    </div>
  );
}
