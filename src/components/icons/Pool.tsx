import * as React from "react";
import type { SVGProps } from "react";
const SvgPool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#144e8b"
    strokeWidth={3}
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    {...props}
  >
    <g strokeLinecap="square">
      <path d="m39 34-7.95-10.48-2-2.59-3.88-5.22L22 18.15l-7.34 5.75a2.28 2.28 0 0 0 0 3.11c1.14 1.19 2.46 1.33 3.17.78l6.33-5.37 3.21 3.95-8.9 6.94" />
      <circle cx={42.38} cy={21.91} r={6.1} />
      <path d="M4.79 41.15c3.89 0 3.89 4 7.77 4s3.89-4 7.77-4 3.89 4 7.77 4 3.89-4 7.78-4 3.89 4 7.77 4 3.89-4 7.78-4 3.89 4 7.78 4M4.79 33.06c3.89 0 3.89 4 7.77 4s3.89-4 7.77-4 3.89 4 7.77 4 3.89-4 7.78-4 3.89 4 7.77 4 3.89-4 7.78-4 3.89 4 7.78 4" />
    </g>
  </svg>
);
export default SvgPool;
