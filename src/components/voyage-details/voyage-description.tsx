"use client";

import React from "react";
import VoyageDetailsProps from "@jektis/types/voyage-details-props";
import { VoyageDetailsSection } from "@jektis/enums/voyage";
import Programme from "@jektis/components/voyage-details/programme";
import { Printer } from "@jektis/components/icons";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import ProgramPDF from "@jektis/components/pdf/ProgramPDF";

export default function VoyageDetails({
  voyageDetails,
  section,
}: {
  voyageDetails: VoyageDetailsProps;
  section: VoyageDetailsSection;
}): React.ReactNode {
  return (
    <div>
      {section === VoyageDetailsSection.programme && (
        <div className="relative">
          <div className="absolute hidden right-4 top-4 sm:flex flex-row gap-x-4">
            <button className="px-2 h-8 bg-[#CFCFCF] text-black border border-transparent rounded-xl">
              Partager
            </button>
            <PDFDownloadLink
              document={<ProgramPDF programme={voyageDetails.program} />}
              fileName={`${voyageDetails.name}-programme.pdf`}
            >
              {/*{({ blob, url, loading, error }) => {*/}
              {/*  if (!loading) {*/}
              {/*    this.download(*/}
              {/*      `${voyageDetails.name}-programme.pdf`,*/}
              {/*      URL.createObjectURL(blob),*/}
              {/*    );*/}
              {/*    callback();*/}
              {/*  }*/}
              {/*}}*/}
              <button
                // onClick={async () => {
                //   await downloadPdf(voyageDetails.program);
                // }}
                className="px-2 h-8 bg-[#0050A5] text-white border border-transparent rounded-xl"
              >
                Imprimer
              </button>
            </PDFDownloadLink>
          </div>
          <div className="my-3">
            <strong className="text-[#1b53a1] text-3xl ">PROGRAMME</strong>
          </div>
          <Programme programmeDescription={voyageDetails.program} />
        </div>
      )}
      {section === VoyageDetailsSection.servicesInclus && (
        <div className="flex flex-col gap-6 lg:border-[#dbdbdb] lg:border-b-4 mt-6 mb-8 pb-8 xl:my-3">
          <strong className="text-3xl text-[#1c4678]">SERVICES INCLUS</strong>
          <strong className="text-xl text-black">
            Pack Standard comprends:
          </strong>
          <ul className="text-black">
            {voyageDetails.servicesInclus.standard.map((service, index) => (
              <li key={index}>- {service}</li>
            ))}
          </ul>
          <strong className="text-black text-xl">Pack VIP comprends:</strong>
          <ul className="text-black">
            {voyageDetails.servicesInclus.vip.map((service, index) => (
              <li key={index}>- {service}</li>
            ))}
          </ul>
        </div>
      )}
      {section === VoyageDetailsSection.servicesNonInclus && (
        <div className="flex flex-col gap-6 lg:border-[#dbdbdb] lg:border-b-4 mt-6 mb-8 pb-8 xl:my-3">
          <strong className="text-3xl text-[#1c4678]">
            SERVICES NON INCLUS
          </strong>
          <ul className="text-black">
            {voyageDetails.servicesNonInclus.map((service, index) => (
              <li key={index}>- {service}</li>
            ))}
          </ul>
        </div>
      )}
      {section === VoyageDetailsSection.Visa && (
        <div className="flex flex-col gap-6 lg:border-[#dbdbdb] lg:border-b-4 mt-6 mb-8 pb-8 xl:my-3">
          <strong className="text-3xl text-[#1c4678]">VISA </strong>
          <ul className="text-black">
            {voyageDetails.visa.map((service, index) => (
              <li key={index}>- {service}</li>
            ))}
          </ul>
        </div>
      )}
      {section === VoyageDetailsSection.ChargeeDeVoyage && (
        <div className="flex flex-col gap-6 lg:border-[#dbdbdb] lg:border-b-4 mt-6 mb-8 pb-8 xl:my-3">
          <strong className="text-3xl text-[#1c4678]">
            CHARGé(E) DU VOYAGE
          </strong>
          <ul>
            {voyageDetails.chargeeDeVoyage.map((e, index) => (
              <p key={index} className="text-black">
                - {e}
              </p>
            ))}
          </ul>
        </div>
      )}
      {section === VoyageDetailsSection.TarifsAndReservation && (
        <div className="flex flex-col gap-6 lg:border-b-[#dbdbdb] lg:border-b-4 mt-6 mb-8 pb-8 xl:my-3">
          <strong className="text-3xl text-[#1c4678]">TARIF</strong>
          <strong className="text-xl text-black">
            date de voyage : Du 30 Octobre au 05 Novembre 2023
          </strong>
          <ul className="text-black mb-4">
            {voyageDetails.tarif.prix.map((price, index) => (
              <li key={index}>- {price}</li>
            ))}
          </ul>
          <p className="text-black">
            Ci-dessous les conditions générales du voyage :
          </p>
          <strong className="text-xl text-black">Paiement :</strong>
          <ul className="text-black">
            {voyageDetails.tarif.payement.map((payement, index) => (
              <li key={index}>- {payement}</li>
            ))}
          </ul>
          <strong className="text-xl text-black">
            Frais d{"'"}annulation :
          </strong>
          <ul className="text-black">
            {voyageDetails.tarif.cancelFrais.map((e, index) => (
              <li key={index}>- {e}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
