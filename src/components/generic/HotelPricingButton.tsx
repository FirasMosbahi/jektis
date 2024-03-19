import React from "react";

export default function HotelPricingButton({ price }: { price: number }) {
  return (
    <div
      id="price"
      className="flex flex-col items-start border-2 rounded-xl px-2 py-1  text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
    >
      <p className="xxl:text-xs xl:text-[10px] lg:text-[9px] leading-none">
        A partir de
      </p>
      <div className="flex flex-row items-center">
        <strong className="xxl:text-[38px] xl:text-[30px] lg:text-[28px] leading-none xxl:h-10">
          {price}
        </strong>
        <div className="flex flex-col justify-start">
          <strong className="leading-none xxl:text-[20px] lg:text-[14px] xl:text-[16px]">
            TND
          </strong>
          <p className="xxl:text-xs xl:text-[10px] lg:text-[9px] leading-none text-nowrap">
            Par personne
          </p>
        </div>
      </div>
    </div>
  );
}
