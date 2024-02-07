"use client";
import React from "react";

export default function VoyageImages({
  height,
}: {
  height: number;
}): React.ReactNode {
  console.log(height);
  const imagesUrl = [
    "https://th.bing.com/th/id/OIP.3p4ovr905Fc-3YbxpPDYTgHaEo?pid=ImgDet&w=474&h=296&rs=1",
    "https://th.bing.com/th/id/OIP.zOm8K5nmsKu5y14HBmStQAHaDV?pid=ImgDet&w=474&h=213&rs=1",
    "https://th.bing.com/th/id/OIP.pNpITte1LmKKboxt3tsqrwHaE7?pid=ImgDet&w=474&h=315&rs=1",
    "https://th.bing.com/th/id/OIP.IInkPrP6pbltJAzwK1c9NQHaEo?pid=ImgDet&w=474&h=296&rs=1",
  ];
  const images: React.ReactNode[] = [];
  let imagesHeight = 0;
  let index = 0;
  while (imagesHeight < height) {
    images.push(
      <img
        key={index}
        src={imagesUrl[index % imagesUrl.length]}
        alt={"city image"}
        className="border-transparent rounded-2xl my-4 h-[200px]"
      />,
    );
    imagesHeight += 450;
    index++;
  }

  return <div className="flex flex-col">{images}</div>;
}
