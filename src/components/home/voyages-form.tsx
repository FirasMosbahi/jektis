import React from "react";
import { WhiteSearchIcon } from "@jektis/components/icons";

export default function VoyagesForm(): React.ReactElement {
  return (
    <form className="w-full h-full py-4 px-4 gap-x-8 gap-y-4 bg-opacity-80 border border-transparent rounded-2xl bg-white grid grid-cols-2">
      <div className="col-span-2">
        <label htmlFor="destination" className="block mb-2 text-gray-900">
          Nos Destinations
        </label>
        <select
          id="destination"
          className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
        >
          <option selected>Tous</option>
        </select>
      </div>
      <div className="col-span-2">
        <label htmlFor="date" className="block mb-2 text-gray-900">
          Date
        </label>
        <select
          id="date"
          className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
        >
          <option selected>Date</option>
        </select>
      </div>
      <div>
        <label htmlFor="duree" className="block mb-2 text-gray-900">
          Durée
        </label>
        <select
          id="duree"
          className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
        >
          <option selected>Durée</option>
        </select>
      </div>
      <div>
        <label htmlFor="budget" className="block mb-2 text-gray-900">
          Budget
        </label>
        <select
          id="budget"
          className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
        >
          <option selected>Budget</option>
        </select>
      </div>
      <div>
        <label htmlFor="Visa" className="block mb-2 text-gray-900">
          Visa
        </label>
        <select
          id="visa"
          className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
        >
          <option selected>Visa</option>
        </select>
      </div>
      <div className="col-span-2 flex flex-row justify-center mt-4 mr-2">
        <button
          type="submit"
          style={{
            borderRadius: 10,
          }}
          className="text-white h-12 bg-[#8eb633] focus:ring-4 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          <WhiteSearchIcon
            width={20}
            height={20}
            strokeWidth={2}
            className="mx-4"
          />
          <p className="text-xl">Rechercher</p>
        </button>
      </div>
    </form>
  );
}
