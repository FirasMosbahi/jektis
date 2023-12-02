import React from "react";

// export enum Position {
//   start,
//   center,
//   end,
// }
// export enum MediaQuery {
//   sm = ":sm",
//   md = ":md",
//   lg = ":lg",
//   xl = ":xl",
//   xxl = ":2xl",
//   any = "",
// }
export enum Axes {
  x,
  y,
  all,
}
export default function Center({
  children,
  axe,
}: {
  children: React.ReactNode;
  axe: Axes;
}): React.ReactNode {
  switch (axe) {
    case Axes.x:
      return <div className="flex w-full justify-center">{children}</div>;
    case Axes.y:
      return (
        <div className="flex flex-col justify-center h-full">{children}</div>
      );
    case Axes.all:
      return (
        <div className="flex justify-center items-center h-full">
          {children}
        </div>
      );
  }
}
