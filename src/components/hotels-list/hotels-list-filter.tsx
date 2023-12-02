"use client";

import React from "react";
import InputWithIcon from "@jektis/components/generic/input-with-icon";
import {
  Calendar,
  Localisation,
  Trolley,
  WhiteSearchIcon,
} from "@jektis/components/icons";

export default function HotelsFilter(): React.ReactNode {
  return (
    <div className="flex flex-col">
      <div>
        <p className="max-w-fit">
          Accueil/Hotels en Tunisie/<strong>Résultat de la recherche</strong>
        </p>
        <strong className="md:w-80 lg:w-fit">
          De Lundi 09 Octobre 2023 à Mardi 10 Octobre 2023, 1 nuit , 1 chambre :
          2 adults + 0 enfants
        </strong>
      </div>

      <div className="inline-flex rounded-md shadow-sm w-fit mt-8">
        <form className="flex xl:flex-row xl:gap-0 gap-4 flex-col rounded-xl ">
          <InputWithIcon
            input={
              <>
                <select
                  id="countries"
                  placeholder="Sélectionner une ville ou un hotel"
                  className="pl-12 w-80 h-12 xl:rounded-l-xl bg-white text-sm font-medium text-gray-900 border-transparent  rounded-xl xl:border-b xl:rounded-none"
                >
                  <option>Sélectionner une ville ou un hotel</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </>
            }
            icon={<Localisation width={25} height={25} />}
          />
          <InputWithIcon
            input={
              <>
                <select
                  id="date"
                  className="pl-12 px-4 py-4 xl:w-96  w-80 h-12 text-sm font-medium text-gray-900 bg-white rounded-xl xl:rounded-none flex-col xl:border-x-2 xl:border-x-strongBlue"
                >
                  <option>Selectionner une date</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </>
            }
            icon={<Calendar width={25} height={25} />}
          />
          <InputWithIcon
            input={
              <>
                <select
                  id="countries"
                  className="pl-12 px-4 xl:rounded-r-xl py-2 w-80 h-12 text-sm font-medium text-gray-900 bg-white border border-transparent rounded-xl xl:border-b xl:rounded-none "
                >
                  <option>1 chambre : 2 adultes + 0 enfants</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </>
            }
            icon={<Trolley width={25} height={25} />}
          />
          <button
            type="button"
            style={{
              borderRadius: 10,
            }}
            className="text-white w-52 h-12 ml-4 bg-[#8eb633] focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 pr-0 text-center inline-flex items-center me-2 mb-2"
          >
            <WhiteSearchIcon
              width={20}
              height={20}
              strokeWidth={2}
              className="ml-4 mr-4"
            />
            Rechercher
          </button>
        </form>
      </div>
    </div>
  );
}
