import React from "react";
import SearchFilter from "@jektis/components/voyages/voyage-search-filter";
import CityCardXl from "@jektis/components/voyages/city-card-xl";
import CustomPage from "@jektis/components/generic/CustomPage";
import { getCities, getHotels } from "@jektis/services";
import { VoyageCardProps } from "@jektis/types";

export default function VoyagesIndex({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): React.ReactNode {
  const category = searchParams?.category;
  const cities: VoyageCardProps[] = getCities(category);
  return (
    <main className="flex flex-col gap-8 lg:flex-row w-full pb-20">
      <SearchFilter />
      <div className="flex flex-col bg-white gap-8 items-start w-full py-10 flex-1">
        {cities.map((city, index) => (
          <div key={index} className="w-full px-4">
            <CityCardXl city={city} key={city.id} />
          </div>
        ))}
      </div>
    </main>
  );
}
