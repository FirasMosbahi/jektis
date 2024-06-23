"use client";

import { HotelFilterFormData } from "@jektis/forms-data/hotel-filter-form-data";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function useOnHotelFormSubmit() {
  const router = useRouter();
  return useCallback((data: HotelFilterFormData) => {
    console.log(JSON.stringify(data));
    router.push(`/hotels-list?filters=${JSON.stringify(data)}`);
  }, []);
}
