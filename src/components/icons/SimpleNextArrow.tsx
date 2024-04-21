import * as React from "react";
import type { SVGProps } from "react";
const SvgSimpleNextArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12h12m0 0-5-5m5 5-5 5"
    />
  </svg>
);
export default SvgSimpleNextArrow;
