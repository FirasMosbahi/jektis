import React from "react";
import { WhatsappWhite } from "@jektis/components/icons";

export default function Infos(): React.ReactNode {
  return (
    <div className="flex text-start flex-col text-white text-[0.8rem] 2xl:text-[1rem] 3xl:text-[1.3rem] items-start w-fit xl:inline text-right xl:tracking-wide mt-8">
      <div className="flex flex-col xl:justify-start lg:gap-0 gap-4 text-center">
        <div className="flex md:flex-row flex-col gap-0 items-center md:items-end md:gap-6">
          <strong className="lg:min-w-36 w-full md:w-fit text-start">
            Tel +216 71 70 69 00 :
          </strong>
          <p className="text-start w-full md:w-fit">
            <strong>Lun-Ven:</strong> 9h à 15h30{" "}
          </p>
          <p className="text-start w-full md:w-fit">
            {" "}
            <strong className="w-full md:w-fit">Sam:</strong> 9h à 13h
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-0 items-center md:items-end md:gap-6">
          <div className="min-w-36 w-full md:w-fit flex flex-row items-center gap-2">
            <WhatsappWhite stroke="#000" />
            <strong>+216 98 53 80 70 : </strong>
          </div>
          <p className="w-full md:w-fit text-start">7j/7 de 8h à 22 h</p>
        </div>
        <div className="flex md:flex-row flex-col gap-0 items-center md:items-end md:gap-6">
          <strong className="min-w-36 w-full md:w-fit text-start">
            Agence Ariana:
          </strong>{" "}
          <p>
            98 Av. H.Bourguiba 2<sup>éme</sup> étage, Ariana
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-0 items-center md:items-end md:gap-6">
          <strong className="min-w-36 w-full md:w-fit text-start">
            Agence Menzah 9 :
          </strong>{" "}
          <p>22 Av. Abdelaziz Thaalbi, Menzah 9B</p>
        </div>
      </div>
    </div>
  );
}
