"use server";

import {
  HotelSearchFormData,
  HotelSideSearchFormData,
} from "@jektis/forms-data/hotel-filter-form-data";

export async function searchHotel(data: HotelSearchFormData) {
  console.log(data);
}

export async function sideSearchHotel(data: HotelSideSearchFormData) {
  console.log(data);
}
