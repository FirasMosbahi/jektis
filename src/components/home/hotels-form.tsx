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

export default function HotelsForm(): React.ReactElement {
  return (
    <div className="lg:w-full h-full flex flex-col gap-6 bg-opacity-80 pt-8 border border-transparent rounded-2xl bg-white">
      <div className="px-4 relative">
        <BlackSearchIcon className="absolute top-[40%] size-5 left-7" />

        <input
          type="text"
          id="first_name"
          className="bg-gray-200 text-xl border border-gray-300 w-full text-black focus:ring-blue-500 focus:border-blue-500 block lg:pl-10 pl-12 p-6"
          placeholder="ex . ville , nom d'hotel"
          required
        />
      </div>
      <div className="flex flex-row justify-between items-center border border-gray-300 mx-4 py-4 px-4 bg-gray-200">
        <CustomCalendar label="Arrivé" />
        <SimpleNextArrow className="size-12" />
        <CustomCalendar label="Départ" />
      </div>
      <div className="flex flex-row items-center border border-gray-300 mx-4 py-8 px-4 gap-2 bg-gray-200">
        <TwoUsers className="lg:size-6 size-5" />
        <p className="text-black lg:text-[20px] text-[18px] font-semibold">
          1 Chambre , 2 Adultes, 0 enfants
        </p>
      </div>
      <div className="flex flex-row justify-center px-6 w-full mt-4 mr-2">
        <button
          type="button"
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
    </div>
  );
}
