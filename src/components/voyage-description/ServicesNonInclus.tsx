import React from "react";

export default function ServicesNonInclus({
  servicesNonInclus,
}: {
  servicesNonInclus: string[];
}) {
  return (
    <div className="flex flex-col gap-6 lg:border-[#dbdbdb] lg:border-b-4 mt-6 mb-8 pb-8 xl:my-3">
      <strong className="text-3xl text-[#1c4678]">SERVICES NON INCLUS</strong>
      <ul className="text-black">
        {servicesNonInclus.map((service, index) => (
          <li key={index}>- {service}</li>
        ))}
      </ul>
    </div>
  );
}
