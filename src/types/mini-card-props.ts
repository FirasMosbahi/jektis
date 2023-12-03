import HotelCardProps from "@jektis/types/hotel_class";
import CityCardProps from "@jektis/types/city_class";

export default class MiniCardProps {
  constructor(
    public id: number,
    public name: string,
    public imageUrl: string,
    public price: number,
  ) {}
  static fromHotelCardProps(hotel: HotelCardProps): MiniCardProps {
    return new MiniCardProps(
      hotel.id,
      hotel.detail,
      hotel.imageUrl,
      hotel.price,
    );
  }
  static fromVoyageCardProps(voyage: CityCardProps): MiniCardProps {
    return new MiniCardProps(
      voyage.id,
      voyage.name,
      voyage.imageUrl,
      voyage.price,
    );
  }
}
