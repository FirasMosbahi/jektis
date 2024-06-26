import React from "react";
import SearchInput from "@jektis/components/layout/search-input";
import LoginButton from "@jektis/components/layout/login-button";
import Infos from "@jektis/components/layout/infos";
import Navbar from "@jektis/components/layout/navbar";
import Image from "next/image";
import HamburgerNavbar from "@jektis/components/mobile-layout/HamburgerNavbar";
import { Telephone, WhatsappContact } from "@jektis/components/icons";

export default function Header(): React.ReactNode {
  return (
    <>
      <div className="justify-between">
        <div className="flex flex-row items-center pt-4 lg:pt-0 py-4 lg:py-0 px-0 justify-between">
          <div className="flex flex-row lg:justify-center justify-between w-full lg:w-fit pr-8 pl-6 lg:pl-0 lg:pr-0 lg:px-0 lg:ml-4 gap-4">
            <Image
              src="/logo_footer.png"
              alt="jektis logo"
              width={200}
              height={200}
              className="lg:w-[360px] lg:h-[117px] w-[150px] h-[100px] "
            />
            <div className="lg:hidden">
              <a href="https://wa.me/+21698538070">
                <WhatsappContact className="size-12 mr-12" />
              </a>
              <a href="tel:+21671706900">
                <Telephone className="size-12 ml-12" />
              </a>
            </div>
            <HamburgerNavbar />
          </div>
          <div className="lg:flex lg:flex-col hidden xl:items-end items-center">
            <div className="w-full hidden  xl:gap-12 gap-10 max-w-[400px] xl:max-w-[450px] lg:flex lg:flex-row">
              <SearchInput />
              <LoginButton />
            </div>
            <div className="px-4 xl:px-0 lg:mb-0 lg:mt-4">
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
