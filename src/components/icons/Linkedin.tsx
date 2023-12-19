import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    {...props}
  >
    <rect width={28} height={28} x={2} y={2} fill="#1275B1" rx={14} />
    <path
      fill="#fff"
      d="M12.619 9.692c0 .935-.81 1.692-1.81 1.692C9.81 11.384 9 10.627 9 9.692 9 8.758 9.81 8 10.81 8c.999 0 1.809.758 1.809 1.692M9.247 12.628h3.093V22H9.247v-9.372M17.32 12.628h-3.093V22h3.093v-4.795c0-1.107.378-2.22 1.886-2.22 1.705 0 1.695 1.45 1.687 2.572-.01 1.467.014 2.965.014 4.443H24v-4.946c-.026-3.159-.85-4.614-3.557-4.614-1.608 0-2.604.73-3.123 1.39v-1.202"
    />
  </svg>
);
export default SvgLinkedin;
