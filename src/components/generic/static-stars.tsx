import React from "react";

import { Star } from "@jektis/components/icons";

export default function StaticStars({
  number,
}: {
  number: number;
}): React.ReactNode {
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < number; i++) {
    stars.push(<Star />);
  }
  return (
    <div className="flex flex-row items-center justify-center">{stars}</div>
  );
}
