"use client";

import React from "react";
import Center, { Axes } from "@jektis/components/generic/center";
import InputWithIcon from "@jektis/components/generic/input-with-icon";
import {
  Calendar,
  Localisation,
  Trolley,
  WhiteSearchIcon,
} from "@jektis/components/icons";

export default function HotelsFilter(): React.ReactNode {
  return (
    <div className="flex flex-col w-full">
      <div className="rounded-md shadow-sm w-full mt-8">
        <Center axe={Axes.y}>
          <form className="flex xl:flex-row flex-col bg-white xl:items-start xl:min-w-fit xl:px-0 px-8 items-start gap-8 xl:gap-0 xl:h-16 rounded-xl border-2 border-blue-700 w-full py-2 xl:bg-white">
            <div className="flex flex-row w-full 2xl:max-w-[20%] xl:h-full xl:max-w-[12rem] h-12 border border-transparent xl:rounded-none rounded-2xl xl:mx-0 items-center xl:gap-2 gap-4 px-6 xl:pl-4">
              <Localisation width={25} height={25} />
              <select
                id="countries"
                className="w-full h-full text-sm font-medium text-gray-900"
              >
                <option>Ou allez vous </option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="flex 2xl:max-w-[35%] xl:text-[0.8rem] xl:min-w-[20rem] sm:flex-row flex-col xl:px-4 xl:h-full sm:h-12 w-full xl:gap-6 sm:gap-8 gap-4 bg-white border-x-2 sm:justify-around xl:justify-center xl:rounded-none rounded-2xl xl:border-x-blue-700 px-4">
              <div className="flex xl:min-w-[9rem] flex-row xl:gap-4 gap-4 items-center">
                <Calendar width={25} height={25} />
                <input
                  type="date"
                  className="text-sm font-medium text-gray-900"
                />
              </div>
              <div className="flex xl:min-w-[9rem] flex-row xl:gap-4 gap-8 items-center">
                <Calendar width={25} height={25} />
                <input
                  type="date"
                  className="sm:w-32 text-sm w-full font-medium text-gray-900"
                />
              </div>
            </div>
            <div className="border-r-2 2xl:max-w-[20%] xl:max-w-[12rem] bg-white w-full xl:h-full xl:rounded-none rounded-2xl xl:border-r-blue-700">
              <div className="flex flex-row  h-12 items-center xl:h-full xl:gap-2 gap-4 px-6 xl:pl-4">
                <Trolley width={25} height={25} />
                <select
                  id="countries"
                  className="text-sm font-medium text-gray-900"
                >
                  <option>Chambre </option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div className="border-l-3 2xl:max-w-[25%] xl:max-w-[10rem] w-full flex flex-col  sm:items-end items-center justify-end pr-8 lg:pr-0 border-l-blue-700">
              <button
                type="button"
                style={{
                  borderRadius: 10,
                }}
                className="text-white xl:mx-2 bg-blue-800 font-medium px-8 h-12 py-2.5 flex flex-row items-center"
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
