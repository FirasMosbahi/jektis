import { HotelCardProps } from "@jektis/types";
import hotelCards from "@jektis/mocks/hotelCard_moks";

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
