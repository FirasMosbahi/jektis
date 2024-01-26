import React from "react";
export default function CustomPage({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}): React.ReactNode {
  return (
    <div
      className="h-fit bg-cover bg-center flex flex-col lg:px-52 py-8 items-center justify-center"
      style={{ backgroundImage: "url(/background-sud.jpg)" }}
    >
      <div className="xl:max-w-[70rem]">{children}</div>
    </div>
  );
}
