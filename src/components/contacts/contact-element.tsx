"use client";

import React from "react";
import {
  ContactsPosition,
  Email,
  Mobile,
  Phone,
  Whatsapp,
} from "@jektis/components/icons";

export default function ContactElement({
  location,
  name,
}: {
  location: string;
  name: string;
}): React.ReactNode {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 h-fit bg-white w-full py-4 px-4">
      <img
        className="border border-transparent md:w-[35%] md:h-full h-60 rounded-2xl"
        src={location}
      />
      <div className="flex flex-col gap-4 py-4 font-[400]">
        <strong className="text-[24px] text-blue-800 pb-4">
          AGENCE {name} :
        </strong>
        <div className="flex flex-row text-black  items-center gap-2">
          <ContactsPosition width={30} height={30} /> Addresse :
        </div>
        <div className="flex flex-row text-black  items-center gap-2">
          <Phone width={30} height={30} /> Tél :
        </div>
        <div className="flex flex-row text-black  items-center gap-2">
          <Mobile width={30} height={30} /> Mobile :
        </div>
        <div className="flex flex-row text-black  items-center gap-2">
          <Whatsapp width={30} height={30} /> WhatsApp :
        </div>
        <div className="flex flex-row text-black  items-center gap-2">
          <Email width={30} height={30} /> Email :
        </div>
      </div>
    </div>
  );
}
