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
        <div className="flex flex-col lg:flex-col xl:flex-row md:flex-row justify-between">
          <img
            src="/logo_jektis.png"
            alt="jektis logo"
            className="w-[18rem] h-[12rem]"
          />
          <div className="flex flex-col xl:items-end items-center">
            <div className="hidden w-full xl:flex xl:flex-row pl-40 ">
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
