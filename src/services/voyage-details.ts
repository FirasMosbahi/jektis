import VoyageDetailsProps from "@jektis/types/voyage-details-props";
import { getCities } from "@jektis/services/cities";
import {
  cancelFrais,
  chargeeDeVoyage,
  payement,
  prix,
  program,
  servicesInclus,
  servicesNonInclus,
  visa,
} from "@jektis/mocks/program-mock";
import { cityCards } from "@jektis/mocks";

export function getProgram(id: number): VoyageDetailsProps {
  const voyage = cityCards.filter((v) => v.id === id)[0];
  return new VoyageDetailsProps(
    id,
    voyage.name,
    voyage.country,
    voyage.imageUrl,
    voyage.rate,
    voyage.price,
    voyage.numberOfDays,
    voyage.numberofNights,
    program,
    [
      {
        title: "chambre individuelle",
        capacity: 1,
        unitPrice: voyage.price,
      },
      {
        title: "chambre double",
        capacity: 2,
        unitPrice: voyage.price * 1.7,
      },
    ],
    servicesInclus,
    servicesNonInclus,
    visa,
    chargeeDeVoyage,
    payement,
    {
      payement,
      prix: prix,
      cancelFrais: cancelFrais,
    },
  );
}
