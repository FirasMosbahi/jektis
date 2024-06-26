import React from "react";
import SearchFilter from "@jektis/components/voyages/voyage-search-filter";
import CityCardXl from "@jektis/components/voyages/city-card-xl";
import CustomPage from "@jektis/components/generic/CustomPage";
import { VoyageCardProps } from "@jektis/types";
import Pagination from "@jektis/components/generic/pagination";
import Link from "next/link";
import SearchSideFilter from "@jektis/components/generic/SearchSideFilter";
import { VOYAGE_SIDE_FILTER_DATA } from "@jektis/consts/side-filters-data";
import CityCard from "@jektis/components/home/city-card";
import { getVoyages } from "@jektis/actions/voyage-page-actions";

export default function VoyagesIndex({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): React.ReactNode {
  const { voyages, total } = getVoyages(
    searchParams?.category,
    searchParams?.page,
  );
  return (
    <main className="flex lg:mt-0 mt-8 flex-col gap-8 lg:flex-row w-full pb-4">
      <SearchSideFilter
        filters={VOYAGE_SIDE_FILTER_DATA}
        nameFilterPlaceholder="Nom du Voyage"
      />
      <div className="bg-white w-full lg:pb-0 pb-4">
        <div className="flex flex-col gap-8 items-start w-full py-6 flex-1">
          {voyages.map((city, index) => (
            <div key={index} className="w-full px-4">
              <Link href={`/voyages/${city.id}`}>
                <div className="lg:block hidden">
                  <CityCardXl city={city} key={city.id} />
                </div>
                <div className="lg:hidden">
                  <CityCard
                    isFullScreen={true}
                    isHorizontal={false}
                    cityProps={city}
                    linkBase="/voyages/"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Pagination pagesNumber={total / 4 - 1} />
      </div>
    </main>
  );
}
