"use client";

import React, { useEffect } from "react";
import Center, { Axes } from "@jektis/components/generic/center";
import InputWithIcon from "@jektis/components/generic/input-with-icon";
import {
  Calendar,
  Localisation,
  Trolley,
  WhiteSearchIcon,
} from "@jektis/components/icons";
import { useForm } from "react-hook-form";
import { HotelSearchFormData } from "@jektis/forms-data/hotel-filter-form-data";
import { yupResolver } from "@hookform/resolvers/yup";
import { hotelSearchValidationSchema } from "@jektis/schema/hotel-forms";
import { searchHotel } from "@jektis/actions/hotel-search-actions";

export default function HotelsFilter(): React.ReactNode {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<HotelSearchFormData>({
    resolver: yupResolver(hotelSearchValidationSchema),
  });
  async function onSubmit(data: HotelSearchFormData) {
    await searchHotel(data);
  }
  return (
    <div className="hidden lg:flex flex-col w-full">
      <div className="rounded-md shadow-sm w-full mt-8">
        <Center axe={Axes.y}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex lg:flex-row flex-col bg-white xl:items-start xl:min-w-fit lg:px-0 px-8 items-start gap-8 lg:gap-0 xl:h-16 rounded-xl border-2 border-blue-700 w-full py-2 xl:bg-white"
          >
            <div className="flex flex-row w-full xl:h-full xl:max-w-[230px]  lg:w-[320px] h-12 border border-transparent lg:rounded-none rounded-2xl lg:mx-0 items-center lg:gap-2 gap-4 px-4 xl:pl-4">
              <Localisation width={25} height={25} />
              <select
                id="countries"
                {...register("location")}
                className="w-full h-full border border-transparent custom-select text-sm font-medium text-gray-900"
              >
                <option value="">Ou allez vous </option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="flex xl:max-w-[450px] lg:w-[650px] xl:text-[0.8rem] xl:min-w-[350px] sm:flex-row flex-col xl:px-4 xl:h-full sm:h-12 w-full xl:gap-6 sm:gap-8 gap-4 bg-white border-x-2 sm:justify-around xl:justify-center lg:rounded-none rounded-2xl lg:border-x-blue-700 px-4">
              <div className="flex xl:min-w-[9rem] flex-row xl:gap-4 gap-4 items-center">
                <Calendar width={25} height={25} />
                <input
                  type="date"
                  {...register("arrive")}
                  className="text-sm font-medium text-gray-900"
                />
              </div>
              <div className="flex xl:min-w-[9rem] flex-row xl:gap-4 gap-8 items-center">
                <Calendar width={25} height={25} />
                <input
                  type="date"
                  {...register("depart")}
                  className="sm:w-32 text-sm w-full font-medium text-gray-900"
                />
              </div>
            </div>
            <div className="border-r-2 lg:w-[320px] xl:max-w-[230px] bg-white w-full xl:h-full lg:rounded-none rounded-2xl lg:border-r-blue-700">
              <div className="flex flex-row  h-12 items-center xl:h-full xl:gap-2 gap-4 px-6 xl:pl-4">
                <Trolley width={25} height={25} />
                <select
                  id="countries"
                  {...register("reservation")}
                  className="text-sm w-full custom-select font-medium text-gray-900"
                >
                  <option>Chambre </option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div className="border-l-3 flex-1 lg:min-w-[250px] w-full flex flex-col  sm:items-end items-center justify-end pr-8 lg:pr-4 border-l-blue-700">
              <button
                type="submit"
                style={{
                  borderRadius: 10,
                }}
                className="text-white bg-blue-800 font-medium px-12 h-12 py-2.5 flex flex-row items-center"
              >
                <WhiteSearchIcon
                  width={20}
                  height={20}
                  strokeWidth={2}
                  className="mr-4"
                />
                Rechercher
              </button>
            </div>
          </form>
        </Center>
      </div>
    </div>
  );
}
