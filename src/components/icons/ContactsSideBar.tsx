import * as React from "react";
import type { SVGProps } from "react";
const SvgContactsSideBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="#cfcfcf">
      <path
        d="M15.436 14.778c-.595-.25-1.336-.563-1.336-.803v-1.57A3.55 3.55 0 0 0 15.5 9.6V7.5C15.5 5.57 13.93 4 12 4S8.5 5.57 8.5 7.5v2.1a3.55 3.55 0 0 0 1.4 2.806v1.569c0 .226-.734.54-1.323.792C7.152 15.376 5 16.296 5 18.7v.35h14v-.35c0-2.42-2.144-3.324-3.564-3.922"
        opacity={0.25}
      />
      <path d="M8.5 9.5v-2a3.5 3.5 0 1 1 7 0v2c0 1.19-.593 2.24-1.5 2.873v.95a1 1 0 0 0 .629.928l1.586.635A4.43 4.43 0 0 1 19 19H5a4.43 4.43 0 0 1 2.785-4.114l1.586-.635a1 1 0 0 0 .629-.928v-.95A3.5 3.5 0 0 1 8.5 9.5" />
    </g>
  </svg>
);
export default SvgContactsSideBar;
