import React from "react";
import { UserIcon } from "@jektis/components/icons";

export default function LoginButton(): React.ReactNode {
  return (
    <button
      type="button"
      className="text-white w-60 border border-transparent rounded-r-none rounded-l-3xl bg-[#8eb633] focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 pr-0 text-center inline-flex items-center mb-2"
    >
      <UserIcon className="bg-[#8eb633] h-full" width={30} height={30} />
      <p className="text-xl ml-2">Log In</p>
    </button>
  );
}
