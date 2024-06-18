import React from "react";
import { Tarif } from "@jektis/types";

export default function TarifsAndConditions({
  dateDeVoyage,
  tarifs,
  conditions,
}: Tarif) {
  return (
    <div className="flex flex-col gap-6 lg:border-b-[#dbdbdb] lg:border-b-4 mt-6 mb-8 pb-8 xl:my-3">
      <strong className="text-3xl text-[#1c4678]">TARIFS ET CONDITIONS</strong>
      <strong className="text-xl text-black">
        date de voyage : {dateDeVoyage.toDateString()}
      </strong>
      <p className="text-black">Ci-dessous les tarifs du voyage :</p>
      <strong className="text-xl text-black">Tarifs :</strong>
      <ul className="text-black mb-4">
        {tarifs.map((price, index) => (
          <li key={index}>- {price}</li>
        ))}
      </ul>
      <p className="text-black">
        Ci-dessous les conditions générales du voyage :
      </p>
      <strong className="text-xl text-black">Paiement :</strong>
      <ul className="text-black">
        {conditions.map((payement, index) => (
          <li key={index}>- {payement}</li>
        ))}
      </ul>
    </div>
  );
}
