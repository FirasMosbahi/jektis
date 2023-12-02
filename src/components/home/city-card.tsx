import React from "react";
import StaticStars from "@jektis/components/generic/static-stars";

export default function CityCard({
  isHorizontal,
}: {
  isHorizontal: boolean;
}): React.ReactNode {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div
          className={`relative flex rounded-xl w-full ${
            isHorizontal ? "flex-row bg-[#ececec] bg-clip-border" : "flex-col"
          }  text-gray-700 shadow-md`}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            className={`object-cover ${
              isHorizontal
                ? "w-80 h-80 rounded-l-xl"
                : "w-96 h-48 rounded-t-xl mb-2"
            } `}
          />
          <div className="p-6 bg-[#ececec] bg-clip-border">
            <strong className="block leading-6 font-sans text-2xl font-semibold uppercase tracking-normal text-black antialiased">
              Bali
            </strong>
            <p className="mb-2 flex items-center gap-3 flex-row font-sans tracking-normal text-blue-gray-900 antialiased">
              Indonésie
            </p>
            <div
              className={`flex flex-col  ${
                isHorizontal ? "mb-4" : "text-sm mb-2"
              }`}
            >
              <strong>10 jours / 9 nuits</strong>
              <strong>Du 05 au 14 septembre 2023</strong>
            </div>
            <div
              className={
                isHorizontal ? "" : "flex flex-row justify-center gap-12"
              }
            >
              <p className="flex flex-row gap-2 items-center">
                Note : <StaticStars number={5} />
              </p>
              <div className="flex flex-row justify-start">
                <button className="flex flex-row text-white mt-8 px-4 border rounded-2xl items-center bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
                  <div>
                    <p className="text-xs">A partir de</p>
                    <strong className="text-3xl">4299</strong>
                  </div>
                  <strong>TND</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
