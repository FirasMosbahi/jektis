import React from "react";
export default function CustomPage({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}): React.ReactNode {
  return (
    <div
      className="h-fit bg-cover bg-center flex flex-col pb-20 pt-20 items-center justify-center"
      style={{ backgroundImage: `url(/OIP.jpg)` }}
    >
      {children}
    </div>
  );
}
