import * as React from "react";
import type { SVGProps } from "react";
const SvgSleep = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    fill="#607b98"
    viewBox="0 0 128 128"
    {...props}
  >
    <circle cx={27.3} cy={68.9} r={7.8} />
    <path d="M41.5 75.8H53v2.4H121.7c0-8.1-3.7-14.7-8.5-15.3L53 57.5v2h-1.4c-.4-.1-1.4 0-1.5 0-6.5 0-11.9 4.8-13 10.9 0 0-.1.8-.1 1 .1 2.4 2 4.4 4.5 4.4" />
    <path d="M14.5 81.2V58.7H4.3V114h10.2V91.4h98V114h10.2V81.2z" />
  </svg>
);
export default SvgSleep;
