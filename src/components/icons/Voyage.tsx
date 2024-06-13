import * as React from "react";
import type { SVGProps } from "react";
const SvgVoyage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="voyage_svg__Layer_1"
    fill="#fff"
    stroke="#fff"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <g id="voyage_svg__SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".voyage_svg__cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:1.91px}"
          }
        </style>
      </defs>
      <rect
        width={15.27}
        height={17.18}
        x={4.36}
        y={5.32}
        className="voyage_svg__cls-1"
        rx={2.86}
      />
      <path
        d="M8.18 8.18v11.46M15.82 8.18v11.46M12 8.18v11.46M9.14 1.5h5.73v3.82H9.14zM7.23 1.5h9.54"
        className="voyage_svg__cls-1"
      />
    </g>
  </svg>
);
export default SvgVoyage;
