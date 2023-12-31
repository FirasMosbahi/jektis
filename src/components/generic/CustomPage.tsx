import React from "react";
export default function CustomPage({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}): React.ReactNode {
  return (
    <div
      className="h-fit bg-cover bg-center flex flex-col lg:px-36 py-8 items-center justify-center"
      style={{ backgroundImage: "url(/background-sud.jpg)" }}
    >
      {children}
    </div>
  );
}
