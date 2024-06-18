import React from "react";
import { ChargeDeVoyage } from "@jektis/types";

export default function ChargeeDeVoyageSection({
  nom,
  email,
  telephone,
  whatsapp,
}: ChargeDeVoyage) {
  return (
    <div className="flex flex-col gap-6 lg:border-[#dbdbdb] lg:border-b-4 mt-6 mb-8 pb-8 xl:my-3">
      <strong className="text-3xl text-[#1c4678]">CHARGÉ(E) DE VOYAGE</strong>
      <ul>
        <li className="text-black">nom: {nom}</li>
        <li className="text-black">email: {email}</li>
        <li>
          <a className="text-black" href={`tel:${telephone}`} target="_blank">
            telephone: {telephone}
          </a>
        </li>
        <li>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            className="text-black"
          >
            whatsApp: {whatsapp}
          </a>
        </li>
      </ul>
    </div>
  );
}
