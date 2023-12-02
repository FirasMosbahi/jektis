import React from "react";
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

export default function HomeFilter(): React.ReactNode {
  return (
    <div>
      <div className="flex flex-col gap-8 w-full ">
        <form className="flex flex-col w-full gap-4 sm:gap-0 sm:flex-row ">
          <InputWithIcon
            input={
              <>
                <select
                  id="countries"
                  placeholder="Sélectionner une ville ou un hotel"
                  className="pl-12 w-80 sm:w-52 h-20 bg-white text-sm font-medium text-gray-900 rounded-xl sm:rounded-none sm:rounded-l-xl"
                >
                  <option>Hotels en Tunisie</option>
                  <option value="CA">H1</option>
                  <option value="FR">H2</option>
                  <option value="DE">H2</option>
                </select>
              </>
            }
            icon={
              <div className="pt-1">
                <Localisation width={25} height={25} />
              </div>
            }
          />
          <InputWithIcon
            input={
              <>
                <select
                  id="date"
                  className="pl-16 px-4 py-2 w-80 sm:w-40 h-20 text-sm font-medium text-gray-900 bg-white border border-b border-gray-200 rounded-xl sm:rounded-none"
                >
                  <option>Vols</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="DE">Germany</option>
                </select>
              </>
            }
            icon={
              <div className="pt-2">
                <Plane width={25} height={25} />
              </div>
            }
          />
          <InputWithIcon
            input={
              <>
                <select
                  id="countries"
                  className="pl-12 px-4 py-2 w-80 sm:w-40 h-20 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-xl sm:rounded-none sm:rounded-r-xl"
                >
                  <option>Voyages</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </>
            }
            icon={
              <div className="pt-2">
                <Bagagge width={25} height={25} />
              </div>
            }
          />
        </form>
        <div className="bg-white pt-8 pb-2 rounded-xl w-full">
          <div className="flex flex-row items-center gap-4 ml-4 pb-4 border-b-2 border-[#586263] mr-4">
            <Map className="w-16 h-16" />
            <div className="flex flex-col">
              <strong className="text-[#646868]">Région</strong>
              <p className="text-[#8b8f92]">Ou allez vous ?</p>
            </div>
          </div>
          <div className="flex flex-row items-center pt-4 gap-4 ml-4 pb-4 border-b-2 border-[#586263] mr-4">
            <Calendar2 className="w-16 h-16" />
            <div className="flex flex-col">
              <strong className="text-[#646868]">
                Votre Arrivée - Votre Départ
              </strong>
              <p className="text-[#8b8f92]">07/10/2023 - 08/10/2023</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 ml-4 pb-4 border-b-2 border-[#586263] mr-4">
            <Sleep className="w-16 h-16" />
            <div className="flex flex-col">
              <strong className="text-[#646868]">Chambres</strong>
              <p className="text-[#8b8f92]">
                1 chambre(s), 2 personne(s) , 0 enfant(s)
              </p>
            </div>
          </div>
          <div className="flex flex-row items-end justify-end mt-4 mr-2">
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
              <p className="text-xl">Rechercher</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
