import React from "react";
import { Whatsapp, WhatsappWhite } from "@jektis/components/icons";

export default function Infos(): React.ReactNode {
  return (
    <div className="flex flex-col items-start w-fit xl:inline text-right xl:tracking-wide mt-8">
      <div className="flex flex-col xl:justify-start text-center">
        <div className="flex flex-row gap-4">
          <p>Tel +216 71 70 69 00 </p>
          <p>Lun-Ven: 9h à 15h30 </p>
          <p> Sam: 9h à 13h</p>
        </div>
        <div className="flex flex-row gap-4">
          <WhatsappWhite stroke="#000" />
          <p>+216 98 53 80 70</p>
          <p>7j/7 de 8h à 22 h</p>
        </div>
        <div className="flex flex-row gap-4">
          <p>Agence Ariana:</p>{" "}
          <p>
            98 Av. H.Bourguiba 2<sup>éme</sup> étage, Ariana
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <p>Agence Menzah 9 :</p> <p>22 Av. Abdelaziz Thaalbi, Menzah 9B</p>
        </div>
      </div>
    </div>
  );
}
