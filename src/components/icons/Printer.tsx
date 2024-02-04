import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="printer_svg__icon"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#0050A5"
      d="M192 234.667h640v64H192zM85.333 533.333h853.334V384c0-46.933-38.4-85.333-85.334-85.333H170.667c-46.934 0-85.334 38.4-85.334 85.333v149.333z"
    />
    <path
      fill="#0050A5"
      d="M170.667 768h682.666c46.934 0 85.334-38.4 85.334-85.333V512H85.333v170.667c0 46.933 38.4 85.333 85.334 85.333z"
    />
    <path
      fill="#fff"
      d="M832 384a21.333 21.333 0 1 0 42.667 0A21.333 21.333 0 1 0 832 384"
    />
    <path
      fill="#0050A5"
      d="M234.667 85.333h554.666v213.334H234.667zM800 661.333H224c-17.067 0-32-14.933-32-32s14.933-32 32-32h576c17.067 0 32 14.934 32 32s-14.933 32-32 32M234.667 661.333h554.666V896H234.667z"
    />
    <path fill="#0050A5" d="M234.667 618.667h554.666v42.666H234.667z" />
    <path
      fill="#fff"
      d="M341.333 704H704v42.667H341.333zm0 85.333h277.334V832H341.333z"
    />
  </svg>
);
export default SvgPrinter;
