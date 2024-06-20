"use client";

import React, { useEffect } from "react";
import { getHotelById, getProgram } from "@jektis/services";
import { usePDF } from "react-to-pdf";
import { VoyageDetailsProps } from "@jektis/types";
import { getSejourStayDetails } from "@jektis/utils/voyage.utils";

export default function HotelDetailsIndex({
  params,
}: {
  params: { id: string };
}): React.ReactNode {
  const voyage: VoyageDetailsProps = getProgram(params.id);
  const { toPDF, targetRef } = usePDF({
    filename: `voyage-${voyage.name}.pdf`,
  });
  const [pdfGenerated, setPdpGenerated] = React.useState(false);
  useEffect(() => {
    if (pdfGenerated) {
      toPDF();
    } else {
      setPdpGenerated(true);
    }
  }, [pdfGenerated]);
  return (
    <div
      className="flex flex-col items-center bg-white py-12 px-16"
      ref={targetRef}
    >
      <img className="h-[120px] mb-10 w-[400px]" src="/logo_footer.png" />
      <div className="relative mb-6 bg-[#2852A2] pb-6 w-full flex flex-col px-4 items-center">
        <div>
          <p className="text-[62px] pb-4 font-[900]">{voyage.name}</p>
          <p className="absolute left-[280px] -bottom-10 flex flex-row items-center justify-center px-1 pb-4 text-[24px] font-[700] bg-[#61BD50] border border-transparent rounded-2xl">
            Du {voyage.startDate.toLocaleDateString()} au{" "}
            {voyage.startDate.toLocaleDateString()} -{" "}
            {
              getSejourStayDetails(voyage.startDate, voyage.endDate)
                .numberOfNights
            }{" "}
            Nuits /{" "}
            {
              getSejourStayDetails(voyage.startDate, voyage.endDate)
                .numberOfDays
            }{" "}
            Jours
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 text-gray-400 text-[24px]">
        <p className="font-[700]">
          Chargé du Voyage : {voyage.chargeeDeVoyage.nom}
        </p>
        <p className="font-[300]">
          Tél : {voyage.chargeeDeVoyage.telephone} - WhatsApp :{" "}
          {voyage.chargeeDeVoyage.whatsapp} - Email :{" "}
          {voyage.chargeeDeVoyage.email}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-12 divide-x-2">
        <div className="flex flex-col px-2">
          {voyage.program.slice(0, 7).map((programDay) => (
            <div className="pb-4 text-[16px]" key={programDay.title}>
              <p className="text-[#2852A2] font-[700]">{programDay.title}</p>{" "}
              <p className="text-gray-400 text-[13px] font-[500]">
                {programDay.content}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 px-2">
          {voyage.program.slice(7).map((programDay) => (
            <div key={programDay.title}>
              <p className="text-[#2852A2] font-[700]">{programDay.title}</p>{" "}
              <p className="text-gray-400 text-[13px] font-[500]">
                {programDay.content}
              </p>
            </div>
          ))}
          <div className="flex flex-col text-[13px] bg-[#2852A2] px-4 pt-1 pb-6">
            {voyage.chambres.map((chambre, index) => (
              <div key={index} className="flex flex-row justify-between">
                <p>{chambre.title}</p>
                <p>
                  {chambre.unitPrice}
                  <sup>DT</sup>
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gray-600 p-4 flex flex-col gap-4 pb-8 pt-0">
            <div>
              <p className="text-[20px] font-[700]">Inclus :</p>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-[16x] font-[700]">VIP</p>
                  <div>
                    {voyage.servicesInclus.vip.map((vip, index) => (
                      <p className="text-[12px]" key={index}>
                        - {vip}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[16px] font-[700] flex flex-col gap-1">
                    Standard
                  </p>
                  <div>
                    {voyage.servicesInclus.standard.map((vip, index) => (
                      <p className="text-[12px]" key={index}>
                        - {vip}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[20px] font-[700]">Non inclus</p>
              <div>
                {voyage.servicesNonInclus.map((service, index) => (
                  <p key={index}> - {service}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
