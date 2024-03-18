import React from "react";
import { WhatsappWhite } from "@jektis/components/icons";

export default function Infos(): React.ReactNode {
  return (
    <div className="flex text-start  flex-col text-white text-[12px] 2xl:text-[16px] 3xl:text-[20px] items-start w-full lg:w-fit xl:inline text-right xl:tracking-wide mt-4 lg:mt-8">
      <div className="flex flex-col xl:justify-start lg:gap-0 gap-4 text-center">
        <div className="flex lg:flex-row flex-col items-end lg:gap-3">
          <strong className="text-start">Tel: +216 71 70 69 00</strong>
          <p className="text-start text-[13px] text-nowrap w-full md:w-fit">
            <strong>Lun-Ven:</strong> 9h à 15h30
          </p>
          <p className="text-start text-[13px] text-nowrap w-full md:w-fit">
            <strong className="w-full md:w-fit">Sam:</strong> 9h à 13h
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-end lg:gap-3">
          <strong className="text-start flex flex-row gap-3 items-center">
            <WhatsappWhite /> +216 98 53 80 70
          </strong>
          <p className="text-start text-[13px] text-nowrap w-full md:w-fit">
            7j/7 De 8h à 22h
          </p>
        </div>
        <div className="flex text-[13px] md:flex-row flex-col gap-0 items-center md:items-end md:gap-3">
          <strong className="md:w-fit text-start">Agence Ariana:</strong>{" "}
          <p>
            98 Av. H.Bourguiba 2<sup>éme</sup> étage, Ariana
          </p>
        </div>
        <div className="flex text-[13px] md:flex-row flex-col gap-0 items-center md:items-end md:gap-3">
          <strong className="md:w-fit text-start">Agence Menzah 9 :</strong>{" "}
          <p>22 Av. Abdelaziz Thaalbi, Menzah 9B</p>
        </div>
      </div>
    </div>
  );
}
