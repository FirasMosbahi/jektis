"use server";

import {
  AllezReourVolFormData,
  HotelFilterFormData,
  MultiDestinationsVolFormData,
  SimpleAllezVolFormData,
  VoyageFormData,
} from "@jektis/forms-data/hotel-filter-form-data";

export async function hotelSearch(data: HotelFilterFormData) {
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
