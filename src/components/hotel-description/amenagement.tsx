import React from "react";
import {
  CoveredPool,
  ExternalPool,
  Lounge,
  Love,
  Parasol,
  Pool,
  Spa,
} from "@jektis/components/icons";

export default function Amenagement(): React.ReactNode {
  return (
    <div className="border-b-4 border-t-4 py-8 my-8 mr-32">
      <strong className="text-[#144e8b] text-3xl">AMENAGEMENT</strong>
      <div className="grid xl:grid-cols-4 text-black mt-8">
        <div className="flex flex-row justify-start gap-4 mb-3">
          <ExternalPool />
          <p>Piscine Extérieur</p>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Pool />
          <p>Piscine Pour Enfants</p>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Lounge />
          <p>Lounge / Bar</p>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Lounge />
          <p>Lounge / Bar</p>
        </div>
        <div className="flex flex-row justify-start gap-4 mb-3">
          <Spa />
          <p>SPA</p>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Parasol />
          <p>Pieds dans l{"'"}eau</p>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <CoveredPool />
          <p>Piscine Couverte</p>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Love />
          <p>Spéciale Voyage De Noces</p>
        </div>
        <div className="flex flex-row justify-start gap-4">ALL INCLUSIVE</div>
        <div className="flex flex-row justify-start gap-4">ALL IN SOFT</div>
        <div className="flex flex-row justify-start gap-4">
          PENSION COMPLETE
        </div>
      </div>
    </div>
  );
}
