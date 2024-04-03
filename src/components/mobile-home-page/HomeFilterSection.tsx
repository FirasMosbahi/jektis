import Image from "next/image";
import React from "react";
import { HomeFilterFormsEnum } from "@jektis/enums/home.filter.enum";

export default function HomeFilterSection({
  image,
  alt,
  title,
  onClick,
  filter,
  isSelected,
}: {
  image: string;
  alt: string;
  title: string;
  onClick: (filter: HomeFilterFormsEnum) => void;
  isSelected: boolean;
  filter: HomeFilterFormsEnum;
}) {
  return (
    <button
      className="text-white bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full px-4 py-2 text-center inline-flex items-center"
      type="button"
      onClick={() => onClick(filter)}
    >
      <div className="flex w-full text-[#646868] flex-row gap-4 items-center h-full border-transparent rounded-l-none rounded-r-2xl">
        <Image src={image} width={20} height={20} alt={alt} />
        {title}
      </div>
      {isSelected && (
        <svg
          className="w-4 h-4 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="#646868"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      )}
    </button>
  );
}
