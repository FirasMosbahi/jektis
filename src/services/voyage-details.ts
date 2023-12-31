import VoyageDetailsProps from "@jektis/types/voyage-details-props";
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
import { voyageCards } from "@jektis/mocks";

export function getProgram(id: string | number): VoyageDetailsProps {
  if (typeof id === "string") {
    id = Number.parseInt(id);
  }
  const voyage = voyageCards.filter((v) => v.id === id)[0];
  return new VoyageDetailsProps(
    id,
    voyage.name,
    voyage.country,
    voyage.imageUrl,
    voyage.rate,
    voyage.price,
    voyage.dateStart,
    voyage.dateEnd,
    program,
    [
      {
        title: "chambre individuelle",
        unitPrice: voyage.price,
      },
      {
        title: "chambre double",
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
