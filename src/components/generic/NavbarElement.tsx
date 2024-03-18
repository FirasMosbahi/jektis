"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Home } from "@jektis/components/icons";
import Link from "next/link";
import { NavbarElementSize } from "@jektis/components/layout/navbar";

export default function NavbarElement({
  title,
  link,
  size,
  isFirst,
  isLast,
}: {
  link: string;
  title: string | React.ReactElement;
  size: NavbarElementSize;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={
        size === NavbarElementSize.SM
          ? "2xl:min-w-[6%]"
          : size === NavbarElementSize.MD
            ? "2xl:min-w-[9%]"
            : "2xl:min-w-[16%]"
      }
    >
      <button
        type="button"
        className={`px-3 h-12 2xl:w-full bg-opacity-80 bg-whiteBlue border border-b border-gray-200 ${
          pathname === link ? "font-bold bg-[#0051a3]" : ""
        } ${isFirst ? "rounded-l-xl" : ""} ${isLast ? "rounded-r-xl" : ""}`}
      >
        {title}
      </button>
    </Link>
  );
}
