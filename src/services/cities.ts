import CityCardProps from "@jektis/types/city_class";
import { cityCards } from "@jektis/mocks";

export function getCities(): CityCardProps[] {
  return cityCards;
}
