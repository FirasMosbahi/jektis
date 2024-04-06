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
import { VoirPlus } from "@jektis/components/icons";
import HotelCardWithImage from "@jektis/components/home/HotelCardWithImage";
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
      <div className="flex lg:flex-row pt-12 lg:pt-0 flex-col-reverse items-center justify-between xl:items-start w-full mb-12 gap-12">
        <div className="xl:min-w-[45%] ">
          <HomeFilter />
        </div>
        <div className="xl:min-w-[50%]">
          <Promo />
        </div>
      </div>
      <div className="bg-white px-4 pt-4 flex flex-col">
        <div className="flex flex-col lg:grid lg:grid-cols-2 xl:max-h-[38rem] w-full h-fit lg:gap-8 mb-8">
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
        <div className="flex text-2xl text-white py-2 px-4 mb-4 flex-row border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
          <strong className="ml-1 text-[20px] xs:ml-4">
            Voyages de Noces{" "}
            <p className="lg:inline hidden"> - Voyages à la carte </p>
          </strong>
          <Link
            href={`/voyages?category=${VoyageType.VOYAGE_DE_NOCES}`}
            className="flex text-white flex-col justify-end"
          >
            <p className="mr-4 text-sm flex flex-row items-center font-light gap-x-1 h-fit">
              Voir Toute la liste <VoirPlus width={12} height={12} />
            </p>
          </Link>
        </div>
        <div className="flex flex-row gap-8 overflow-x-scroll no-scrollbar">
          {nocesVoyages.map((v, index) => (
            <CityCard
              linkBase="/voyages"
              isHorizontal={false}
              key={index}
              cityProps={v}
            />
          ))}
        </div>
        <div className="flex flex-row lg:text-xl text-[18px] text-white gap-8 mt-8 border py-2 lg:px-4 px-2 rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
          <strong className="ml-4">Hotels en Tunisie :</strong>
          <Link
            href={`/hotels-list?category=${VoyageType.VOYAGE_DE_NOCES}`}
            className="flex flex-col justify-end"
          >
            <p className="mr-4 lg:text-sm text-[14px] flex flex-row items-center font-light gap-x-1 h-fit">
              Voir Toute la liste <VoirPlus width={12} height={12} />
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 pb-24 md:mt-8">
          <HotelCardWithImage
            imageUrl="https://www.jektistravel.com/public/images/image/image_0.75932100-1701696368.png"
            mainLink={`hotels-list?category=${HotelCategory.VUE_MER}`}
            cards={getMiniCards(HotelCategory.VUE_MER)}
            linksBase="/hotels-list"
            showSeeAllButton={true}
          />
          <HotelCardWithImage
            imageUrl="https://www.jektistravel.com/public/images/image/image_0.01709600-1701696381.png"
            mainLink={`hotels-list?category=${HotelCategory.RECOMMANDE}`}
            linksBase="hotels-list"
            cards={getMiniCards(HotelCategory.RECOMMANDE)}
            showSeeAllButton={true}
          />
          <HotelCardWithImage
            imageUrl="https://www.jektistravel.com/public/images/image/image_0.11581900-1701696393.png"
            mainLink={`hotels-list?category=${HotelCategory.ALL_INCLUSIVE}`}
            cards={getMiniCards(HotelCategory.ALL_INCLUSIVE)}
            linksBase="hotels-list"
            showSeeAllButton={true}
          />
          <HotelCardWithImage
            imageUrl="https://www.jektistravel.com/public/images/image/image_0.72363500-1701696405.png"
            mainLink={`hotels-list?category=${HotelCategory.TOBBOGAN}`}
            cards={getMiniCards(HotelCategory.TOBBOGAN)}
            linksBase="hotels-list"
            showSeeAllButton={true}
          />
        </div>
      </div>
    </div>
  );
}
