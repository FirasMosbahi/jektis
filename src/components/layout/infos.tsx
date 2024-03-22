import React from "react";
import { WhatsappWhite } from "@jektis/components/icons";

export default function Infos(): React.ReactNode {
  return (
    <div className="flex text-start  flex-col text-white text-[8px] text-nowrap lg:text-[12px] 2xl:text-[16px] 3xl:text-[20px] items-start w-full lg:w-fit xl:inline text-right lg:mr-0 mr-4 xl:tracking-wide">
      <div className="flex flex-col justify-start gap-0 text-center">
        <div className="flex flex-row items-end gap-1.5 lg:gap-3">
          <strong className="text-start text-[7px] lg:text-[14px] ">
            Tel: +216 71 70 69 00
          </strong>
          <p className="text-start text-[7px] lg:text-[13px] text-nowrap w-fit">
            <strong>Lun-Ven:</strong> 9h à 15h30
          </p>
          <p className="text-start text-[7px] lg:text-[13px] text-nowrap w-fit">
            <strong className="w-fit text-[7px] lg:text-[13px]">Sam:</strong> 9h
            à 13h
          </p>
        </div>
        <div className="flex flex-row items-end gap-1.5 lg:gap-3">
          <strong className="text-start text-[7px] lg:text-[13px] flex flex-row gap-1.5 lg:gap-3 items-center">
            <WhatsappWhite /> +216 98 53 80 70
          </strong>
          <p className="text-start text-[7px] lg:text-[13px] text-nowrap w-fit">
            7j/7 De 8h à 22h
          </p>
        </div>
        <div className="flex text-[7px] lg:text-[13px] flex-row  items-end gap-1.5 lg:gap-3">
          <strong className="w-fit text-start">Agence Ariana:</strong>{" "}
          <p>
            98 Av. H.Bourguiba 2<sup>éme</sup> étage, Ariana
          </p>
        </div>
        <div className="flex text-[7px] lg:text-[13px] flex-row items-end gap-1.5 lg:gap-3">
          <strong className="md:w-fit text-start">Agence Menzah 9 :</strong>{" "}
          <p>22 Av. Abdelaziz Thaalbi, Menzah 9B</p>
        </div>
      </div>
    </div>
  );
}
