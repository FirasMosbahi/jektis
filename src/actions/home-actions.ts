"use server";

import {
  AllezReourVolFormData,
  HomeFilterFormData,
  MultiDestinationsVolFormData,
  SimpleAllezVolFormData,
  VoyageFormData,
} from "@jektis/forms-data/home-filter-form-data";

export async function hotelSearch(data: HomeFilterFormData) {
  console.log(data);
}
export async function allezDapartVolSearch(data: AllezReourVolFormData) {
  console.log(data);
}

export async function simpleAllerVolSearch(data: SimpleAllezVolFormData) {
  console.log(data);
}

export async function MultiDestinationsVolSearch(
  data: MultiDestinationsVolFormData,
) {
  console.log(data);
}

export async function VoyageSearch(data: VoyageFormData) {
  console.log(data);
}
