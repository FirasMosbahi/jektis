import React from "react";
import SearchInput from "@jektis/components/layout/search-input";
import LoginButton from "@jektis/components/layout/login-button";
import Infos from "@jektis/components/layout/infos";
import Navbar from "@jektis/components/layout/navbar";
export default function Header(): React.ReactNode {
  return (
    <>
      <div className="justify-between w-full block">
        <div className="flex flex-col xl:flex-row justify-between">
          <img src="/logo_jektis.png" alt="jektis logo" />
          <div className="flex flex-col">
            <div className="hidden w-full xl:flex xl:flex-row pl-40 ">
              <SearchInput />
              <LoginButton />
            </div>
            <Infos />
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
}
