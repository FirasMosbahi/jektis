"use client";

import React from "react";
import Center, { Axes } from "@jektis/components/generic/center";

export type ChambreProps = {
  category: string;
  isDisponible: boolean;
};
export default function ChamberDescriptionElement({
  category,
  isDisponible,
  onSelect,
}: {
  category: string;
  isDisponible: boolean;
  onSelect: () => void;
}): React.ReactNode {
  return (
    <div className="items-center justify-center flex flex-row">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-2"
        onClick={onSelect}
      />
      <label
        htmlFor="default-checkbox"
        className="ms-2 text-[0.8rem] font-medium text-gray-900 flex flex-row items-center justify-between w-full"
      >
        {category}{" "}
        <div
          className={`text-white h-fit border border-transparent rounded px-4 ${
            isDisponible ? "bg-weakGreen" : "bg-red-500"
          }`}
        >
          {isDisponible ? "Dispo" : "Non Dispo"}
        </div>
      </label>
    </div>
  );
}
