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
          ? "lg:min-w-[6%]"
          : size === NavbarElementSize.MD
            ? "lg:min-w-[9%]"
            : "lg:min-w-[16%]"
      }
    >
      <button
        type="button"
        className={`px-3 h-12 lg:w-full bg-[#254EA2] border border-b border-gray-200 ${
          pathname === link ? "font-bold bg-[#254EA2]" : ""
        } ${isFirst ? "rounded-l-xl" : ""} ${isLast ? "rounded-r-xl" : ""}`}
      >
        {title}
      </button>
    </Link>
  );
}
