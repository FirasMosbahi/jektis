"use client";

import React, { useEffect, useState } from "react";
import MiniCityCard from "@jektis/components/home/mini-city-card";

export default function VoyageCardWithImg({
  title,
  imageUrl,
}: {
  title?: string;
  imageUrl: string;
}): React.ReactNode {
  return (
    <div className="flex w-full flex-col mt-16 sm:mt-0 mr-12 lg:mr-0">
      {title && (
        <div className="flex flex-row mb-4 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
          <strong className="ml-4">{title}</strong>
          <p className="mr-4">Voir Tous</p>
        </div>
      )}
      <img
        alt="img"
        src={imageUrl}
        className="md:h-80 h-60 w-full md:w-full xl:h-80 border-transparent rounded-xl"
      />
      <div className="flex flex-col justify-center sm:grid sm:grid-cols-3 gap-4">
        <MiniCityCard />
        <MiniCityCard />
        <div className="md:block hidden">
          <MiniCityCard />
        </div>
      </div>
    </div>
  );
}
