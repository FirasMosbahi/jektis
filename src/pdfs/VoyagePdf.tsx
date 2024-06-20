import { VoyageDetailsProps } from "@jektis/types";
import React from "react";
import { usePDF } from "react-to-pdf";

export default function usePrintPdf({
  voyage,
}: {
  voyage: VoyageDetailsProps;
}) {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const pdfToPrint = (
    <div className="flex flex-col" ref={targetRef}>
      <img src="/logo_footer.png" />
      <div>
        <p>{voyage.name}</p>
        <p>{voyage.startDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
  return toPDF;
}
