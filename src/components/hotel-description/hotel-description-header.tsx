import React from "react";
import Stars from "@jektis/components/generic/stars";
import PriceButton from "@jektis/components/generic/price-button";
export default function HotelDescriptionHeader({
  name,
  rate,
}: {
  name: string;
  rate: number;
}): React.ReactNode {
  return (
    <div className="flex gap-2 lg:flex-row flex-col items-center text-center pt-4 lg:items-end lg:gap-2">
      <div>
        <p className="text-[#0f4d99] sm:text-center text-2xl md:text-[42px] xxl:text-[34px] xl:text-[32px] lg:text-[30px] font-extrabold ">
          {name}
        </p>
      </div>
      <Stars number={rate} height={25} width={25} />
    </div>
  );
}
