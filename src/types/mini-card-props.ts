import { VoyageCardProps } from "@jektis/types/city_type";
import { HotelCardProps } from "@jektis/types/hotel_class";

export type MiniCardProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};
function miniCardFromHotelCard(
  hotelOrVoyage: HotelCardProps | VoyageCardProps,
): MiniCardProps {
  return {
    id: hotelOrVoyage.id,
    name: hotelOrVoyage.name,
    imageUrl: hotelOrVoyage.name,
    price: hotelOrVoyage.price,
  };
}
