import React from "react";

export default function InputWithIcon({
  input,
  icon,
}: {
  input: React.ReactNode;
  icon: React.ReactNode;
}): React.ReactNode {
  return (
    <>
      <div className="relative">
        <div className="ml-2 mr-4 mb-2 absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {icon}
        </div>
        <div>{input}</div>
      </div>
    </>
  );
}
