import React from "react";

export default function servicesInclus({
  standard,
  vip,
}: {
  standard: string[];
  vip: string[];
}) {
  return (
    <div className="flex flex-col gap-6 lg:border-[#dbdbdb] lg:border-b-4 mt-6 mb-8 pb-8 xl:my-3">
      <strong className="text-3xl text-[#1c4678]">SERVICES INCLUS</strong>
      <strong className="text-xl text-black">Pack Standard:</strong>
      <ul className="text-black">
        {standard.map((service, index) => (
          <li key={index}>- {service}</li>
        ))}
      </ul>
      <strong className="text-black text-xl">Pack VIP:</strong>
      <ul className="text-black">
        {vip.map((service, index) => (
          <li key={index}>- {service}</li>
        ))}
      </ul>
    </div>
  );
}
