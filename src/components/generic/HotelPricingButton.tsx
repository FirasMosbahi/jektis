import React from "react";

export default function HotelPricingButton({ price }: { price: number }) {
  return (
    <div
      id="price"
      className="flex flex-col items-start border-2 rounded-xl px-2 py-2  text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
    >
      <p className="text-xs leading-none">A partir de</p>
      <div className="flex flex-row items-center">
        <strong className="text-[44px] leading-none h-10">{price}</strong>
        <div className="flex flex-col">
          <strong className="leading-none text-[28px]">TND</strong>
          <p className="text-xs leading-none">Par personne</p>
        </div>
      </div>
    </div>
  );
}
