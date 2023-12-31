"use client";
import AllerRetourForm from "@jektis/components/home/aller-retour-form";
import { useState } from "react";
import SimpleAllerForm from "@jektis/components/home/simple-aller-form";
import MultiDimensionForm from "@jektis/components/home/multi-dimension-form";

enum VolFormEnum {
  ALLER_RETOUR,
  SIMPLE_ALLER,
  MULTI_DESTINATION,
}
export default function VolForm(): React.ReactElement {
  const [choosenForm, setChoosenForm] = useState<VolFormEnum>(
    VolFormEnum.ALLER_RETOUR,
  );
  return (
    <div className="w-full bg-opacity-80 h-[27rem] border border-transparent rounded-2xl bg-white">
      <div className="flex flex-row justify-between items-center mt-4 m-4">
        <div className="flex items-center">
          <input
            id="aller-retour"
            type="radio"
            onClick={() => setChoosenForm(VolFormEnum.ALLER_RETOUR)}
            checked={choosenForm === VolFormEnum.ALLER_RETOUR}
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label htmlFor="aller-retour" className="ms-2 text-sm text-gray-900">
            Aller-Retour
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="aller-simple"
            type="radio"
            value=""
            onClick={() => setChoosenForm(VolFormEnum.SIMPLE_ALLER)}
            checked={choosenForm === VolFormEnum.SIMPLE_ALLER}
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label htmlFor="aller-simple" className="ms-2 text-sm text-gray-900">
            Aller Simple
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="multi-destination"
            type="radio"
            onClick={() => setChoosenForm(VolFormEnum.MULTI_DESTINATION)}
            checked={choosenForm === VolFormEnum.MULTI_DESTINATION}
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label
            htmlFor="multi-destination"
            className="ms-2 text-sm text-gray-900"
          >
            Multi Destination
          </label>
        </div>
      </div>
      {choosenForm === VolFormEnum.ALLER_RETOUR ? (
        <AllerRetourForm />
      ) : choosenForm === VolFormEnum.SIMPLE_ALLER ? (
        <SimpleAllerForm />
      ) : (
        <MultiDimensionForm />
      )}
    </div>
  );
}
