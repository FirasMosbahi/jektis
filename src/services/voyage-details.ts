import VoyageDetailsProps from "@jektis/types/voyage-details-props";
import {
  cancelFrais,
  chambres,
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
    chambres({
      chambreSignle: voyage.price,
      chambreDouble: voyage.price * 1.7,
      chambreTrois: voyage.price * 2.2,
      enfant6Ans: voyage.price * 2.4,
      enfant12Ans: voyage.price * 2.6,
    }),
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
