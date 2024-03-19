import React from "react";
import SearchInput from "@jektis/components/layout/search-input";
import LoginButton from "@jektis/components/layout/login-button";
import Infos from "@jektis/components/layout/infos";
import Navbar from "@jektis/components/layout/navbar";
import Image from "next/image";

export default function Header(): React.ReactNode {
  return (
    <>
      <div className="justify-between">
        <div className="flex flex-row flex-wrap items-center lg:px-0 px-4 justify-between">
          <Image
            src="/logo_footer.png"
            alt="jektis logo"
            width={200}
            height={200}
            className="lg:w-[350px] lg:h-[10rem] w-[200px] h-[140px] 3xl:w-[22rem] 3xl:h-[16rem]"
          />
          <div className="flex flex-col xl:items-end items-center">
            <div className="w-full hidden lg:absolute right-0 xl:gap-16 gap-10 max-w-[500px] xl:max-w-[600px] lg:flex lg:flex-row">
              <SearchInput />
              <LoginButton />
            </div>
            <div className="xl:mt-20 mt-12 mb-10">
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
