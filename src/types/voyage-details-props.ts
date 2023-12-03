export type ProgramDay = {
  title: string;
  content: string;
};
export type Chambres = {
  title: string;
  capacity: number;
  unitPrice: number;
};
export default class VoyageDetailsProps {
  constructor(
    public id: number,
    public name: string,
    public country: string,
    public imageUrl: string,
    public rate: number,
    public price: number,
    public nombreJours: number,
    public nombreNuits: number,
    public program: ProgramDay[],
    public chambres: Chambres[],
    public servicesInclus: {
      standard: string[];
      vip: string[];
    },
    public servicesNonInclus: string[],
    public visa: string[],
    public chargeeDeVoyage: string[],
    public payement: string[],
    public tarif: {
      prix: string[];
      payement: string[];
      cancelFrais: string[];
    },
  ) {}
}
