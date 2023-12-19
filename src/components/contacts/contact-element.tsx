import React from "react";
import Address from "@jektis/components/contacts/Address";
import {
  ContactsPosition,
  Email,
  Mobile,
  Phone,
  Whatsapp,
} from "@jektis/components/icons";

export default function ContactElement({
  long,
  lat,
  name,
}: {
  long: number;
  lat: number;
  name: string;
}): React.ReactNode {
  return (
    <div className="flex flex-row gap-8 h-fit bg-white w-full py-4 px-4">
      <Address long={long} lat={lat} />
      <div className="flex flex-col gap-4 py-4">
        <strong className="text-xl text-blue-800 pb-4">Agence {name} :</strong>
        <div className="flex flex-row text-black  items-center gap-2">
          <ContactsPosition width={35} height={35} /> Addresse :
        </div>
        <div className="flex flex-row text-black  items-center gap-2">
          <Phone width={35} height={35} /> Tél :
        </div>
        <div className="flex flex-row text-black  items-center gap-2">
          <Mobile width={35} height={35} /> Mobile :
        </div>
        <div className="flex flex-row text-black  items-center gap-2">
          <Whatsapp width={35} height={35} /> WhatsApp :
        </div>
        <div className="flex flex-row text-black  items-center gap-2">
          <Email width={35} height={35} /> Email :
        </div>
      </div>
    </div>
  );
}
