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
import Image from "next/image";

export default function HomeFilter(): React.ReactNode {
  return (
    <div>
      <div className="flex flex-col gap-8 w-full ">
        <form className="flex sm:h-16 h-28 flex-col w-full gap-8 bg-transparent mb-20 sm:mb-0 bg-[#839fc4] border border-transparent rounded-2xl sm:gap-0 sm:flex-row ">
          <div className="flex flex-row items-center gap-4 px-4 bg-[#839fc4] h-full border-transparent rounded-2xl sm:rounded-r-none sm:py-0 py-2 sm:rounded-l-2xl">
            <Image
              src="/home-page/hotel.png"
              width={20}
              height={20}
              alt="hotel"
            />
            Hotels en tunisie
          </div>
          <div className="flex flex-row gap-4 py-2 sm:py-0 bg-[#839fc4] h-full items-center px-4 sm:rounded-none rounded-2xl sm:border-x-2">
            <Image
              src="/home-page/vol.png"
              width={30}
              height={30}
              alt="hotel"
            />
            Vols
          </div>

          <div className="flex flex-row gap-4 py-2 sm:py-0 items-center h-full bg-[#839fc4] px-4 border-transparent sm:rounded-l-none rounded-2xl sm:rounded-r-2xl">
            <Image
              src="/home-page/voyage.png"
              width={30}
              height={30}
              alt="hotel"
            />
            Voyages
          </div>
        </form>
        <div className="bg-white pt-8 pb-2 rounded-xl w-full">
          <div className="flex flex-row items-center gap-12 ml-4 pb-4 border-b-2 border-[#586263] mr-4">
            <Image
              src="/home-page/sejours.png"
              width={45}
              height={45}
              alt="hotel"
            />
            <div className="flex flex-col">
              <strong className="text-[#646868]">Région</strong>
              <p className="text-[#8b8f92]">Ou allez vous ?</p>
            </div>
          </div>
          <div className="flex flex-row items-center pt-4 gap-12 ml-4 pb-4 border-b-2 border-[#586263] mr-4">
            <Image
              src="/home-page/date.png"
              width={45}
              height={45}
              alt="hotel"
            />
            <div className="flex flex-col">
              <strong className="text-[#646868]">
                Votre Arrivée - Votre Départ
              </strong>
              <p className="text-[#8b8f92]">07/10/2023 - 08/10/2023</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-12 ml-4 py-4 border-b-2 border-[#586263] mr-4">
            <Image
              src="/home-page/destination.png"
              width={45}
              height={45}
              alt="hotel"
            />
            <div className="flex flex-col">
              <strong className="text-[#646868]">Chambres</strong>
              <p className="text-[#8b8f92]">
                1 chambre(s), 2 personne(s) , 0 enfant(s)
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center  mt-4 mr-2">
            <button
              type="button"
              style={{
                borderRadius: 10,
              }}
              className="text-white h-12 bg-[#8eb633] focus:ring-4 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center me-2 mb-2"
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
      </div>
    </div>
  );
}
