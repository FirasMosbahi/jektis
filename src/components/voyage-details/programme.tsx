"use client";

import React from "react";
import ProgramDayDescription from "@jektis/components/voyage-details/program-day-description";
import { ProgramDay } from "@jektis/types";

export default function Programme({
  programmeDescription,
}: {
  programmeDescription: ProgramDay[];
}): React.ReactNode {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <div className="border-b-4 pb-8 mb-4 ">
      <div className={showDetails ? "" : "h-80 overflow-hidden"}>
        {programmeDescription.map((programDay, index) => (
          <ProgramDayDescription key={index} {...programDay} />
        ))}
      </div>
      <button
        onClick={() => setShowDetails((prevState) => !prevState)}
        className="bg-[#cacaca] text-black border-transparent rounded-xl text-xl py-0.5 mt-4 px-4"
      >
        {showDetails ? "Voir moins" : "Voir plus"}
      </button>
    </div>
  );
}
