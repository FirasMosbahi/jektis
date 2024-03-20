import React from "react";
import SearchFilter from "@jektis/components/voyages/voyage-search-filter";
import CityCardXl from "@jektis/components/voyages/city-card-xl";
import CustomPage from "@jektis/components/generic/CustomPage";
import { getCities, getHotels } from "@jektis/services";
import { VoyageCardProps } from "@jektis/types";
import Pagination from "@jektis/components/generic/pagination";
import Link from "next/link";
import SearchSideFilter from "@jektis/components/generic/SearchSideFilter";
import { VOYAGE_SIDE_FILTER_DATA } from "@jektis/consts/side-filters-data";

export default function VoyagesIndex({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): React.ReactNode {
  const category = searchParams?.category;
  const cities: VoyageCardProps[] = getCities(category);
  const page = Number.parseInt(
    typeof searchParams?.page === "string" ? searchParams?.page : "0",
  );
  const citiesToShow = cities.slice(page * 4, (page + 1) * 4);
  return (
    <main className="flex flex-col gap-8 lg:flex-row w-full pb-4">
      <SearchSideFilter
        filters={VOYAGE_SIDE_FILTER_DATA}
        nameFilterPlaceholder="Nom du Voyage"
      />
      <div className="bg-white w-full">
        <div className="flex flex-col gap-8 items-start w-full py-6 flex-1">
          {citiesToShow.map((city, index) => (
            <div key={index} className="w-full px-4">
              <Link href={`/voyages/${city.id}`}>
                <CityCardXl city={city} key={city.id} />
              </Link>
            </div>
          ))}
        </div>
        <Pagination pagesNumber={cities.length / 4 - 1} />
      </div>
    </main>
  );
}
