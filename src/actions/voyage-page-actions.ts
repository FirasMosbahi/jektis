import { VoyageCardProps, VoyageType } from "@jektis/types";
import { voyageCards } from "@jektis/mocks";

type VoyagesResponse = {
  voyages: VoyageCardProps[];
  total: number;
};

export function getVoyages(
  category: string | string[] | undefined,
  page: string | string[] | undefined,
): VoyagesResponse {
  const currentPage = Number.parseInt(typeof page === "string" ? page : "0");
  let voyages: VoyageCardProps[] = [];
  if (
    category &&
    typeof category === "string" &&
    Object.values(VoyageType).includes(category as VoyageType)
  ) {
    voyages = voyageCards
      .filter((city) => city.category === category)
      .slice(currentPage * 4, (currentPage + 1) * 4);
  } else {
    voyages = voyageCards.slice(currentPage * 4, (currentPage + 1) * 4);
  }
  return { voyages, total: voyageCards.length };
}
