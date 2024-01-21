import React from "react";
import HomeFilter from "@jektis/components/home/home-filter";
import VoyageCard from "@jektis/components/home/voyage-card";
import CityCard from "@jektis/components/home/city-card";
import VoyageCardWithImg from "@jektis/components/home/voyage-card-with-image";
import Promo from "@jektis/components/home/promo";
import Link from "next/link";
import { HotelCategory, VoyageCardProps, VoyageType } from "@jektis/types";
import {
  getBestCitiesByRateAndCategory,
  getBestCityByRateAndCategory,
  getMiniCards,
  getVoyagesMiniCardsByCategory,
} from "@jektis/services";
export default function Index(): React.ReactNode {
  const nocesVoyages: VoyageCardProps[] = getBestCitiesByRateAndCategory(
    3,
    VoyageType.VOYAGE_DE_NOCES,
  );
  const voyageOrganise: VoyageCardProps = getBestCityByRateAndCategory(
    VoyageType.VOYAGE_ORGANISE,
  );
  return (
    <div>
      <div className="flex xl:flex-row flex-col items-center xl:items-start w-full mb-12 gap-12">
        <HomeFilter />
        <div className="flex-1">
          <Promo />
        </div>
      </div>
      <div className="bg-white px-4 pt-4 flex flex-col">
        <div className="flex flex-col xl:grid xl:grid-cols-2 xl:max-h-[38rem] w-full h-fit xl:gap-8 mb-8">
          <div>
            <VoyageCard
              title="Voyages Organisées"
              cards={getVoyagesMiniCardsByCategory(VoyageType.VOYAGE_ORGANISE)}
              linksBase="/voyages"
              bigCardProps={voyageOrganise}
              titleLink={`/voyages?category=${VoyageType.VOYAGE_ORGANISE}`}
            />
          </div>
          <div>
            <VoyageCardWithImg
              title="Circuits Sud"
              imageUrl="https://th.bing.com/th/id/OIP.R3osXfaOo7ZExMdxL5Y09QHaE8?rs=1&pid=ImgDetMain"
              cards={getVoyagesMiniCardsByCategory(VoyageType.CIRCUIT_SUD)}
              linksBase="/voyages"
              titleLink={`/voyages?category=${VoyageType.CIRCUIT_SUD}`}
            />
          </div>
        </div>
        <div className="flex text-2xl py-2 px-4 mb-4 flex-row border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
          <strong className="ml-1 xs:ml-4">Voyages de Noces</strong>
          <Link href={`/voyages?category=${VoyageType.VOYAGE_DE_NOCES}`}>
            <p className="ml-1 xs:mr-4">Voir Tous</p>
          </Link>
        </div>
        <div className="flex flex-wrap gap-8">
          {nocesVoyages.map((v, index) => (
            <CityCard
              linkBase="/voyages"
              isHorizontal={false}
              key={index}
              cityProps={v}
            />
          ))}
        </div>
        <div className="flex flex-row text-xl gap-8 mt-8 border py-2 px-4 rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
          <strong className="ml-4">Hotels en Tunisie :</strong>
          <Link href={`/hotels-list?category=${VoyageType.VOYAGE_DE_NOCES}`}>
            <p className="mr-4">Voir Tous</p>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 pb-24 md:mt-8">
          <VoyageCardWithImg
            imageUrl="https://www.jektistravel.com/public/images/image/image_0.75932100-1701696368.png"
            mainLink={`hotels-list?category=${HotelCategory.VUE_MER}`}
            cards={getMiniCards(HotelCategory.VUE_MER)}
            linksBase="/hotels-list"
          />
          <VoyageCardWithImg
            imageUrl="https://www.jektistravel.com/public/images/image/image_0.01709600-1701696381.png"
            mainLink={`hotels-list?category=${HotelCategory.RECOMMANDE}`}
            linksBase="hotels-list"
            cards={getMiniCards(HotelCategory.RECOMMANDE)}
          />
          <VoyageCardWithImg
            imageUrl="https://www.jektistravel.com/public/images/image/image_0.11581900-1701696393.png"
            mainLink={`hotels-list?category=${HotelCategory.ALL_INCLUSIVE}`}
            cards={getMiniCards(HotelCategory.ALL_INCLUSIVE)}
            linksBase="hotels-list"
          />
          <VoyageCardWithImg
            imageUrl="https://www.jektistravel.com/public/images/image/image_0.72363500-1701696405.png"
            mainLink={`hotels-list?category=${HotelCategory.TOBBOGAN}`}
            cards={getMiniCards(HotelCategory.TOBBOGAN)}
            linksBase="hotels-list"
          />
        </div>
      </div>
    </div>
  );
}
