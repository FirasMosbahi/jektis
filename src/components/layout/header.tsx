import React from "react";
import SearchInput from "@jektis/components/layout/search-input";
import LoginButton from "@jektis/components/layout/login-button";
import Infos from "@jektis/components/layout/infos";
import Navbar from "@jektis/components/layout/navbar";
import Center, { Axes } from "@jektis/components/generic/center";

export default function Header(): React.ReactNode {
  return (
    <>
      <div className="justify-between w-full">
        <div className="flex flex-row flex-wrap items-center lg:px-0 px-12 justify-between">
          <img
            src="/logo_jektis.png"
            alt="jektis logo"
            className="w-[18rem] h-[12rem] 3xl:w-[25rem] 3xl:h-[18rem]"
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
