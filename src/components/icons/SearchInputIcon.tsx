import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchInputIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    className="search-input-icon_svg__w-4 search-input-icon_svg__h-4 search-input-icon_svg__text-gray-500 search-input-icon_svg__dark:text-gray-400"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
    />
  </svg>
);
export default SvgSearchInputIcon;
