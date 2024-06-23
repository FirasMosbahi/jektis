"use client";

import RoomsForm from "@jektis/components/home/RoomsForm";

import React, { useState } from "react";
import {
  BlackSearchIcon,
  SimpleNextArrow,
  WhiteSearchIcon,
} from "@jektis/components/icons";
import CustomCalendar from "@jektis/components/generic/CustomCalendar";
import { useForm } from "react-hook-form";
import { HotelFilterFormData } from "@jektis/forms-data/hotel-filter-form-data";
import { yupResolver } from "@hookform/resolvers/yup";
import { hotelsValidationSchema } from "@jektis/schema/home-forms";
import { hotelSearch } from "@jektis/actions/home-filter-actions";
import useOnHotelFormSubmit from "@jektis/hooks/useOnHotelFormSubmit";

export default function HotelsForm(): React.ReactElement {
  const today = new Date();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [openCalendar, setOpenCalendar] = useState<number>(0);
  const { register, getValues, setValue, handleSubmit } =
    useForm<HotelFilterFormData>({
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
  const handleFormSubmit = useOnHotelFormSubmit();
  async function onSubmit(form: HotelFilterFormData) {
    handleFormSubmit(form);
    await hotelSearch(form);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`relative flex flex-col bg-white h-[470px] lg:h-[450px] lg:w-[530px] xl:w-full gap-6 2xl:gap-5 xl:gap-8 ${
        isPopupOpen ? "bg-opacity-70" : ""
      } pt-4 border border-transparent rounded-2xl bg-white`}
    >
      <div className="px-4 relative">
        <BlackSearchIcon className="absolute top-[35%] size-7 left-7 lg:left-9" />

        <input
          type="text"
          id="first_name"
          className="border bg-transparent border-gray-300 font-[500] text-[32px] w-full text-black focus:ring-blue-500 focus:border-blue-500 block lg:pl-16 pl-14 py-6"
          placeholder="Votre destination"
          {...register("nom")}
        />
      </div>
      <div className="flex relative flex-row h-28 justify-between items-center border border-gray-300 mx-4 py-4 lg:px-4 px-6">
        <div className={`lg:block ${openCalendar !== 2 ? "" : "hidden"}`}>
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
            afterOpenCalendar={() => setOpenCalendar(1)}
            afterCloseCalendar={() => setOpenCalendar(0)}
          />
        </div>
        <SimpleNextArrow
          className={`size-12 ${openCalendar === 0 ? "lg:block" : "hidden"}`}
        />
        <div className="relative">
          <div className={`lg:block ${openCalendar !== 1 ? "" : "hidden"}`}>
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
              afterOpenCalendar={() => setOpenCalendar(2)}
              afterCloseCalendar={() => setOpenCalendar(0)}
            />
          </div>
        </div>
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
          className="text-white w-full bg-[#8eb633] focus:ring-4 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex justify-center items-center me-2 mb-2"
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
