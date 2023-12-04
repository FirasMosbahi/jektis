export enum HotelCategory {
  VUE_MER = "vue_mer",
  RECOMMANDE = "recommandé",
  ALL_INCLUSIVE = "all_inclusive",
  TOBBOGAN = "tobbogan",
}
export default class HotelCardProps {
  id: number;
  cityName: string;
  name: string;
  imageUrl: string;
  rate: number;
  price: number;
  minimumStay: number;
  inclusive: boolean;
  detailEnfant: string;
  categories: HotelCategory[];
  constructor(
    id: number,
    cityName: string,
    detail: string,
    imageUrl: string,
    rate: number,
    price: number,
    minimumStay: number,
    inclusive: boolean,
    detailEnfant: string,
    categories: HotelCategory[],
  ) {
    this.id = id;
    this.cityName = cityName;
    this.name = detail;
    this.imageUrl = imageUrl;
    this.rate = rate;
    this.price = price;
    this.minimumStay = minimumStay;
    this.inclusive = inclusive;
    this.detailEnfant = detailEnfant;
    this.categories = categories;
  }
}
