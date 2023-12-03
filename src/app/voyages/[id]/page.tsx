import React from "react";
import VoyageOffer from "@jektis/components/voyage-details/voyage-offer";
import VoyageNavbar from "@jektis/components/voyage-details/voyage-navbar";
import VoyageDetails from "@jektis/components/voyage-details/voyage-description";
import VoyageImages from "@jektis/components/voyage-details/voyage-images";
import CustomPage from "@jektis/components/generic/CustomPage";
import { getProgram } from "@jektis/services";
import VoyageDetailsProps from "@jektis/types/voyage-details-props";

export default function VoyageGroupIndex(): React.ReactNode {
  const voyage: VoyageDetailsProps = getProgram(1);
  return (
    <CustomPage>
      <div className="bg-white pt-8 pb-20 px-4">
        <VoyageOffer {...voyage} />
        <VoyageNavbar />
        <div className="flex flex-row gap-16">
          <div>
            <VoyageDetails voyageDetails={voyage} />
          </div>
          <div className="w-96">
            <VoyageImages />
          </div>
        </div>
      </div>
    </CustomPage>
  );
}
