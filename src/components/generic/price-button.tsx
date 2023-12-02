import React from "react";

export default function PriceButton({
  price,
  enfantGratuit,
}: {
  price: number;
  enfantGratuit: boolean;
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
            className="flex flex-col items-center border text-center rounded-xl pl-2 pb-2 pr-2 mr-2 text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
          >
            <p className="text-xs pb-2">A partir de</p>
            <strong className="xl:text-3xl text-sm">
              {price ?? 2999}
              <sup>TND</sup> / Mois
            </strong>
          </div>
          <div className="p-1 flex flex-col justify-center">
            <div className="flex leading-3 flex-col bg-white text-[#0f4d99] text-xs items-start mr-2">
              <p>Hébergement en</p>
              <strong>LPD</strong>
              {enfantGratuit && <p>Enfants -6 ans</p>}
              {enfantGratuit && <strong>Gratuit</strong>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
