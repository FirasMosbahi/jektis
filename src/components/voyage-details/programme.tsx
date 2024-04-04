import React from "react";
import ProgramDayDescription from "@jektis/components/voyage-details/program-day-description";
import { ProgramDay } from "@jektis/types";

export default function Programme({
  programmeDescription,
}: {
  programmeDescription: ProgramDay[];
}): React.ReactNode {
  return (
    <div className="lg:border-b-4 lg:pb-8 mb-4 ">
      <div>
        {programmeDescription.map((programDay, index) => (
          <ProgramDayDescription key={index} {...programDay} />
        ))}
      </div>
    </div>
  );
}
