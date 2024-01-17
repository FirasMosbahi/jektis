import React from "react";
import { Whatsapp, WhatsappWhite } from "@jektis/components/icons";

export default function Infos(): React.ReactNode {
  return (
    <div className="flex flex-col text-white text-[0.9rem] items-start w-fit xl:inline text-right xl:tracking-wide mt-8">
      <div className="flex flex-col xl:justify-start lg:gap-0 gap-4 text-center">
        <div className="flex md:flex-row flex-col gap-0 items-center md:items-end md:gap-6">
          <strong className="">Tel +216 71 70 69 00 :</strong>
          <p>
            <strong>Lun-Ven:</strong> 9h à 15h30{" "}
          </p>
          <p>
            {" "}
            <strong>Sam:</strong> 9h à 13h
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-0 items-center md:items-end md:gap-6">
          <div className="flex flex-row items-center gap-2">
            <WhatsappWhite stroke="#000" />
            <strong>+216 98 53 80 70 : </strong>
          </div>
          <p>7j/7 de 8h à 22 h</p>
        </div>
        <div className="flex md:flex-row flex-col gap-0 items-center md:items-end md:gap-6">
          <strong>Agence Ariana:</strong>{" "}
          <p>
            98 Av. H.Bourguiba 2<sup>éme</sup> étage, Ariana
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-0 items-center md:items-end md:gap-6">
          <strong>Agence Menzah 9 :</strong>{" "}
          <p>22 Av. Abdelaziz Thaalbi, Menzah 9B</p>
        </div>
      </div>
    </div>
  );
}
