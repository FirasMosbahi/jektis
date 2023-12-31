import HotelCardProps from "@jektis/types/hotel_class";
import { VoyageCardProps } from "@jektis/types/city_class";

export default class MiniCardProps {
  constructor(
    public id: number,
    public name: string,
    public imageUrl: string,
    public price: number,
  ) {}
  static fromHotelCardProps(hotel: HotelCardProps): MiniCardProps {
    return new MiniCardProps(hotel.id, hotel.name, hotel.imageUrl, hotel.price);
  }
  static fromVoyageCardProps(voyage: VoyageCardProps): MiniCardProps {
    return new MiniCardProps(
      voyage.id,
      voyage.name,
      voyage.imageUrl,
      voyage.price,
    );
  }
}
