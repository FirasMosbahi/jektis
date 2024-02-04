import * as React from "react";
import type { SVGProps } from "react";
const SvgVoirPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="voir-plus_svg__icon voir-plus_svg__flat-color"
    data-name="Flat Color"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="m18.6 11.2-12-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .55.89 1 1 0 0 0 1-.09l12-9a1 1 0 0 0 0-1.6Z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
);
export default SvgVoirPlus;
