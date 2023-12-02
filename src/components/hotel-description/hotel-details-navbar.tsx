import React from "react";

export default function HotelDetailsNavbar(): React.ReactNode {
  return (
    <div className="hidden lg:block">
      <div
        className="inline-flex w-full rounded-md shadow-sm mt-8 h-16 py-2 bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
        role="group"
      >
        <button
          type="button"
          className="px-4 xl:text-xl font-medium text-white border-r-4 rounded-s-lg"
        >
          <strong>Tarifs et réservations</strong>
        </button>
        <button
          type="button"
          className="px-4 xl:text-xl font-medium text-white border-r-4 border-gray-200"
        >
          <strong>Aménagement</strong>
        </button>
        <button
          type="button"
          className="px-4 xl:text-xl font-medium text-white border-r-4 border-gray-200"
        >
          <strong>Descriptif</strong>
        </button>
        <button
          type="button"
          className="px-4 xl:text-xl font-medium text-white border-r-4 border-gray-200"
        >
          <strong>Carte</strong>
        </button>
        <button
          type="button"
          className="px-4 w-max flex flex-row items-center justify-start xl:text-xl font-medium text-white"
        >
          <strong className="pl-4">Avis</strong>
        </button>
      </div>
    </div>
  );
}
