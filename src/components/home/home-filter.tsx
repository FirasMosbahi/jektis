"use client";
import React, { useState } from "react";
import Image from "next/image";
import VolForm from "@jektis/components/home/vol-form";
import HotelsForm from "@jektis/components/home/hotels-form";
import VoyagesForm from "@jektis/components/home/voyages-form";
import { HomeFilterFormsEnum } from "@jektis/enums/home.filter.enum";
import { Hotel, Vol, Voyage } from "@jektis/components/icons";

export default function HomeFilter(): React.ReactNode {
  const [chooseForm, setChooseForm] = useState<HomeFilterFormsEnum>(
    HomeFilterFormsEnum.HOTELS,
  );
  return (
    <div>
      <div className="flex flex-col gap-2 h-[550px] xl:h-[600px] 2xl:h-[550px] lg:h-[530px] sm:min-w-[390px] xl:min-w-[440px] lg:min-w-[400px]  xxl:min-w-[470px]">
        <form className="flex text-white sm:h-16 sm:min-h-[100px] lg:min-h-[60px] w-full bg-transparent bg-[#839fc4] border border-transparent rounded-2xl flex-row ">
          <div
            onClick={() => setChooseForm(HomeFilterFormsEnum.HOTELS)}
            className="flex flex-col lg:flex-row items-center xl:w-[42%] lg:w-[35%] w-[33%] gap-4 lg:py-0 py-3 px-4 bg-[#254ea2] h-full  rounded-r-none rounded-l-2xl"
          >
            <Hotel className="size-6" />
            <p className="lg:text-[20px] text-white font-[400] xl:block hidden">
              Hotels en tunisie
            </p>
            <p className="text-[18px] lg:text-[20px] font-[400] xl:hidden">
              Hotels
            </p>
          </div>
          <div
            onClick={() => setChooseForm(HomeFilterFormsEnum.VOLS)}
            className="flex flex-col lg:flex-row lg:w-[30%] xl:w-[27%] w-[33%] gap-3  py-3 lg:py-0 bg-[#254ea2] h-full items-center px-4 rounded-none border-x-2"
          >
            <Vol className="size-6" />
            <p className="text-[20px] text-white font-[400]">Vols</p>
          </div>

          <div
            onClick={() => setChooseForm(HomeFilterFormsEnum.VOYAGES)}
            className="flex flex-col xl:w-[31%] lg:w-[35%] lg:flex-row w-[33%] gap-3 py-3 lg:py-0 items-center h-full bg-[#254ea2] px-4 border-transparent rounded-l-none rounded-r-2xl"
          >
            <Voyage className="size-6" />
            <p className="text-[20px] text-white font-[400]">Voyages</p>
          </div>
        </form>

        <div className="min-h-[460px] bg-white border border-transparent rounded-xl 2xl:h-[440px] 2xl:min-h-fit">
          {chooseForm === HomeFilterFormsEnum.HOTELS ? (
            <HotelsForm />
          ) : chooseForm === HomeFilterFormsEnum.VOLS ? (
            <VolForm />
          ) : (
            <VoyagesForm />
          )}
        </div>
      </div>
    </div>
  );
}
