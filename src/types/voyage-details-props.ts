import { date } from "yup";

export type ProgramDay = {
  title: string;
  content: string;
};
export type Chambre = {
  title: string;
  unitPrice: number;
};

type ServicesInclus = {
  standard: string[];
  vip: string[];
};

export type Tarif = {
  dateDeVoyage: Date;
  tarifs: string[];
  conditions: string[];
};

export type Visa = {
  documents: string[];
  procedures: string[];
  delais: string[];
};

export type ChargeDeVoyage = {
  nom: string;
  telephone: string;
  whatsapp: string;
  email: string;
};

export type VoyageDetailsProps = {
  id: number;
  name: string;
  country: string;
  imageUrl: string;
  rate: number;
  price: number;
  startDate: Date;
  endDate: Date;
  program: ProgramDay[];
  chambres: Chambre[];
  servicesInclus: ServicesInclus;
  servicesNonInclus: string[];
  visa: Visa;
  chargeeDeVoyage: ChargeDeVoyage;
  payement: string[];
  tarif: Tarif;
};
