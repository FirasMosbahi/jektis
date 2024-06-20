"use client";

import React from "react";
import { VoyageDetailsProps } from "@jektis/types/voyage-details-props";
import { VoyageDetailsSection } from "@jektis/enums/voyage";
import Programme from "@jektis/components/voyage-description/programme";
import ServicesInclus from "@jektis/components/voyage-description/ServicesInclus";
import ServicesNonInclus from "@jektis/components/voyage-description/ServicesNonInclus";
import VisaSection from "@jektis/components/voyage-description/Visa";
import ChargeeDeVoyageSection from "@jektis/components/voyage-description/ChargeeDeVoyageSection";
import TarifsAndConditions from "@jektis/components/voyage-description/TarifsAndConditions";
import Link from "next/link";

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
            <Link
              href={`/pdf/voyage/${voyageDetails.id}`}
              target="_blank"
              className="px-2 h-8 flex flex-col justify-center bg-[#0050A5] text-white border border-transparent rounded-xl"
            >
              Imprimer
            </Link>
          </div>
          <div className="my-3">
            <strong className="text-[#1b53a1] text-3xl ">PROGRAMME</strong>
          </div>
          <Programme programmeDescription={voyageDetails.program} />
        </div>
      )}
      {section === VoyageDetailsSection.servicesInclus && (
        <ServicesInclus
          vip={voyageDetails.servicesInclus.vip}
          standard={voyageDetails.servicesInclus.standard}
        />
      )}
      {section === VoyageDetailsSection.servicesNonInclus && (
        <ServicesNonInclus
          servicesNonInclus={voyageDetails.servicesNonInclus}
        />
      )}
      {section === VoyageDetailsSection.Visa && (
        <VisaSection
          documents={voyageDetails.visa.documents}
          procedures={voyageDetails.visa.procedures}
          delais={voyageDetails.visa.delais}
        />
      )}
      {section === VoyageDetailsSection.ChargeeDeVoyage && (
        <ChargeeDeVoyageSection
          nom={voyageDetails.chargeeDeVoyage.nom}
          whatsapp={voyageDetails.chargeeDeVoyage.whatsapp}
          email={voyageDetails.chargeeDeVoyage.email}
          telephone={voyageDetails.chargeeDeVoyage.telephone}
        />
      )}
      {section === VoyageDetailsSection.TarifsAndConditions && (
        <TarifsAndConditions
          dateDeVoyage={voyageDetails.tarif.dateDeVoyage}
          conditions={voyageDetails.tarif.conditions}
          tarifs={voyageDetails.tarif.tarifs}
        />
      )}
    </div>
  );
}
