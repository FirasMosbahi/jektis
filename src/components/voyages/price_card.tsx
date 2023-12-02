import React from "react";

export default function PriceButtonXl({
  price,
  payementType,
}: {
  price: number;
  payementType: string;
}): React.ReactNode {
  return (
    <div
      style={{ borderRadius: 15 }}
      className="bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
    >
      <div style={{ padding: 0.1 }}>
        <div
          style={{ borderRadius: 15 }}
          className="m-1 bg-white flex flex-row"
        >
          <div
            id="price"
            className="flex flex-col items-center border rounded-xl pl-2 pb-2 pr-2 mr-2 text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
          >
            <p className="text-xs pb-2">A partir de</p>
            <strong className="text-3xl">
              {price}
              <sup>TND</sup> / Mois
            </strong>
          </div>
          <div className="p-1">
            <div className="flex text-2xl flex-col bg-white text-[#0f4d99] justify-center mr-2">
              {payementType.split(" ").map((e, index) => (
                <strong key={index}>{e}</strong>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
