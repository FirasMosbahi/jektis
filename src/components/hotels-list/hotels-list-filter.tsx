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
          <form className="flex xl:flex-row flex-col xl:items-start xl:px-0 px-8 items-start gap-16 xl:gap-0 xl:h-16 rounded-xl border-2 border-blue-700 w-full py-2 xl:bg-white">
            <div className="flex flex-row bg-white w-full xl:h-full h-20 border border-transparent xl:rounded-none rounded-2xl xl:mx-0 items-center px-10">
              <Localisation width={25} height={25} />
              <select
                id="countries"
                placeholder="Sélectionner une ville ou un hotel"
                className="xl:w-36 w-full h-full text-sm font-medium text-gray-900"
              >
                <option>Ou allez vous </option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="flex flex-row px-10 xl:h-full h-20 w-full bg-white border-x-2 gap-20 justify-between xl:justify-center xl:rounded-none rounded-2xl xl:border-x-blue-700">
              <div className="flex flex-row gap-4 items-center">
                <Calendar width={25} height={25} />
                <input
                  type="date"
                  className="w-32 text-sm font-medium text-gray-900"
                />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <Calendar width={25} height={25} />
                <input
                  type="date"
                  className="w-32 text-sm font-medium text-gray-900"
                />
              </div>
            </div>
            <div className="border-r-2 bg-white w-full xl:h-full xl:rounded-none rounded-2xl xl:border-r-blue-700 px-10">
              <div className="flex flex-row  h-20 items-center xl:h-full">
                <Trolley width={25} height={25} />
                <select
                  id="countries"
                  placeholder="Sélectionner une ville ou un hotel"
                  className="w-full xl:w-40 text-sm font-medium text-gray-900"
                >
                  <option>Chambre Formulaire </option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div className="border-l-3 w-full flex flex-row items-center justify-end pr-8 border-l-blue-700">
              <button
                type="button"
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
