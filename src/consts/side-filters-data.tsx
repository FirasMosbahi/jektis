import { FilterSection } from "@jektis/types/filter-type";
import Stars from "@jektis/components/generic/stars";
import React from "react";

export const HOTEL_SIDE_FILTER: FilterSection[] = [
  {
    name: "rating",
    values: [
      { value: 3, label: <Stars number={3} width={25} height={25} /> },
      { value: 4, label: <Stars number={4} width={25} height={25} /> },
      { value: 5, label: <Stars number={5} width={25} height={25} /> },
    ],
  },
  {
    name: "Arrangement",
    values: [
      {
        value: "Logement petit déjeuner",
        label: "Logement petit déjeuner",
      },
      { value: "Demi pension", label: "Demi pension" },
      { value: "Pension complète", label: "Pension complète" },
      { value: "All inclusive", label: "All inclusive" },
      {
        value: "All inclusive soft",
        label: "All inclusive soft",
      },
    ],
  },
  {
    name: "Thèmes",
    values: [
      { value: "Promo", label: "Promo" },
      { value: "Top vente", label: "Top vente" },
      { value: "Séjours de noces", label: "Séjours de noces" },
      { value: "Famille", label: "Famille" },
      { value: "Réveillon", label: "Réveillon" },
      { value: "Gratuité enfants", label: "Gratuité enfants" },
      { value: "Tobbogan", label: "Tobbogan" },
      { value: "Luxe", label: "Luxe" },
      { value: "Sahara", label: "Sahara" },
      { value: "Adults only", label: "Adults only" },
      {
        value: "Recommandé par Jektis",
        label: "Recommandé par Jektis",
      },
    ],
  },
];
