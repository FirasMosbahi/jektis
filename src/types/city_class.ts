export enum VoyageType {
  VOYAGE_ORGANISE = "voyage_organisé",
  CIRCUIT_SUD = "circuit_sud",
  VOYAGE_DE_NOCES = "voyage_de_noces",
  VOYAGE_A_LA_CARTE = "voyage_a_la_carte",
}

export type VoyageCardProps = {
  id: number;
  name: string;
  country: string;
  imageUrl: string;
  rate: number;
  paymentType: string;
  dateStart: Date;
  dateEnd: Date;
  remainingPlace: number;
  price: number;
  category: VoyageType;
};
