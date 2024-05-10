"use client";
import React, { useState } from "react";
import {
  Bagagge,
  Calendar2,
  Localisation,
  Map,
  Plane,
  Sleep,
  WhiteSearchIcon,
} from "@jektis/components/icons";
import InputWithIcon from "@jektis/components/generic/input-with-icon";
import Image from "next/image";
import AllerRetourForm from "@jektis/components/home/aller-retour-form";
import VolForm from "@jektis/components/home/vol-form";
import HotelsForm from "@jektis/components/home/hotels-form";
import VoyagesForm from "@jektis/components/home/voyages-form";
import HomeFilterSelectForm from "@jektis/components/mobile-home-page/HomeFilterSelectForm";
import { HomeFilterFormsEnum } from "@jektis/enums/home.filter.enum";

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
            className="flex flex-col lg:flex-row items-center xl:w-[42%] lg:w-[35%] w-[33%] gap-4 lg:py-0 py-3 px-4 bg-[#faf9f4] h-full  rounded-r-none rounded-l-2xl"
          >
            <Image
              src="/home-page/hotel.png"
              width={30}
              height={30}
              alt="hotel"
              className="w-6 h-8"
            />
            <p className="lg:text-[20px] text-[#20549e] font-[400] xl:block hidden">
              Hotels en tunisie
            </p>
            <p className="text-[18px] lg:text-[20px] font-[400] xl:hidden">
              Hotels
            </p>
          </div>
          <div
            onClick={() => setChooseForm(HomeFilterFormsEnum.VOLS)}
            className="flex flex-col lg:flex-row lg:w-[30%] xl:w-[27%] w-[33%] gap-3  py-3 lg:py-0 bg-[#faf9f4] h-full items-center px-4 rounded-none border-x-2"
          >
            <Image
              src="/home-page/vol.png"
              width={40}
              height={40}
              alt="hotel"
              className="w-10 h-8"
            />
            <p className="text-[20px] text-[#20549e] font-[400]">Vols</p>
          </div>

          <div
            onClick={() => setChooseForm(HomeFilterFormsEnum.VOYAGES)}
            className="flex flex-col xl:w-[31%] lg:w-[35%] lg:flex-row w-[33%] gap-3 py-3 lg:py-0 items-center h-full bg-[#faf9f4] px-4 border-transparent rounded-l-none rounded-r-2xl"
          >
            <Image
              src="/home-page/voyage.png"
              width={30}
              height={30}
              alt="hotel"
              className="w-10 h-8"
            />
            <p className="text-[20px] text-[#20549e] font-[400]">Voyages</p>
          </div>
        </form>

        {/*<div className="lg:hidden">*/}
        {/*  <HomeFilterSelectForm*/}
        {/*    onSelect={(filter) => setChoosenForm(filter)}*/}
        {/*    selected={chooseForm}*/}
        {/*  />*/}
        {/*</div>*/}

        <div className="min-h-[460px] 2xl:h-[440px] 2xl:min-h-fit">
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
