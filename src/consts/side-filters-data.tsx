import { FilterSection } from "@jektis/types/filter-type";
import Stars from "@jektis/components/generic/stars";
import React from "react";

export const HOTEL_SIDE_FILTER_DATA: FilterSection[] = [
  {
    name: "Catégorie",
    field: "Catégorie",
    values: [
      { value: 3, label: <Stars number={3} width={25} height={25} /> },
      { value: 4, label: <Stars number={4} width={25} height={25} /> },
      { value: 5, label: <Stars number={5} width={25} height={25} /> },
    ],
  },
  {
    name: "Formule",
    field: "Formule",
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
    field: "themes",

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

export const VOYAGE_SIDE_FILTER_DATA: FilterSection[] = [
  {
    name: "Thèmes",
    field: "themes",

    values: [
      { value: "VIP", label: "VIP" },
      { value: "Moyen Courier", label: "Moyen Courier" },
      { value: "Long Courier", label: "Long Courier" },
      { value: "Famille", label: "Famille" },
      { value: "Voyage de noces", label: "Voyage de noces" },
      { value: "Shopping", label: "Shopping" },
      { value: "Spécial jeunes", label: "Spécial jeunes" },
      {
        value: "Linguistique",
        label: "Linguistique",
      },
    ],
  },
  {
    name: "VISA",
    field: "visa",
    values: [
      {
        value: true,
        label: "Avec Visa",
      },
      {
        value: false,
        label: "Sans Visa",
      },
    ],
  },
  {
    name: "Durée",
    field: "duree",

    values: [
      { value: 5, label: "5 Jours +" },
      { value: 7, label: "7 Jours +" },
      { value: 10, label: "10 Jours +" },
    ],
  },
  {
    name: "Continent",
    field: "continent",
    values: [
      { value: "Asie", label: "Asie" },
      { value: "Europe", label: "Europe" },
      { value: "Amérique", label: "Amérique" },
      { value: "Afrique", label: "Afrique" },
      { value: "Moyen Orient", label: "Moyen Orient" },
    ],
  },
];
