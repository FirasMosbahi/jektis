import React from "react";
export default function CustomPage({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}): React.ReactNode {
  return (
    <div
      className="h-fit bg-cover bg-center flex flex-col md:pl-12 md:px-0 px-4 py-8 items-center justify-center"
      style={{ backgroundImage: "url(/background-sud.jpg)" }}
    >
      {children}
    </div>
  );
}
