"use client";

import React, { useEffect } from "react";
import VoyageOffer from "@jektis/components/voyage-details/voyage-offer";
import VoyageNavbar from "@jektis/components/voyage-details/voyage-navbar";
import VoyageDetails from "@jektis/components/voyage-details/voyage-description";
import VoyageImages from "@jektis/components/voyage-details/voyage-images";
import { VoyageDetailsProps } from "@jektis/types/voyage-details-props";
import { VoyageDetailsSection } from "@jektis/enums/voyage";
import ChambreSelectionTable from "@jektis/components/voyage-details/chambre-selection-table";
import ResizeDetector from "react-resize-detector";
import MobileVoyageNavigation from "@jektis/components/voyage-details/MobileVoyageNavigation";
import { getProgram } from "@jektis/actions/voyage-details-actions";

export default function VoyageGroupIndex({
  params,
}: {
  params: { id: string };
}): React.ReactNode {
  const voyageDetailsSectionRef: React.MutableRefObject<HTMLDivElement | null> =
    React.useRef(null);
  useEffect(() => {}, []);
  const voyage: VoyageDetailsProps = getProgram(params.id);
  const [section, setSection] = React.useState<VoyageDetailsSection>(
    VoyageDetailsSection.programme,
  );
  const [heightState, setHeight] = React.useState<number>(0);

  return (
    <div className="bg-white lg:mt-0 mt-12 pt-8 pb-8 px-4">
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
          <div
            ref={voyageDetailsSectionRef}
            className="xl:w-10/12 w-full h-fit"
          >
            <VoyageDetails voyageDetails={voyage} section={section} />
            <MobileVoyageNavigation
              onClick={(section) => {
                voyageDetailsSectionRef?.current?.scrollIntoView({});

                setSection(section);
              }}
              current={section}
            />
            <ChambreSelectionTable chambres={voyage.chambres} />
          </div>
        </ResizeDetector>
        <div className="xl:block hidden max-w-[15rem]">
          <VoyageImages height={heightState} />
        </div>
      </div>
    </div>
  );
}
