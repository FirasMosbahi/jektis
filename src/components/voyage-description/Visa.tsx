import React from "react";
import { Visa } from "@jektis/types";

export default function VisaSection({ delais, procedures, documents }: Visa) {
  return (
    <div className="flex flex-col gap-6 lg:border-[#dbdbdb] lg:border-b-4 mt-6 mb-8 pb-8 xl:my-3">
      <strong className="text-3xl text-[#1c4678]">VISA </strong>
      <p className="text-black">
        Ci-dessous les documents nécessaires du visa :
      </p>
      <strong className="text-xl text-black">Documents :</strong>
      <ul className="text-black">
        {documents.map((service, index) => (
          <li key={index}>- {service}</li>
        ))}
      </ul>
      <p className="text-black">
        Ci-dessous les procédures nécessaires du visa :
      </p>
      <strong className="text-xl text-black">PROCÉDURES :</strong>
      <ul className="text-black">
        {procedures.map((service, index) => (
          <li key={index}>- {service}</li>
        ))}
      </ul>
      <p className="text-black">Ci-dessous les procédures délais du visa :</p>
      <strong className="text-xl text-black">DÉLAIS :</strong>
      <ul className="text-black">
        {delais.map((service, index) => (
          <li key={index}>- {service}</li>
        ))}
      </ul>
    </div>
  );
}
