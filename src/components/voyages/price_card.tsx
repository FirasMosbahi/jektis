import React from "react";

export default function PriceButtonXl({
  price,
}: {
  price: number;
}): React.ReactNode {
  return (
    <div
      id="price"
      className="flex flex-col items-start border rounded-2xl px-2 py-0.5 text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
    >
      <p className="xl:text-[12px] lg:text-[10px]">A partir de</p>
      <div className="flex flex-row leading-none items-end">
        <div className="flex flex-row">
          <p className="xl:text-[32px] text-[28px] font-extrabold">3499</p>
          <p className="xl:text-[20px] text-[18px] font-bold">TND</p>
        </div>
        <p className="xl:text-[20px] text-[18px] text-nowrap font-bold">
          / Pers
        </p>
      </div>
    </div>
  );
}
