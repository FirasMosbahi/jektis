import React from "react";
import { TwoUsers } from "@jektis/components/icons";

export default function HotelReservationTableItem(): React.ReactNode {
  return (
    <div className="grid mr-2 grid-cols-11 rounded-md shadow-sm mt-1 bg-[#ececec]">
      <div className="pt-8 col-span-3 pl-3 lg:pl-0 lg:px-4 py-2  text-xl font-medium text-white border border-white rounded-se-lg">
        <div className="flex flex-row items-start lg:px-6 mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="lg:w-4 mt-2 mr-2 lg:mr-0 lg:mt-0 -ml-2 lg:h-4 h-3 w-3 text-blue-600  border-white"
          />
          <div className="flex lg:w-40 flex-col ">
            <label
              htmlFor="default-radio-1"
              className="lg:ms-2 lg:text-sm text-[8px] font-medium text-[#a9a9a9]"
            >
              Chambre 1
            </label>
            <strong className="lg:pl-2 text-end lg:text-xl text-[8px] text-nowrap lg:pt-2 text-black">
              Chambre Double
            </strong>
          </div>
        </div>
      </div>
      <div className="lg:col-span-6 col-span-5 flex flex-col justify-center px-1 lg:flex-row gap-4 lg:items-center lg:pl-4 lg:justify-start lg:px-2 py-2 lg:text-xl text-[12px] w-full font-medium text-white border border-b border-white">
        <div className="flex flex-row items-center">
          <TwoUsers />
          <select
            id="countries"
            className="ml-2 xxl:w-40 lg:text-[14px] text-[10px] w-32 lg:w-[170px] h-8 border bg-[#ececec] border-white xl:border-white text-gray-900 rounded-lg block "
          >
            <option>Logement petit déjeuner</option>
            <option>Logement petit déjeuner</option>
            <option>Logement petit déjeuner + déjeuner</option>
            <option>Logement complet</option>
          </select>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="lg:w-3.5 w-3 text-blue-600 bg-gray-100 border-white focus:ring-blue-500"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 lg:text-sm text-[12px] font-medium text-[#004fa4]"
            >
              <strong className="leading-none">Vue sur mer</strong>
            </label>
          </div>
        </div>
        <button className="bg-[#004fa4] lg:text-[14px] text-[10px] lg:mx-0 mx-8 lg:px-2 py-1 leading-none border rounded-lg">
          Sur Demande
        </button>
      </div>
      <div className="lg:col-span-2 col-span-3 flex flex-col lg:px-8 px-3 justify-around py-4 w-full text-xl font-medium text-white border border-white rounded-e-lg">
        <p className="text-[#004fa4] font-extrabold lg:text-[24px] text-[16px] text-start w-full">
          88.000<sup>DT</sup>
        </p>
        <div className="pt-2 px-3 lg:text-[14px] text-[10px] leading-none flex flex-col">
          <strong className="text-black text-nowrap leading-5">
            Prix par nuit:
          </strong>
          <strong className="text-black text-center">88.000DT</strong>
        </div>
      </div>
    </div>
  );
}
