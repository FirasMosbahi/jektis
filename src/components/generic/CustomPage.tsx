import React from "react";
export default function CustomPage({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}): React.ReactNode {
  return (
    <div
      className="h-fit bg-cover bg-center flex flex-col lg:px-52 lg:py-8 xl:pt-8 xl:pb-4 items-center justify-center"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="xl:max-w-[70rem]">{children}</div>
    </div>
  );
}
