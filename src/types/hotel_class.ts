export default class HotelCardProps {
  id: number;
  cityName: string;
  detail: string;
  imageUrl: string;
  rate: number;
  price: number;
  minimumStay: number;
  inclusive: boolean;
  detailEnfant: String;
  constructor(
    id: number,
    cityName: string,
    detail: string,
    imageUrl: string,
    rate: number,
    price: number,
    minimumStay: number,
    inclusive: boolean,
    detailEnfant: String,
  ) {
    this.id = id;
    this.cityName = cityName;
    this.detail = detail;
    this.imageUrl = imageUrl;
    this.rate = rate;
    this.price = price;
    this.minimumStay = minimumStay;
    this.inclusive = inclusive;
    this.detailEnfant = detailEnfant;
  }
}
