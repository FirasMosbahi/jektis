export enum HotelCategory {
  VUE_MER = "vue_mer",
  RECOMMANDE = "recommandé",
  ALL_INCLUSIVE = "all_inclusive",
  TOBBOGAN = "tobbogan",
}
export type HotelCardProps = {
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
  images: string[];
};
