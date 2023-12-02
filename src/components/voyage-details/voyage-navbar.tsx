import React from "react";

export default function VoyageNavbar(): React.ReactNode {
  return (
    <div
      className="hidden bg-gradient-to-r w-full from-[#004fa6] to-[#02c9b2] lg:inline-flex border-transparent rounded-xl shadow-sm mt-8"
      role="group"
    >
      <button
        type="button"
        className="text-sm px-6 py-2 font-medium text-white border-r-2 border-white"
      >
        <strong className="xl:text-xl">Programme</strong>
      </button>
      <button
        type="button"
        className="px-6 py-2 text-sm font-medium text-white border-r-2 border-white"
      >
        <strong className="xl:text-xl">Services inclus</strong>
      </button>
      <button
        type="button"
        className="px-6 py-2 text-sm font-medium text-white border-r-2 border-white"
      >
        <strong className="xl:text-xl">Services non inclus</strong>
      </button>
      <button
        type="button"
        className="px-6 py-2 text-sm font-medium text-white border-r-2 border-white"
      >
        <strong className="xl:text-xl">Tarifs et réservations</strong>
      </button>
      <button
        type="button"
        className="px-6 py-2 text-sm font-medium text-white border-r-2 border-white"
      >
        <strong className="xl:text-xl">Visa</strong>
      </button>
      <button
        type="button"
        className="px-8 py-2 text-sm font-medium text-white"
      >
        <strong className="xl:text-xl">Chargé de voyage</strong>
      </button>
    </div>
  );
}
