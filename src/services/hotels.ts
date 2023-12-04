import HotelCardProps, { HotelCategory } from "@jektis/types/hotel_class";
import hotelCards from "@jektis/mocks/hotelCard_moks";
import MiniCardProps from "@jektis/types/mini-card-props";

export function getHotels(
  category: string | string[] | undefined,
): HotelCardProps[] {
  if (
    category &&
    typeof category === "string" &&
    Object.values(HotelCategory).includes(category as HotelCategory)
  ) {
    return getHotelsByCategory(category as HotelCategory);
  } else {
    return hotelCards;
  }
}
export function getHotelsByCategory(
  hotelCategory: HotelCategory,
): HotelCardProps[] {
  return hotelCards.filter((hotel) => hotel.categories.includes(hotelCategory));
}
export function getMiniCards(category: HotelCategory): MiniCardProps[] {
  return getHotelsByCategory(category)
    .sort((hotel1, hotel2) => hotel1.rate - hotel2.rate)
    .slice(0, 3)
    .map((hotel) => MiniCardProps.fromHotelCardProps(hotel));
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
