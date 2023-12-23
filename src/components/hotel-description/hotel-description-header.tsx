import React from "react";
import Stars from "@jektis/components/generic/stars";
import PriceButton from "@jektis/components/generic/price-button";
export default function HotelDescriptionHeader({
  name,
  price,
  rate,
  detailEnfant,
}: {
  name: string;
  price: number;
  rate: number;
  detailEnfant: string;
}): React.ReactNode {
  return (
    <div className="flex items-end gap-2 xl:flex-row flex-col md:items-center xl:items-end xl:gap-12">
      <div>
        <p className="text-[#0f4d99] sm:text-center md:text-4xl  font-extrabold ">
          {name}
        </p>
      </div>
      <Stars number={rate} height={30} width={30} />
    </div>
  );
}
