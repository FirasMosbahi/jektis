import React from "react";

export default function HotelImages(): React.ReactNode {
  return (
    <>
      <div className="flex xl:flex-row flex-col gap-4 lg:mx-0 mx-8">
        <img className="rounded-xl" src="/hotel/pic-hotel-1.jpg" alt="pic 1" />
        <div className="flex flex-col gap-4 xl:w-1/2">
          <img
            className="rounded-xl"
            src="/hotel/pic-hotel-2.jpg"
            alt="pic 1"
          />
          <div className="flex flex-col xl:flex-row gap-4">
            <img
              src="/hotel/pic-hotel-3.jpg"
              className="rounded-xl xl:w-1/2 h-52 xl:h-fit"
              alt="pic 1"
            />
            <img
              src="/hotel/pic-hotel-4.jpg"
              className="rounded-xl xl:w-1/2 h-52 xl:h-fit"
              alt="pic 1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
