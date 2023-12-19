import * as React from "react";
import type { SVGProps } from "react";
const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#0053a6"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <g strokeLinecap="round" strokeWidth={2}>
      <path strokeLinejoin="round" d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7" />
      <rect width={18} height={14} x={3} y={5} rx={2} />
    </g>
  </svg>
);
export default SvgEmail;
