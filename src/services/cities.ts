import CityCardProps, { VoyageType } from "@jektis/types/city_class";
import { cityCards } from "@jektis/mocks";
import MiniCardProps from "@jektis/types/mini-card-props";

export function getCities(
  category: string | string[] | undefined,
): CityCardProps[] {
  if (
    category &&
    typeof category === "string" &&
    Object.values(VoyageType).includes(category as VoyageType)
  ) {
    return getCitiesByCategory(category as VoyageType);
  } else {
    return cityCards;
  }
}
export function getCitiesByCategory(
  voyageCategory: VoyageType,
): CityCardProps[] {
  return cityCards.filter((city) => city.category === voyageCategory);
}
export function getVoyagesMiniCards(): MiniCardProps[] {
  return cityCards
    .sort((v1, v2) => v1.rate - v2.rate)
    .slice(0, 3)
    .map((v) => MiniCardProps.fromVoyageCardProps(v));
}
export function getVoyagesMiniCardsByCategory(
  category: VoyageType,
): MiniCardProps[] {
  return getCitiesByCategory(category)
    .sort((v1, v2) => v1.rate - v2.rate)
    .slice(0, 3);
}
export function getBestCitiesByRateAndCategory(
  number: number,
  category: VoyageType,
): CityCardProps[] {
  return cityCards
    .filter((v) => v.category === category)
    .sort((v1, v2) => v1.rate - v2.rate)
    .slice(0, number);
}
export function getBestCityByRateAndCategory(
  category: VoyageType,
): CityCardProps {
  return cityCards
    .filter((v) => v.category === category)
    .sort((v1, v2) => v1.rate - v2.rate)[0];
}
