"use client";

import RoomsForm from "@jektis/components/home/RoomsForm";

import React, { useMemo } from "react";
import {
  AddIcon,
  BlackSearchIcon,
  Close,
  Plus,
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
  const today = new Date();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const { register, getValues, setValue, handleSubmit } =
    useForm<HomeFilterFormData>({
      resolver: yupResolver(hotelsValidationSchema),
      defaultValues: {
        depart: new Date(today.getTime() + 24 * 60 * 60 * 1000),
        arrive: today,
        chambres: [
          {
            enfants: [],
            bebe: 0,
            adultes: 0,
          },
        ],
      },
    });
  async function onSubmit(form: HomeFilterFormData) {
    console.log(form);
    await hotelSearch(form);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`relative h-full flex flex-col lg:w-[530px] xl:w-full gap-6 2xl:gap-5 xl:gap-8 ${
        isPopupOpen ? "bg-opacity-70" : ""
      } pt-8 border border-transparent rounded-2xl bg-white`}
    >
      <div className="px-4 relative">
        <BlackSearchIcon className="absolute top-[35%] size-5 left-7" />

        <input
          type="text"
          id="first_name"
          className="text-xl border bg-transparent border-gray-300 w-full text-black focus:ring-blue-500 focus:border-blue-500 block lg:pl-10 pl-24 p-6"
          placeholder="Votre destination"
          {...register("nom")}
        />
      </div>
      <div className="flex flex-row h-28 justify-between items-center border border-gray-300 mx-4 py-4 px-4">
        <CustomCalendar
          label="Arrivée"
          value={getValues().arrive ?? today}
          setValue={(value: Date) => {
            const date = getValues().depart ?? new Date();
            if (value > new Date() && value < date) {
              setValue("arrive", value);
              return true;
            }
            return false;
          }}
        />
        <SimpleNextArrow className="size-12" />
        <CustomCalendar
          value={
            getValues().depart ??
            new Date(today.getTime() + 24 * 60 * 60 * 1000)
          }
          label="Départ"
          setValue={(value: Date) => {
            const date = getValues().arrive ?? new Date();
            if (value > new Date() && value > date) {
              setValue("depart", value);
              return true;
            }
            return false;
          }}
        />
      </div>
      <RoomsForm
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
        onSubmit={(value) => setValue("chambres", value)}
      />
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
