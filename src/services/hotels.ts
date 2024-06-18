import { HotelCardProps, HotelCategory } from "@jektis/types/hotel_class";
import hotelCards from "@jektis/mocks/hotelCard_moks";
import { VoyageCardProps } from "@jektis/types";

export function getHotels(
  category: string | string[] | undefined,
  city: string | string[] | undefined,
): HotelCardProps[] {
  let result = hotelCards;
  if (
    category &&
    typeof category === "string" &&
    Object.values(HotelCategory).includes(category as HotelCategory)
  ) {
    // return getHotelsByCategory(category as HotelCategory);
    result = result.filter((hotel) =>
      hotel.categories.includes(category as HotelCategory),
    );
  }
  if (city) {
    if (typeof city === "string") {
      result = result.filter((hotel) => hotel.cityName === city);
    } else {
      result = result.filter((hotel) => city.includes(hotel.cityName));
    }
  }
  return result;
}
export function getHotelsByCategory(
  hotelCategory: HotelCategory,
): HotelCardProps[] {
  return hotelCards.filter((hotel) => hotel.categories.includes(hotelCategory));
}
export function getMiniCards(category: HotelCategory): HotelCardProps[] {
  return getHotelsByCategory(category)
    .sort((hotel1, hotel2) => hotel1.rate - hotel2.rate)
    .slice(0, 3);
}
export function getHotelById(id: string | number): HotelCardProps {
  if (typeof id === "string") {
    id = Number.parseInt(id);
  }
  const hotel = hotelCards.find((hotel) => hotel.id === id);
  if (hotel === undefined) {
    throw new Error("no hotel with this id");
  } else {
    return hotel;
  }
}
