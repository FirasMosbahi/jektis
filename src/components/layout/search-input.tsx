import React from "react";
import { SearchIcon } from "@jektis/components/icons";

export default function SearchInput(): React.ReactNode {
  return (
    <>
      <div className="flex w-full 2xl:max-w-[370px] xxl:max-w-[320px] xl:max-w-[260px] 3xl:h-12 mt-1">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block pr-8 border border-transparent rounded-3xl 2xl:h-12 text-right p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-s-gray-50 border-s-2  border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 2xl:p-4 text-sm font-medium h-full text-white"
          >
            <div className="mb-3 mr-2">
              <SearchIcon />
              <span className="sr-only">Search</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
