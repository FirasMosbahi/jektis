"use client";

import Center, { Axes } from "@jektis/components/generic/center";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Promo } from "@jektis/types/promo";
import getPromos from "@jektis/services/promos";
import useIsInViewport from "@jektis/hooks/useInViewPort";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Promo(): React.ReactNode {
  const [current, setCurrent] = useState<number>(0);
  const ref = useRef<any>(null);

  const isInView = useIsInViewport(ref);

  // const navigate = useCallback((feature: number) => {
  //   setCurrent(feature);
  //   ref?.current?.children[feature]?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //     inline: "center",
  //   });
  // }, []);

  // const periodicScroll = useCallback(() => {
  //   if (isInView) {
  //     setCurrent((prevState) => (prevState + 1) % promos.length);
  //   }
  // }, [current, isInView]);
  useEffect(() => {
    console.log("is in view", isInView);
    const intervalId = setInterval(() => {
      if (isInView) {
        console.log("modify state");
        setCurrent((prevState) => (prevState + 1) % promos.length);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isInView]);

  const promos: Promo[] = getPromos();
  return (
    <div className="border-4 h-full rounded-2xl flex flex-col">
      <div ref={ref} className="mx-auto max-w-screen-lg w-full">
        <div className="flex w-full flex-row justify-center">
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
                className="h-[26rem] w-[85rem]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="md:flex flex-row w-full hidden border-t-white border-t-4">
        {promos.map((promo, index) => (
          <div
            key={index}
            className="border-r-4 text-center px-1  text-[1.5rem] h-24 border-r-white"
          >
            <Center axe={Axes.all}>
              <strong>{promo.title}</strong>
            </Center>
          </div>
        ))}
        {/*<div className="border-r-4 md:block hidden border-r-white">*/}
        {/*  <Center axe={Axes.all}>*/}
        {/*    <strong>DUBAI</strong>*/}
        {/*  </Center>*/}
        {/*</div>*/}
        {/*<div className="border-r-4 border-r-white">*/}
        {/*  <Center axe={Axes.all}>*/}
        {/*    <strong>PHILIPPINES</strong>*/}
        {/*  </Center>*/}
        {/*</div>*/}
        {/*<div className="border-r-4 border-r-white text-center">*/}
        {/*  <Center axe={Axes.all}>*/}
        {/*    <strong>*/}
        {/*      HOTELS <br /> EN TUNISIE*/}
        {/*    </strong>*/}
        {/*  </Center>*/}
        {/*</div>*/}
        {/*<div className="border-r-4 border-r-white text-center">*/}
        {/*  <Center axe={Axes.all}>*/}
        {/*    <strong>*/}
        {/*      {" "}*/}
        {/*      CIRCUIT <br /> SUD*/}
        {/*    </strong>*/}
        {/*  </Center>*/}
        {/*</div>*/}
        {/*<div className="md:block hidden">*/}
        {/*  <Center axe={Axes.all}>*/}
        {/*    <strong>VISA</strong>*/}
        {/*  </Center>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
