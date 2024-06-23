"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Pagination({
  pagesNumber,
}: {
  pagesNumber: number;
}): React.ReactElement {
  const path = usePathname();
  const params = useSearchParams();
  return (
    <div className="flex w-full justify-between px-12 lg:mb-4">
      {params.get("page") && Number.parseInt(params.get("page") ?? "") > 1 ? (
        <Link
          href={`${path}?page=${Number.parseInt(params.get("page") ?? "") - 1}${params.has("filters") ? `&filters=${params.get("filters")}` : ""}`}
          className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </Link>
      ) : (
        <div></div>
      )}
      {Number.parseInt(params.get("page") ?? "0") < pagesNumber ? (
        <Link
          href={`${path}?page=${
            Number.parseInt(params.get("page") ?? "1") + 1
          }${params.has("filters") ? `&filters=${params.get("filters")}` : ""}`}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}
