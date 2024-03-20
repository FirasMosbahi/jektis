import React from "react";
export default function CustomPage({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}): React.ReactNode {
  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="flex flex-col relative h-screen overflow-y-scroll no-scrollbar items-center justify-center">
        <div className="lg:max-w-[1200px] lg:min-w-[1000px] h-full pt-0 lg:mx-52 lg:my-8 xl:mt-8 xl:mb-4 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
