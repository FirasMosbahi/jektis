"use client";

import React, { useEffect, useState } from "react";
import Center, { Axes } from "@jektis/components/generic/center";
import InputWithIcon from "@jektis/components/generic/input-with-icon";
import {
  BlackSearchIcon,
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
import { Datepicker } from "flowbite-react";
import { theme } from "@jektis/components/generic/CustomCalendar";
import RoomsForm from "@jektis/components/home/RoomsForm";
import HeaderRoomsForm from "@jektis/components/hotels-list/HeaderRoomsForm";

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

  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const [openDepartCalendar, setOpenDeaprtDateCalendar] =
    useState<boolean>(false);
  const [departCalendarDate, setDepartCalendarDate] = useState<Date>(today);
  const [openArriveCalendar, setOpenArriveCalendar] = useState<boolean>(false);
  const [arriveCalendarDate, setArriveCalendarDate] = useState<Date>(tomorrow);
  const [openRoomsForm, setOpenRoomsForm] = useState<boolean>(false);

  return (
    <div className="hidden lg:flex flex-col w-full">
      <div className="rounded-md shadow-sm w-full mt-8">
        <Center axe={Axes.y}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex lg:flex-row flex-col relative bg-white xl:items-start xl:min-w-fit lg:px-0 px-8 items-start gap-8 lg:gap-0 xl:h-16 rounded-xl border-2 border-blue-700 w-full py-2 xl:bg-white"
          >
            <div className="flex flex-row w-full xl:h-full xl:max-w-[200px] lg:w-[320px] h-12 border border-transparent lg:rounded-none rounded-2xl lg:mx-0 items-center lg:gap-2 gap-4 px-2 xl:pl-4">
              <Localisation className="absolute top-4 size-6 left-5" />

              <input
                type="text"
                id="first_name"
                className="text-[16px] bg-transparent w-full text-black focus:ring-blue-500 focus:border-blue-500 block lg:pl-10 pl-24 p-2"
                placeholder="Votre destination"
                {...register("location")}
              />
            </div>
            <div className="flex z-50 xl:max-w-[350px] lg:w-[650px] xl:text-[0.8rem] xl:min-w-[350px] sm:flex-row flex-col xl:px-4 xl:h-full sm:h-12 w-full xl:gap-6 sm:gap-8 gap-4 bg-white border-x-2 sm:justify-around xl:justify-center lg:rounded-none rounded-2xl lg:border-x-blue-700 px-4">
              <div className="flex xl:min-w-[9rem] flex-row xl:gap-4 gap-4 items-center">
                <Calendar
                  onClick={() => setOpenArriveCalendar(true)}
                  width={25}
                  height={25}
                />
                <div className="relative">
                  {openArriveCalendar || (
                    <p
                      onClick={() => setOpenArriveCalendar(true)}
                      className="text-sm font-medium text-gray-900"
                    >
                      {arriveCalendarDate.toLocaleDateString()}
                    </p>
                  )}
                  {openArriveCalendar && (
                    <Datepicker
                      onSelectedDateChanged={(value) => {
                        setOpenArriveCalendar(false);
                        setArriveCalendarDate(value);
                      }}
                      theme={theme}
                      inline
                    />
                  )}
                </div>
              </div>
              <div className="flex xl:min-w-[9rem] flex-row xl:gap-4 gap-8 items-center">
                <Calendar width={25} height={25} />
                <div className="relative">
                  {openDepartCalendar || (
                    <p
                      onClick={() => setOpenDeaprtDateCalendar(true)}
                      className="text-sm font-medium text-gray-900"
                    >
                      {departCalendarDate.toLocaleDateString()}
                    </p>
                  )}
                  {openDepartCalendar && (
                    <Datepicker
                      onSelectedDateChanged={(value) => {
                        setOpenDeaprtDateCalendar(false);
                        setDepartCalendarDate(value);
                      }}
                      theme={theme}
                      inline
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="border-r-2 relative lg:w-[320px] xl:w-full xl:max-w-[400px] bg-white w-full xl:h-full lg:rounded-none rounded-2xl lg:border-r-blue-700">
              <div className="flex flex-row  h-12 items-center xl:h-full xl:gap-2 gap-4 px-6 xl:pl-4">
                <HeaderRoomsForm
                  onSubmit={(value) => console.log(value)}
                  isPopupOpen={openRoomsForm}
                  setIsPopupOpen={setOpenRoomsForm}
                />
              </div>
            </div>
            <div className="border-l-3 flex-1 lg:min-w-[250px] xl:w-[200px] w-full flex flex-col  sm:items-end items-center justify-end pr-8 lg:pr-4 border-l-blue-700">
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
