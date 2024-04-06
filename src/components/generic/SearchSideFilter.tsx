"use client";

import { FilterSection } from "@jektis/types/filter-type";
import {
  Billet,
  Close,
  ContactsSideBar,
  EspaceEntreprise,
  Filter,
  Group,
  HotelSideBarIcon,
  Noces,
  SearchInputIcon,
  Usa,
  VisaSideBar,
} from "@jektis/components/icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavbarItem from "@jektis/components/mobile-layout/NavbarItem";
import { useAnimation, motion } from "framer-motion";

export default function SearchSideFilter({
  filters,
  nameFilterPlaceholder,
}: {
  filters: FilterSection[];
  nameFilterPlaceholder: string;
}) {
  const sideAnimate = useAnimation();
  const iconAnimate = useAnimation();

  const [show, setShow] = useState<boolean>(false);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      onAppear();
    }
  }, [show]);

  async function onAppear() {
    sideAnimate.set({ x: 100, opacity: 0 });
    iconAnimate.start({ opacity: 0 }, { duration: 1 });
    await sideAnimate.start({ x: 0, opacity: 1 }, { duration: 1 });
  }
  async function onDisappear() {
    sideAnimate.start({ x: 80, opacity: 0 }, { duration: 1 });
    await iconAnimate.start({ opacity: 1 }, { duration: 1 });
    setShow(false);
  }
  return (
    <div>
      <div className="bg-white lg:block hidden px-4 py-8 h-full max-w-[400px]">
        <label
          htmlFor="default-search"
          className="text-[20px] font-bold text-gray-900"
        >
          Filter par :
        </label>
        <div className="relative mt-4">
          <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
            <SearchInputIcon />
          </div>
          <input
            type="search"
            id="default-search"
            className="px-2 py-1 w-full text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder={nameFilterPlaceholder}
          />
        </div>
        {filters.map((f, index) => (
          <div className="pt-8" key={index}>
            <p className="text-[#2265ae] text-[18px] font-semibold">{f.name}</p>
            <div className="mt-2">
              {f.values.map((v, index) => (
                <div className="flex items-center mb-1" key={index}>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value={v.value.toString()}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-[14px] font-medium text-gray-600"
                  >
                    {v.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* mobile filter */}
      <div className="lg:hidden flex flex-row items-start justify-between">
        <div className="relative w-[90%]">
          <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
            <SearchInputIcon />
          </div>
          <input
            type="search"
            id="default-search"
            className="px-2  border-solid rounded-2xl py-1 w-full text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder={nameFilterPlaceholder}
          />
        </div>
        <motion.button
          animate={iconAnimate}
          onClick={() => setShow(true)}
          className="bg-white border border-transparent rounded-xl shadow-2xl p-2"
        >
          <Filter className="size-4" />
        </motion.button>
        {show && (
          <motion.aside
            animate={sideAnimate}
            id="sidebar-multi-level-sidebar"
            className="absolute top-40 right-0 z-50 w-80"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 border border-transparent rounded-l-3xl">
              <div className="flex flex-row items-center justify-between px-2 border-b pb-2 mb-2">
                <Image
                  src="/logo_footer.png"
                  alt="logo"
                  width={150}
                  height={150}
                />
                <Close className="size-6" onClick={onDisappear} />
              </div>
              {filters.map((f, index) => (
                <div className="pt-4" key={index}>
                  <p className="text-[#2265ae] text-[18px] font-semibold">
                    {f.name}
                  </p>
                  <div className="grid grid-cols-2 gap-x-2.5 mt-2">
                    {f.values.map((v, index) => (
                      <div className="flex items-center mb-1" key={index}>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value={v.value.toString()}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 text-[14px] font-medium text-gray-600"
                        >
                          {v.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        )}
      </div>
    </div>
  );
}
