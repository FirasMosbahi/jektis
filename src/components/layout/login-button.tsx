import React from "react";
import { UserIcon } from "@jektis/components/icons";

export default function LoginButton(): React.ReactNode {
  return (
    <button
      type="button"
      style={{
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      }}
      className="text-white w-60 ml-24 bg-[#8eb633] focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 pr-0 text-center inline-flex items-center me-2 mb-2"
    >
      <UserIcon className="bg-[#8eb633] h-full" width={30} height={30} />
      <p className="text-xl ml-2">Log In</p>
    </button>
  );
}
