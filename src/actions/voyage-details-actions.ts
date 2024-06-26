import { VoyageDetailsProps } from "@jektis/types";
import {
  cancelFrais,
  chambres,
  chargeeDeVoyage,
  payement,
  program,
  servicesInclus,
  servicesNonInclus,
  visa,
  voyageCards,
} from "@jektis/mocks";

export function getProgram(id: string | number): VoyageDetailsProps {
  if (typeof id === "string") {
    id = Number.parseInt(id);
  }
  const voyage = voyageCards.filter((v) => v.id === id)[0];
  return {
    id,
    name: voyage.name,
    country: voyage.country,
    imageUrl: voyage.imageUrl,
    rate: voyage.rate,
    price: voyage.price,
    startDate: voyage.dateStart,
    endDate: voyage.dateEnd,
    program,
    chambres,
    servicesInclus,
    servicesNonInclus,
    visa,
    chargeeDeVoyage,
    payement,
    tarif: {
      dateDeVoyage: new Date(2024, 5, 24),
      tarifs: payement,
      conditions: cancelFrais,
    },
  };
}
