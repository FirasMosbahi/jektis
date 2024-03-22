import React from "react";
import SearchInput from "@jektis/components/layout/search-input";
import LoginButton from "@jektis/components/layout/login-button";
import Infos from "@jektis/components/layout/infos";
import Navbar from "@jektis/components/layout/navbar";
import Image from "next/image";
import HamburgerNavbar from "@jektis/components/mobile-components/HamburgerNavbar";

export default function Header(): React.ReactNode {
  return (
    <>
      <div className="justify-between">
        <div className="flex flex-row items-center pt-4 lg:pt-0 px-0 justify-between">
          <div className="flex flex-row justify-center ml-4 gap-4">
            <HamburgerNavbar />
            <Image
              src="/logo_footer.png"
              alt="jektis logo"
              width={200}
              height={200}
              className="lg:w-[250px] lg:h-[100px] w-[100px] h-[70px] "
            />
          </div>
          <div className="flex flex-col xl:items-end items-center">
            <div className="w-full hidden  xl:gap-12 gap-10 max-w-[400px] xl:max-w-[450px] lg:flex lg:flex-row">
              <SearchInput />
              <LoginButton />
            </div>
            <div className="px-4 xl:px-0 lg:mb-10 lg:mt-4">
              <Infos />
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <Navbar />
        </div>
      </div>
    </>
  );
}
