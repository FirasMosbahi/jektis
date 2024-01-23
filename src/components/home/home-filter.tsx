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

enum HomeFilterFormsEnum {
  HOTELS,
  VOLS,
  VOYAGES,
}
export default function HomeFilter(): React.ReactNode {
  const [choosenForm, setChoosenForm] = useState<HomeFilterFormsEnum>(
    HomeFilterFormsEnum.HOTELS,
  );
  return (
    <div>
      <div className="flex flex-col gap-8 w-full ">
        <form className="flex text-white sm:h-16 h-28 flex-col w-full gap-8 bg-transparent mb-20 sm:mb-0 bg-[#839fc4] border border-transparent rounded-2xl sm:gap-0 sm:flex-row ">
          <div
            onClick={() => setChoosenForm(HomeFilterFormsEnum.HOTELS)}
            className="flex flex-row items-center gap-4 px-4 bg-[#839fc4] h-full border-transparent rounded-2xl sm:rounded-r-none sm:py-0 py-2 sm:rounded-l-2xl"
          >
            <Image
              src="/home-page/hotel.png"
              width={20}
              height={20}
              alt="hotel"
            />
            Hotels en tunisie
          </div>
          <div
            onClick={() => setChoosenForm(HomeFilterFormsEnum.VOLS)}
            className="flex flex-row gap-4 py-2 sm:py-0 bg-[#839fc4] h-full items-center px-4 sm:rounded-none rounded-2xl sm:border-x-2"
          >
            <Image
              src="/home-page/vol.png"
              width={30}
              height={30}
              alt="hotel"
            />
            Vols
          </div>

          <div
            onClick={() => setChoosenForm(HomeFilterFormsEnum.VOYAGES)}
            className="flex flex-row gap-4 py-2 sm:py-0 items-center h-full bg-[#839fc4] px-4 border-transparent sm:rounded-l-none rounded-2xl sm:rounded-r-2xl"
          >
            <Image
              src="/home-page/voyage.png"
              width={30}
              height={30}
              alt="hotel"
            />
            Voyages
          </div>
        </form>

        <div className="h-[28rem]">
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
