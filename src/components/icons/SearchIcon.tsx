import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    className="search-icon_svg__w-4 search-icon_svg__h-4"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      stroke="#265793"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
    />
  </svg>
);
export default SvgSearchIcon;
