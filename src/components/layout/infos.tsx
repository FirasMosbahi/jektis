import React from "react";

export default function Infos(): React.ReactNode {
  return (
    <div className="flex flex-col items-center xl:inline text-right xl:tracking-wide lg:pr-24 xl:pr-32 mt-8">
      <div className="flex flex-col xl:flex-row xl:justify-end text-center xl:text-right text-2xl">
        <p>Tel +216 71 70 69 00 / </p>
        <p>WhatsApp: +216 98 53 80 70</p>
      </div>
      <p>Lun-Ven: 9h à 15h30 Sam: 9h à 13h</p>
      <div className="text-center xl:text-right xl:flex xl:flex-row justify-end">
        <p>Agence Ariana:</p>{" "}
        <p>
          98 Av. H.Bourguiba 2<sup>éme</sup> étage, Ariana
        </p>
      </div>
      <div className="text-center xl:text-right xl:flex xl:flex-row justify-end">
        <p>Agence Menzah 9 :</p> <p>22 Av. Abdelaziz Thaalbi, Menzah 9B</p>
      </div>
    </div>
  );
}
