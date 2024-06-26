"use client";
import React from "react";
import Center, { Axes } from "@jektis/components/generic/center";
import Panorama from "@jektis/components/hotel-description/panorama";

export default function HotelImages({
  images,
}: {
  images: string[];
}): React.ReactNode {
  const len = images.length;
  const [showGallery, setShowGallery] = React.useState<boolean>(false);
  return showGallery ? (
    <div className="h-[60%]">
      <Panorama images={images} />
    </div>
  ) : len > 0 ? (
    <div>
      <div className="lg:hidden h-[60%]">
        <Panorama images={images} />
      </div>
      <div className="hidden lg:flex lg:flex-row flex-col gap-4 lg:mx-0 mx-8">
        <img
          className={`rounded-xl h-[28em] ${len > 1 ? "lg:w-1/2" : ""}`}
          src={images[0]}
          alt="pic 1"
        />
        {len > 1 && (
          <div className="flex flex-col gap-8 lg:w-1/2">
            <img
              className={`rounded-xl ${len > 3 ? "h-[15rem]" : "h-[28rem]"}`}
              src={images[1]}
              alt="pic 1"
            />
            {len > 3 && (
              <div className="flex flex-col gap-4 lg:flex-row">
                <img
                  src={images[2]}
                  className={`rounded-xl h-[11rem] lg:w-1/2`}
                  alt="pic 1"
                />
                <div
                  className="rounded-xl opacity-70 h-[11rem] lg:w-1/2"
                  onClick={() => setShowGallery(true)}
                  style={{
                    backgroundImage: `url(${images[3]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="text-5xl opacity-100 w-full h-full">
                    <Center axe={Axes.all}>
                      <strong className="text-center">+{len - 3} photos</strong>
                    </Center>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
}
