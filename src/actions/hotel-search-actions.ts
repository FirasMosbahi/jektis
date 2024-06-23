import { HotelCardProps, HotelCategory } from "@jektis/types/hotel_class";
import hotelCards from "@jektis/mocks/hotelCard_moks";
import { VoyageCardProps } from "@jektis/types";
import { HotelFilterFormData } from "@jektis/forms-data/hotel-filter-form-data";

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
