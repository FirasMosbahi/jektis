import React from "react";
import SearchInput from "@jektis/components/layout/search-input";
import LoginButton from "@jektis/components/layout/login-button";
import Infos from "@jektis/components/layout/infos";
import Navbar from "@jektis/components/layout/navbar";
import Image from "next/image";

export default function Header(): React.ReactNode {
  return (
    <>
      <div className="justify-between w-full">
        <div className="flex flex-row flex-wrap items-center lg:px-0 px-4 justify-between">
          <Image
            src="/logo_footer.png"
            alt="jektis logo"
            width={200}
            height={200}
            className="lg:w-[16rem] lg:h-[10rem] w-[200px] h-[140px] 3xl:w-[22rem] 3xl:h-[16rem]"
          />
          <div className="flex flex-col xl:items-end items-center">
            <div className="hidden w-full xl:flex xl:flex-row xl:justify-end">
              <SearchInput />
              <LoginButton />
            </div>
            <Infos />
          </div>
        </div>
        <div className="lg:block hidden">
          <Navbar />
        </div>
      </div>
    </>
  );
}
