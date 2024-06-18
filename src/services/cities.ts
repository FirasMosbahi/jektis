import { VoyageCardProps, VoyageType } from "@jektis/types";
import { voyageCards } from "@jektis/mocks";

export function getCities(
  category: string | string[] | undefined,
): VoyageCardProps[] {
  if (
    category &&
    typeof category === "string" &&
    Object.values(VoyageType).includes(category as VoyageType)
  ) {
    return getCitiesByCategory(category as VoyageType);
  } else {
    return voyageCards;
  }
}
export function getCitiesByCategory(
  voyageCategory: VoyageType,
): VoyageCardProps[] {
  return voyageCards.filter((city) => city.category === voyageCategory);
}
export function getVoyagesMiniCards(): VoyageCardProps[] {
  return voyageCards.sort((v1, v2) => v1.rate - v2.rate).slice(0, 3);
}
export function getVoyagesMiniCardsByCategory(
  category: VoyageType,
): VoyageCardProps[] {
  return getCitiesByCategory(category)
    .sort((v1, v2) => v1.rate - v2.rate)
    .slice(0, 3);
}
export function getBestCitiesByRateAndCategory(
  number: number,
  category: VoyageType,
): VoyageCardProps[] {
  return voyageCards
    .filter((v) => v.category === category)
    .sort((v1, v2) => v1.rate - v2.rate)
    .slice(0, number);
}
export function getBestCityByRateAndCategory(
  category: VoyageType,
): VoyageCardProps {
  return voyageCards
    .filter((v) => v.category === category)
    .sort((v1, v2) => v1.rate - v2.rate)[0];
}
