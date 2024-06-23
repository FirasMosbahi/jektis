import {
  HotelCardProps,
  HotelCategory,
  VoyageCardProps,
  VoyageType,
} from "@jektis/types";
import { voyageCards } from "@jektis/mocks";
import hotelCards from "@jektis/mocks/hotelCard_moks";
import { PromoType } from "@jektis/types/promo";
import { promos } from "@jektis/mocks/promos-mock";

export function getVoyagesMiniCards(): VoyageCardProps[] {
  return voyageCards.sort((v1, v2) => v1.rate - v2.rate).slice(0, 3);
}
// export function getVoyagesMiniCardsByCategory(
//   category: VoyageType,
// ): VoyageCardProps[] {
//   return getCitiesByCategory(category)
//     .sort((v1, v2) => v1.rate - v2.rate)
//     .slice(0, 3);
// }
// export function getBestCitiesByRateAndCategory(
//   number: number,
//   category: VoyageType,
// ): VoyageCardProps[] {
//   return voyageCards
//     .filter((v) => v.category === category)
//     .sort((v1, v2) => v1.rate - v2.rate)
//     .slice(0, number);
// }
// export function getBestCityByRateAndCategory(
//   category: VoyageType,
// ): VoyageCardProps {
//   return voyageCards
//     .filter((v) => v.category === category)
//     .sort((v1, v2) => v1.rate - v2.rate)[0];
// }

type HomePageVoyagesData = {
  mainVoyageOrganise: VoyageCardProps;
  voyagesNoces: VoyageCardProps[];
  voyagesOrganise: VoyageCardProps[];
  voyagesSud: VoyageCardProps[];
};

export function homePageVoyagesData(): HomePageVoyagesData {
  const mainVoyageOrganise = voyageCards
    .filter((v) => v.category === VoyageType.VOYAGE_ORGANISE)
    .sort((v1, v2) => v1.rate - v2.rate)[0];
  const voyagesNoces = voyageCards
    .filter((v) => v.category === VoyageType.VOYAGE_DE_NOCES)
    .sort((v1, v2) => v1.rate - v2.rate)
    .slice(0, 3);
  const voyagesOrganise = voyageCards
    .filter((v) => v.category === VoyageType.VOYAGE_ORGANISE)
    .sort((v1, v2) => v1.rate - v2.rate)
    .slice(1, 4);
  const voyagesSud = voyageCards
    .filter((v) => v.category === VoyageType.CIRCUIT_SUD)
    .sort((v1, v2) => v1.rate - v2.rate)
    .slice(0, 3);
  return {
    mainVoyageOrganise,
    voyagesNoces,
    voyagesOrganise,
    voyagesSud,
  };
}

type HomePageHotelsData = {
  hotelsVueMer: HotelCardProps[];
  hotelsRecommande: HotelCardProps[];
  hotelsAllInclusive: HotelCardProps[];
  hotelsTobbogan: HotelCardProps[];
};

export function homePageHotelsData(): HomePageHotelsData {
  const hotelsVueMer = hotelCards
    .filter((hotel) => hotel.categories.includes(HotelCategory.VUE_MER))
    .sort((hotel1, hotel2) => hotel1.rate - hotel2.rate)
    .slice(0, 3);
  const hotelsRecommande = hotelCards
    .filter((hotel) => hotel.categories.includes(HotelCategory.RECOMMANDE))
    .sort((hotel1, hotel2) => hotel1.rate - hotel2.rate)
    .slice(0, 3);
  const hotelsAllInclusive = hotelCards
    .filter((hotel) => hotel.categories.includes(HotelCategory.ALL_INCLUSIVE))
    .sort((hotel1, hotel2) => hotel1.rate - hotel2.rate)
    .slice(0, 3);
  const hotelsTobbogan = hotelCards
    .filter((hotel) => hotel.categories.includes(HotelCategory.TOBBOGAN))
    .sort((hotel1, hotel2) => hotel1.rate - hotel2.rate)
    .slice(0, 3);
  return {
    hotelsAllInclusive,
    hotelsRecommande,
    hotelsTobbogan,
    hotelsVueMer,
  };
}

export function homePagePromos(): PromoType[] {
  return promos;
}
