import React from "react";
import { WhiteSearchIcon } from "@jektis/components/icons";
import Image from "next/image";

export default function HotelsForm(): React.ReactElement {
  return (
    <div className="lg:w-full h-full flex flex-col gap-4 bg-opacity-80 pt-8 border border-transparent rounded-2xl bg-white">
      <div className="flex flex-row items-center gap-12 ml-4 pb-8 border-b-2 border-[#586263] mr-4">
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
      <div className="flex flex-row items-center pt-4 gap-12 ml-4 pb-8 border-b-2 border-[#586263] mr-4">
        <Image src="/home-page/date.png" width={45} height={45} alt="hotel" />
        <div className="flex flex-col">
          <strong className="text-[#646868]">
            Votre Arrivée - Votre Départ
          </strong>
          <p className="text-[#8b8f92]">07/10/2023 - 08/10/2023</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-12 ml-4 pt-4 pb-8 border-b-2 border-[#586263] mr-4">
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
  );
}
