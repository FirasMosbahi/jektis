import React from "react";
import { cityCards } from "@jektis/mocks";
import SearchFilter from "@jektis/components/voyages/voyage-search-filter";
import CityCardXl from "@jektis/components/voyages/city-card-xl";
import CustomPage from "@jektis/components/generic/CustomPage";

export default function VoyagesIndex(): React.ReactNode {
  const cities = cityCards;
  return (
    <CustomPage>
      <main className="flex flex-col lg:flex-row bg-white w-full pb-20">
        <SearchFilter />
        <div className="flex flex-col gap-8 items-start w-full mt-6 flex-1">
          {cities.map((city, index) => (
            <div key={index} className="w-full">
              <CityCardXl city={city} key={city.id} />
            </div>
          ))}
        </div>
      </main>
    </CustomPage>
  );
}
