export enum VoyageType {
  VOYAGE_ORGANISE = "voyage_organisé",
  CIRCUIT_SUD = "circuit_sud",
  VOYAGE_DE_NOCES = "voyage_de_noces",
}

export default class CityCardProps {
  id: number;
  name: string;
  country: string;
  imageUrl: string;
  rate: number;
  paymentType: string;
  dateStart: string;
  dateEnd: string;
  remainingPlace: number;
  price: number;
  numberOfDays: number;
  numberofNights: number;
  year: number;
  category: VoyageType;
  constructor(
    id: number,
    countryName: string,
    detail: string,
    imageUrl: string,
    rate: number,
    paymentType: string,
    dateStart: string,
    dateEnd: string,
    remainingPlace: number,
    price: number,
    numberofNights: number,
    numberOfDays: number,
    category: VoyageType,
  ) {
    this.id = id;
    this.name = countryName;
    this.country = detail;
    this.imageUrl = imageUrl;
    this.rate = rate;
    this.paymentType = paymentType;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.remainingPlace = remainingPlace;
    this.price = price;
    this.numberOfDays = numberOfDays;
    this.numberofNights = numberofNights;
    this.year = new Date().getFullYear();
    this.category = category;
  }
}
