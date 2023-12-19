import * as React from "react";
import type { SVGProps } from "react";
const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#0053a6"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 3v1.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C10.76 6 11.04 6 11.6 6h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 5.24 14 4.96 14 4.4V3M9.2 21h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C18 19.48 18 18.92 18 17.8V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.48 3 15.92 3 14.8 3H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 4.52 6 5.08 6 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C7.52 21 8.08 21 9.2 21"
    />
  </svg>
);
export default SvgMobile;
