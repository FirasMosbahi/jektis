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
  address,
  mobile,
  whatsapp,
  tel,
  email,
}: {
  location: string;
  name: string;
  address: string;
  tel: string;
  mobile: string;
  whatsapp: string;
  email: string;
}): React.ReactNode {
  return (
    <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-2 h-fit bg-white w-full lg:py-4 py-2 px-4">
      <strong className="text-[24px] text-start w-full pl-8 text-blue-800 lg:hidden">
        AGENCE {name} :
      </strong>
      <img
        className="border border-transparent lg:w-[35%]  md:h-full h-60 rounded-2xl"
        alt="location image"
        src={location}
      />
      <div className="flex flex-col items-start w-full pl-8 gap-2 py-4 font-[400]">
        <strong className="lg:block hidden text-[24px] text-blue-800 pb-4">
          AGENCE {name}:
        </strong>
        <div className="flex flex-row text-black items-start lg:items-center gap-2">
          <ContactsPosition width={30} height={30} /> Addresse: {address}
        </div>
        <a
          target="_blank"
          href={`tel:+216${tel}`}
          className="flex flex-row text-black items-start w-full lg:items-center gap-2"
        >
          <Phone width={30} height={30} /> Tél: {tel}
        </a>
        <a
          target="_blank"
          href={`tel:+216${mobile}`}
          className="flex flex-row text-black  items-center gap-2"
        >
          <Mobile width={30} height={30} /> Mobile: {mobile}
        </a>
        <a
          target="_blank"
          href={`https://wa.me/+216${tel}`}
          className="flex flex-row text-black  items-center gap-2"
        >
          <Whatsapp width={30} height={30} /> WhatsApp: {whatsapp}
        </a>
        <div className="flex flex-row text-black  items-center gap-2">
          <Email width={30} height={30} /> Email: {email}
        </div>
      </div>
    </div>
  );
}
