import React from "react";

export default function PriceButtonXl({
  price,
}: {
  price: number;
}): React.ReactNode {
  return (
    <div
      id="price"
      className="flex flex-col items-start border rounded-2xl px-4 py-2 text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
    >
      <p className="text-sm pb-2">A partir de</p>
      <strong className="text-xl">
        {price}
        <sup>TND</sup> / Pers
      </strong>
    </div>
  );
}
