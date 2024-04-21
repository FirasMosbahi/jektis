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
  const [choosenForm, setChoosenForm] = useState<HomeFilterFormsEnum>(
    HomeFilterFormsEnum.HOTELS,
  );
  return (
    <div>
      <div className="flex flex-col gap-2 h-[550px] sm:min-w-[390px] lg:min-w-[440px] xxl:min-w-[470px]">
        <form className="flex text-white sm:h-16 min-h-[100px] w-full bg-transparent bg-[#839fc4] border border-transparent rounded-2xl flex-row ">
          <div
            onClick={() => setChoosenForm(HomeFilterFormsEnum.HOTELS)}
            className="flex flex-col items-center lg:w-[40%] w-[33%] gap-4  py-3 px-4 bg-[#839fc4] h-full  rounded-r-none rounded-l-2xl"
          >
            <Image
              src="/home-page/hotel.png"
              width={30}
              height={30}
              alt="hotel"
              className="w-6 h-8"
            />
            <p className="xl:text-[20px] lg:text-[18px] font-bold lg:block hidden">
              Hotels en tunisie
            </p>
            <p className="text-[18px] font-bold lg:hidden">Hotels</p>
          </div>
          <div
            onClick={() => setChoosenForm(HomeFilterFormsEnum.VOLS)}
            className="flex flex-col lg:w-[30%] w-[33%] gap-3  py-3  bg-[#839fc4] h-full items-center px-4 rounded-none border-x-2"
          >
            <Image
              src="/home-page/vol.png"
              width={40}
              height={40}
              alt="hotel"
              className="w-10 h-8"
            />
            <p className="text-[20px] font-bold">Vols</p>
          </div>

          <div
            onClick={() => setChoosenForm(HomeFilterFormsEnum.VOYAGES)}
            className="flex flex-col lg:w-[30%] w-[33%] gap-3 py-3 items-center h-full bg-[#839fc4] px-4 border-transparent rounded-l-none rounded-r-2xl"
          >
            <Image
              src="/home-page/voyage.png"
              width={30}
              height={30}
              alt="hotel"
              className="w-10 h-8"
            />
            <p className="text-[20px] font-bold">Voyages</p>
          </div>
        </form>

        {/*<div className="lg:hidden">*/}
        {/*  <HomeFilterSelectForm*/}
        {/*    onSelect={(filter) => setChoosenForm(filter)}*/}
        {/*    selected={choosenForm}*/}
        {/*  />*/}
        {/*</div>*/}

        <div className="h-[460px]">
          {choosenForm === HomeFilterFormsEnum.HOTELS ? (
            <HotelsForm />
          ) : choosenForm === HomeFilterFormsEnum.VOLS ? (
            <VolForm />
          ) : (
            <VoyagesForm />
          )}
        </div>
      </div>
    </div>
  );
}
