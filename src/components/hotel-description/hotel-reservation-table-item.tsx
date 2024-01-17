import React from "react";
import { TwoUsers } from "@jektis/components/icons";

export default function HotelReservationTableItem(): React.ReactNode {
  return (
    <div className="grid mr-2 grid-cols-11 inline-flex rounded-md shadow-sm mt-1 bg-[#ececec]">
      <div className="pt-8 col-span-3 px-4 py-2  text-xl font-medium text-white border border-white rounded-se-lg">
        <div className="flex flex-row items-start mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 -ml-2 h-4 text-blue-600  border-white"
          />
          <div className="flex w-full flex-col ">
            <label
              htmlFor="default-radio-1"
              className="lg:ms-2 text-sm font-medium text-[#a9a9a9]"
            >
              Chambre 1
            </label>
            <strong className="lg:pl-2 -ml-4 lg:pt-2 text-black">
              Chambre Double
            </strong>
          </div>
        </div>
      </div>
      <div className="col-span-6 flex flex-col justify-center xl:flex-row gap-4 xl:items-center pl-4 xl:justify-start px-2 py-2 text-xl w-full font-medium text-white border border-b border-white">
        <div className="flex flex-row items-center">
          <TwoUsers />
          <select
            id="countries"
            className="ml-2 w-40 lg:w-48 h-8 border bg-[#ececec] border-white xl:border-white text-gray-900 rounded-lg block "
          >
            <option className="text-sm lg:text-xl">
              Logement petit déjeuner
            </option>
            <option className="text-sm lg:text-xl">
              Logement petit déjeuner
            </option>
            <option className="text-sm lg:text-xl">
              Logement petit déjeuner + déjeuner
            </option>
            <option className="text-sm lg:text-xl">Logement complet</option>
          </select>
        </div>
        <div className="flex flex-row justify-center">
          <div>
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-white focus:ring-blue-500"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-[#004fa4]"
            >
              <strong>Vue sur mer</strong>
            </label>
          </div>
        </div>
        <button className="bg-[#004fa4] text-[1rem] px-2 py-1 border rounded-xl">
          Sur Demande
        </button>
      </div>
      <div className="col-span-2 flex flex-col items-center pb-4 md:justify-end justify-center w-full text-xl font-medium text-white border border-white rounded-e-lg">
        <strong className="text-[#004fa4] md:text-xl text-xs">
          88.000<sup>DT</sup>
        </strong>
        <div className="pt-2"></div>
        <strong className="text-black text-xs text-center">
          Prix par nuit:
        </strong>
        <strong className="text-black text-xs">88.000DT</strong>
      </div>
    </div>
  );
}
