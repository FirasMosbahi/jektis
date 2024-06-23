"use client";

import Center, { Axes } from "@jektis/components/generic/center";
import React, { useEffect, useRef, useState } from "react";
import { PromoType } from "@jektis/types/promo";
import useIsInViewport from "@jektis/hooks/useInViewPort";
import { AnimatePresence, motion } from "framer-motion";
import { homePagePromos } from "@jektis/actions/home-page-actions";

export default function Promo({
  promos,
}: {
  promos: PromoType[];
}): React.ReactNode {
  const [current, setCurrent] = useState<number>(0);
  const ref = useRef<any>(null);

  const isInView = useIsInViewport(ref);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isInView) {
        setCurrent((prevState) => (prevState + 1) % promos.length);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isInView]);

  return (
    <div className="border-4 2xl:w-full rounded-2xl flex flex-col">
      <div ref={ref} className="mx-auto max-w-screen-lg w-full">
        <div className="flex w-full lg:h-[440px] flex-row justify-center">
          <AnimatePresence>
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img
                src={promos[current].image}
                alt={`${promos[current].title} image`}
                className="h-full border border-transparent rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-row w-full border-t-white border-t-4">
        {promos.map((promo, index) => (
          <div
            style={{
              borderBottomLeftRadius: index === 0 ? 12 : 0,
              borderBottomRightRadius: index === promos.length - 1 ? 12 : 0,
            }}
            key={index}
            className={`text-center min-w-[10%] max-w-[20%] 2xl:h-16 text-white h-24 ${
              index !== promos.length - 1 ? "border-r-4 border" : ""
            } ${current === index ? "bg-[#0051A3]" : "bg-[#A0BADB]"} ${
              promo.title.length < 12 ? "w-[14%]" : "w-[20%]"
            }`}
          >
            <Center axe={Axes.all}>
              <p className="text-[0.9rem] px-2">{promo.title}</p>
            </Center>
          </div>
        ))}
      </div>
    </div>
  );
}
