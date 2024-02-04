import React from "react";

export default function ProgramDayDescription({
  title,
  content,
}: {
  title: string;
  content: string;
}): React.ReactNode {
  return (
    <div className="flex flex-col items-start gap-2 mt-4">
      <strong className="text-[#0050A5] text-xl">{title}</strong>
      <p className="text-black">{content}</p>
    </div>
  );
}
