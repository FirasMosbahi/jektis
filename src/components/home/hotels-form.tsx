"use client";

import React from "react";
import {
  BlackSearchIcon,
  SearchIcon,
  SimpleNextArrow,
  TwoUsers,
  WhiteSearchIcon,
} from "@jektis/components/icons";
import Image from "next/image";
import CustomCalendar from "@jektis/components/generic/CustomCalendar";
import { useForm } from "react-hook-form";
import { HomeFilterFormData } from "@jektis/forms-data/home-filter-form-data";
import { yupResolver } from "@hookform/resolvers/yup";
import { hotelsValidationSchema } from "@jektis/schema/home-forms";
import { hotelSearch } from "@jektis/actions/home-actions";

export default function HotelsForm(): React.ReactElement {
  const { register, setValue, handleSubmit } = useForm<HomeFilterFormData>({
    resolver: yupResolver(hotelsValidationSchema),
  });
  async function onSubmit(form: HomeFilterFormData) {
    await hotelSearch(form);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" h-full flex flex-col lg:w-[530px] xl:w-full gap-6 2xl:gap-5 xl:gap-8 bg-opacity-80 pt-8 border border-transparent rounded-2xl bg-white"
    >
      <div className="px-4 relative">
        <BlackSearchIcon className="absolute top-[40%] size-5 left-7" />

        <input
          type="text"
          id="first_name"
          className="text-xl border bg-transparent border-gray-300 w-full text-black focus:ring-blue-500 focus:border-blue-500 block lg:pl-10 pl-12 p-6"
          placeholder="ex . ville , nom d'hotel"
          {...register("nom")}
        />
      </div>
      <div className="flex flex-row justify-between items-center border border-gray-300 mx-4 py-4 px-4">
        <CustomCalendar
          label="Arrivé"
          setValue={(value: Date) => setValue("arrive", value)}
        />
        <SimpleNextArrow className="size-12" />
        <CustomCalendar
          label="Départ"
          setValue={(value: Date) => setValue("depart", value)}
        />
      </div>
      <div className="flex flex-row items-center border border-gray-300 mx-4 py-8 px-4 gap-2">
        <TwoUsers className="lg:size-6 size-5" />
        {/*<p className="text-black lg:text-[20px] text-[18px] font-semibold">*/}
        {/*  1 Chambre , 2 Adultes, 0 enfants*/}
        {/*</p>*/}
        <select
          id="chambre"
          {...register("chambres")}
          className="bg-transparent text-black lg:text-[20px] text-[18px] font-semibold rounded-lg block w-full custom-select"
        >
          <option selected> 1 Chambre , 2 Adultes, 0 enfants</option>
          <option value="US"> 1 Chambre , 2 Adultes, 0 enfants</option>
          <option value="CA"> 1 Chambre , 2 Adultes, 0 enfants</option>
          <option value="FR"> 1 Chambre , 2 Adultes, 0 enfants</option>
          <option value="DE"> 1 Chambre , 2 Adultes, 0 enfants</option>
        </select>
      </div>
      <div className="flex flex-row justify-center px-6 w-full mt-4 mr-2">
        <button
          type="submit"
          style={{
            borderRadius: 10,
          }}
          className="text-white h-12 w-full bg-[#8eb633] focus:ring-4 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex justify-center items-center me-2 mb-2"
        >
          <WhiteSearchIcon
            width={20}
            height={20}
            strokeWidth={2}
            className="mx-4"
          />
          <p className="text-xl">Rechercher</p>
        </button>
      </div>
    </form>
  );
}
