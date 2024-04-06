"use client";

import React from "react";

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
        className="xxl:w-4 xxl:h-4 w-2.5 h-2.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 xxl:mr-2 mr-0.5"
        onClick={onSelect}
      />
      <label
        htmlFor="default-checkbox"
        className="xl:ms-2 ms-0.5 xl:text-[12px] xxl:text-[11px] font-medium text-gray-900 flex flex-row items-center justify-between w-full"
      >
        {category}{" "}
        <div
          className={`text-white h-fit border border-transparent rounded xxl:px-4 xl:px-1.5 ${
            isDisponible ? "bg-weakGreen" : "bg-red-500"
          }`}
        >
          {isDisponible ? "Dispo" : "Non Dispo"}
        </div>
      </label>
    </div>
  );
}
