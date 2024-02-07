import React from "react";

export default function HotelDetailsNavbar(): React.ReactNode {
  return (
    <div className="hidden lg:block">
      <div
        className="inline-flex w-full rounded-md shadow-sm mt-4 h-16 py-2 bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
        role="group"
      >
        <button
          type="button"
          className="px-4 xl:text-nowrap xl:w-[30%] xl:text-xl font-medium text-white border-r-4 rounded-s-lg"
        >
          <strong>Tarifs et réservations</strong>
        </button>
        <button
          type="button"
          className="px-4 xl:text-nowrap xl:w-[20%] xl:text-xl font-medium text-white border-r-4 border-gray-200"
        >
          <strong>Aménagement</strong>
        </button>
        <button
          type="button"
          className="px-4 xl:text-xl xl:text-nowrap xl:w-[17.5%] font-medium text-white border-r-4 border-gray-200"
        >
          <strong>Descriptif</strong>
        </button>
        <button
          type="button"
          className="px-4 xl:text-xl font-medium xl:text-nowrap xl:w-[15%] text-white border-r-4 border-gray-200"
        >
          <strong>Carte</strong>
        </button>
        <button
          type="button"
          className="px-4 w-max flex xl:text-nowrap xl:w-[17.5%] flex-row items-center justify-start xl:text-xl font-medium text-white"
        >
          <strong className="w-full text-center">Avis</strong>
        </button>
      </div>
    </div>
  );
}
