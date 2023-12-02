import React from "react";

export default function MiniCityCard(): React.ReactNode {
  return (
    <>
      <div
        className="relative w-full bg-cover bg-center h-56 mt-4 flex flex-col justify-end border-transparent rounded-xl"
        style={{
          backgroundImage: `url(https://media.gettyimages.com/photos/pura-ulun-danu-bratan-temple-in-bali-picture-id675172642)`,
        }}
      >
        <div className="bg-[#ececec] bg-opacity-50 flex flex-row justify-center pt-4 pb-2">
          <strong className="text-xl text-[#14477f]">Europe Centrale</strong>
        </div>
        <div className="absolute top-20 left-20 right-0 bottom-0 flex items-center justify-center z-10">
          <button className="flex h-9 pt-1 flex-col text-white mt-8 px-4 border-transparent rounded-2xl items-start bg-gradient-to-r from-[#004fa6] to-[#02c9b2]">
            <div style={{ fontSize: 10 }} className="leading-none">
              A partir de
            </div>
            <div>
              <strong style={{ fontSize: 15 }} className="leading-none">
                4299
              </strong>
              <sup style={{ fontSize: 10 }} className="leading-none">
                TND
              </sup>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
