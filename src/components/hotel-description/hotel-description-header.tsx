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
    <div className="flex gap-2 xl:flex-row flex-col items-center text-center pt-4 xl:items-end xl:gap-12">
      <div>
        <p className="text-[#0f4d99] sm:text-center text-2xl md:text-4xl  font-extrabold ">
          {name}
        </p>
      </div>
      <Stars number={rate} height={30} width={30} />
    </div>
  );
}
