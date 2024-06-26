import React from "react";
import { WhatsappWhite, WhitePhone } from "@jektis/components/icons";

export default function Infos(): React.ReactNode {
  return (
    <div className="flex text-start  flex-col text-white text-[8px] text-nowrap lg:text-[12px] 2xl:text-[16px] 3xl:text-[20px] items-start w-full lg:w-fit xl:inline text-right lg:mr-0 mr-4 xl:tracking-wide">
      <div className="flex flex-col justify-start gap-0 text-center">
        <div className="flex flex-col pb-2 gap-3 justify-between">
          <div className="flex flex-row items-center justify-center gap-2">
            <strong className="text-start text-[7px] flex flex-row items-start gap-3 leading-none lg:text-[18px] ">
              <WhitePhone className="size-3.5" />{" "}
              <div className="flex flex-row items-center gap-1.5">
                <p className="font-medium text-[16px] leading-none">+216</p>
                <p>71 70 69 00</p>
              </div>
            </strong>
            <p className="text-start text-[7px] leading-none lg:text-[14px] text-nowrap w-fit">
              <strong>Lun-Ven:</strong> 9h à 15h30
            </p>
            <p className="text-start text-[7px] leading-none lg:text-[14px] text-nowrap w-fit">
              <strong className="w-fit text-[7px] lg:text-[16px]">Sam:</strong>{" "}
              9h à 13h
            </p>
          </div>
          <a
            className="flex flex-row items-center gap-2"
            href="https://wa.me/+21698538070"
            target="_blank"
          >
            <strong className="text-start text-[7px] leading-none lg:text-[18px] flex flex-row gap-3 items-center">
              <WhatsappWhite className="size-3.5" />{" "}
              <div className="flex flex-row items-center gap-1.5">
                <p className="font-medium text-[16px] leading-none">+216</p>
                <p>98 53 80 70</p>
              </div>
            </strong>
            <p className="text-start leading-none text-[7px] lg:text-[14px] text-nowrap w-fit">
              7j/7 De 8h à 22h
            </p>
          </a>
        </div>
        {/*<div className="flex text-[7px] lg:text-[18px] flex-row  items-end gap-1.5 lg:gap-3">*/}
        {/*  <strong className="w-fit text-start">Agence Ariana:</strong>{" "}*/}
        {/*  <p className="text-[17px] font-semibold">*/}
        {/*    98 Av. H.Bourguiba 2<sup>éme</sup> étage, Ariana*/}
        {/*  </p>*/}
        {/*</div>*/}
        {/*<div className="flex text-[7px] lg:text-[18px] flex-row items-end gap-1.5 lg:gap-3">*/}
        {/*  <strong className="md:w-fit text-start">Agence Menzah 9 :</strong>{" "}*/}
        {/*  <p className="text-[17px] font-semibold">*/}
        {/*    22 Av. Abdelaziz Thaalbi, Menzah 9B*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
