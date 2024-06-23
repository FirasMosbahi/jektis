"use client";

import { WhiteSearchIcon } from "@jektis/components/icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AllezReourVolFormData,
  HotelFilterFormData,
} from "@jektis/forms-data/hotel-filter-form-data";
import { yupResolver } from "@hookform/resolvers/yup";
import { AllezReourVolFormValidationSchema } from "@jektis/schema/home-forms";
import { allezDapartVolSearch } from "@jektis/actions/home-filter-actions";

export default function AllerRetourForm(): React.ReactElement {
  const { register, setValue, getValues, handleSubmit } =
    useForm<AllezReourVolFormData>({
      resolver: yupResolver(AllezReourVolFormValidationSchema),
      defaultValues: {
        nombreAdultes: 0,
        nombreEnfants: 0,
        nombreBebe: 0,
      },
    });
  async function onSubmit(form: AllezReourVolFormData) {
    await allezDapartVolSearch(form);
  }
  const [persons, setPersons] = useState<{
    adultes: number;
    enfants: number;
    bebe: number;
  }>({
    adultes: 0,
    enfants: 0,
    bebe: 0,
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="2xl:max-w-full w-full 2xl:px-8 text-[0.85rem] py-4 px-4"
    >
      <div className="grid grid-cols-2 pb-4 gap-y-2 gap-x-6">
        <div>
          <label htmlFor="depart" className="block mb-2  text-gray-900">
            Au départ de
          </label>
          <input
            type="text"
            id="depart"
            className=" border h-8 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ville / Aeroporte"
            {...register("depart")}
          />
        </div>
        <div>
          <label htmlFor="destination" className="block mb-2  text-gray-900">
            A destination de
          </label>
          <input
            type="text"
            id="destination"
            className=" border h-8 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ville / Aeroporte"
            {...register("destination")}
          />
        </div>
        <div>
          <label htmlFor="depart-date" className="block mb-2  text-gray-900">
            Date de départ
          </label>
          <input
            type="date"
            id="depart-date"
            className=" h-8 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register("dateDepart")}
          />
        </div>
        <div>
          <label htmlFor="depart-retour" className="block mb-2  text-gray-900">
            Date de retour
          </label>
          <input
            type="date"
            id="depart-retour"
            className=" h-8 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register("dateRetour")}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-2">
        <div>
          <label htmlFor="adultes" className="block mb-2   text-gray-900">
            Adultes
          </label>
          <input
            type="number"
            id="adultes"
            className=" h-8 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={persons.adultes}
            onChange={(e) => {
              const value = Number.isNaN(Number.parseInt(e.target.value))
                ? 0
                : Number.parseInt(e.target.value);
              if (
                getValues().nombreEnfants + getValues().nombreBebe + value <=
                4
              ) {
                setPersons((prev) => ({ ...prev, enfants: value }));
                setValue("nombreAdultes", value);
              }
            }}
          />
        </div>
        <div>
          <label htmlFor="enfants" className="block mb-2  text-gray-900">
            Enfant(s) (-12 ans)
          </label>
          <input
            type="number"
            id="enfants"
            className=" h-8 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={persons.enfants}
            onChange={(e) => {
              const value = Number.isNaN(Number.parseInt(e.target.value))
                ? 0
                : Number.parseInt(e.target.value);
              if (
                getValues().nombreAdultes + getValues().nombreBebe + value <=
                4
              ) {
                setPersons((prev) => ({ ...prev, enfants: value }));
                setValue("nombreEnfants", value);
              }
            }}
          />
        </div>
        <div>
          <label htmlFor="bebe" className="block mb-2  text-gray-900">
            Bébé(s) (-2 ans)
          </label>
          <input
            type="number"
            id="bebe"
            className=" h-8 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={persons.bebe}
            onChange={(e) => {
              const value = Number.isNaN(Number.parseInt(e.target.value))
                ? 0
                : Number.parseInt(e.target.value);
              if (
                getValues().nombreAdultes + getValues().nombreEnfants + value <=
                4
              ) {
                setPersons((prev) => ({ ...prev, enfants: value }));
                setValue("nombreBebe", value);
              }
            }}
          />
        </div>
        <div>
          <label htmlFor="classe" className="block mb-2 text-gray-900">
            Classes
          </label>
          <select
            id="classe"
            {...register("classe")}
            className="border h-8 border-gray-300 text-gray-900 text-[14px] focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5"
          >
            <option selected value="">
              -
            </option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-10 mr-2">
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
      {/*<button*/}
      {/*  type="submit"*/}
      {/*  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"*/}
      {/*>*/}
      {/*  Submit*/}
      {/*</button>*/}
    </form>
  );
}
