"use client";

import React, { useEffect, useRef } from "react";
import VoyageOffer from "@jektis/components/voyage-details/voyage-offer";
import VoyageNavbar from "@jektis/components/voyage-details/voyage-navbar";
import VoyageDetails from "@jektis/components/voyage-details/voyage-description";
import VoyageImages from "@jektis/components/voyage-details/voyage-images";
import { getProgram } from "@jektis/services";
import VoyageDetailsProps from "@jektis/types/voyage-details-props";
import { VoyageDetailsSection } from "@jektis/enums/voyage";
import ChambreSelectionTable from "@jektis/components/voyage-details/chambre-selection-table";
import ResizeDetector, { useResizeDetector } from "react-resize-detector";

export default function VoyageGroupIndex({
  params,
}: {
  params: { id: string };
}): React.ReactNode {
  const voyage: VoyageDetailsProps = getProgram(params.id);
  const [section, setSection] = React.useState<VoyageDetailsSection>(
    VoyageDetailsSection.programme,
  );
  const [heightState, setHeight] = React.useState<number>(0);

  return (
    <div className="bg-white pt-8 pb-20 px-4">
      <VoyageOffer {...voyage} />
      <VoyageNavbar
        onClick={(section: VoyageDetailsSection) => setSection(section)}
      />

      <div className="flex flex-row gap-16">
        <ResizeDetector
          handleWidth={false}
          onResize={(width, height) => {
            setHeight(height ?? 0);
          }}
        >
          <div className="md:w-10/12 w-full h-fit">
            <VoyageDetails voyageDetails={voyage} section={section} />
            <ChambreSelectionTable chambres={voyage.chambres} />
          </div>
        </ResizeDetector>
        <div className="lg:block hidden">
          <VoyageImages height={heightState} />
        </div>
      </div>
    </div>
  );
}
