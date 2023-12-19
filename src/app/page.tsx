import React from "react";
import CustomPage from "@jektis/components/generic/CustomPage";
import HomeFilter from "@jektis/components/home/home-filter";
import VoyageCard from "@jektis/components/home/voyage-card";
import CityCard from "@jektis/components/home/city-card";
import VoyageCardWithImg from "@jektis/components/home/voyage-card-with-image";
import Promo from "@jektis/components/home/promo";
import Link from "next/link";
import { HotelCategory, VoyageType } from "@jektis/types";
import {
  getBestCitiesByRateAndCategory,
  getBestCityByRateAndCategory,
  getMiniCards,
  getVoyagesMiniCardsByCategory,
} from "@jektis/services";
import CityCardProps from "@jektis/types/city_class";

export default function Index(): React.ReactNode {
  const nocesVoyages: CityCardProps[] = getBestCitiesByRateAndCategory(
    3,
    VoyageType.VOYAGE_DE_NOCES,
  );
  const voyageOrganise: CityCardProps = getBestCityByRateAndCategory(
    VoyageType.VOYAGE_ORGANISE,
  );
  return (
    <div>
      <div className="flex flex-col xl:flex-row items-start w-full mb-12 gap-12">
        <HomeFilter />
        <div className="flex-1">
          <Promo />
        </div>
      </div>
      <div className="bg-white px-4 pt-8">
        <div className="flex flex-col xl:grid xl:grid-cols-2 w-full xl:gap-4 gap-16">
          <div>
            <VoyageCard
              title="Voyages Organisées"
              cards={getVoyagesMiniCardsByCategory(VoyageType.VOYAGE_ORGANISE)}
              linksBase="/voyages"
              bigCardProps={voyageOrganise}
              titleLink={`/voyages?category=${VoyageType.VOYAGE_ORGANISE}`}
            />
          </div>
          <div className="sm:mt-0 mt-52">
            <VoyageCardWithImg
              title="Circuits Sud"
              imageUrl="https://th.bing.com/th/id/OIP.R3osXfaOo7ZExMdxL5Y09QHaE8?rs=1&pid=ImgDetMain"
              cards={getVoyagesMiniCardsByCategory(VoyageType.CIRCUIT_SUD)}
              linksBase="/voyages"
              titleLink={`/voyages?category=${VoyageType.CIRCUIT_SUD}`}
            />
          </div>
        </div>
        <div className="flex text-2xl py-4 px-4 mt-52 sm:mt-16 mb-8 flex-row border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
          <strong className="ml-1 xs:ml-4">Voyages de Noces</strong>
          <Link href={`/voyages/${VoyageType.VOYAGE_DE_NOCES}`}>
            <p className="ml-1 xs:mr-4">Voir Tous</p>
          </Link>
        </div>
        <div className="lg:grid flex flex-col items-center justify-centers lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {nocesVoyages.map((v, index) => (
            <CityCard
              linkBase="/voyages"
              isHorizontal={false}
              key={index}
              cityProps={v}
            />
          ))}
        </div>
        <div className="flex flex-row text-xl py-2 mt-40 sm:mt-8 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
          <strong className="ml-4">Hotels en Tunisie :</strong>
          <Link href={`/hotels-list?category=${VoyageType.VOYAGE_DE_NOCES}`}>
            <p className="mr-4">Voir Tous</p>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 lg:gap-8 pb-24">
          <VoyageCardWithImg
            imageUrl={"/hotel-categories/hotel-sur-mer.jpg"}
            mainLink={`hotels-list?category=${HotelCategory.VUE_MER}`}
            cards={getMiniCards(HotelCategory.VUE_MER)}
            linksBase="/hotels-list"
          />
          <VoyageCardWithImg
            imageUrl={"/hotel-categories/hotel-recommandé.jpg"}
            mainLink={`hotels-list?category=${HotelCategory.RECOMMANDE}`}
            linksBase="hotels-list"
            cards={getMiniCards(HotelCategory.RECOMMANDE)}
          />
          <VoyageCardWithImg
            imageUrl={"/hotel-categories/hotel-all-inclusive.jpg"}
            mainLink={`hotels-list?category=${HotelCategory.ALL_INCLUSIVE}`}
            cards={getMiniCards(HotelCategory.ALL_INCLUSIVE)}
            linksBase="hotels-list"
          />
          <VoyageCardWithImg
            imageUrl={"/hotel-categories/hotel-toboggan.jpg"}
            mainLink={`hotels-list?category=${HotelCategory.TOBBOGAN}`}
            cards={getMiniCards(HotelCategory.TOBBOGAN)}
            linksBase="hotels-list"
          />
        </div>
      </div>
    </div>
  );
}
