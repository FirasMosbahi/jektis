import React from "react";
import SearchInput from "@jektis/components/layout/search-input";
import LoginButton from "@jektis/components/layout/login-button";
import Infos from "@jektis/components/layout/infos";
import Navbar from "@jektis/components/layout/navbar";
import Center, { Axes } from "@jektis/components/generic/center";

export default function Header(): React.ReactNode {
  return (
    <>
      <div className="justify-between w-full block">
        <div className="flex flex-col md:flex-row justify-between lg:pr-0">
          <img src="/logo_jektis.png" alt="jektis logo" />
          <div className="flex flex-col items-center">
            <div className="hidden w-full lg:flex lg:flex-row pl-40 ">
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
