import React from "react";

export default function VoyageOffer(): React.ReactNode {
  return (
    <div className="relative mb-8 ml-6">
      <div className="text-black flex flex-row gap-32 lg:gap-4 justify-center items-end mb-8">
        <strong className="text-3xl lg:text-6xl">DUBAI</strong>
        <p className="lg:text-2xl">Emirates arabes unis - 6 Nuits / 7 Jours</p>
      </div>

      <img
        alt="dubai"
        src="https://media.gettyimages.com/id/467829216/photo/dubai-marina.jpg?b=1&s=170667a&w=0&k=20&c=7fZv26b4z8x7lE_7YKUerhjrtLLN1u_AQMaFNykFWPU="
        className="w-screen h-96 border-transparent rounded-xl"
      />
      <div
        style={{ borderRadius: 15 }}
        className="bg-gradient-to-r hidden md:block from-[#004fa6] to-[#02c9b2] w-fit absolute sm:top-16 md:top-16 lg:top-16 xl:top-12 right-12"
      >
        <div
          id="price"
          className="flex flex-col items-start border-2 rounded-xl px-4 py-1  text-white w-fit bg-gradient-to-r from-[#004fa6] to-[#02c9b2]"
        >
          <p className="text-xs">A partir de</p>
          <div className="flex flex-row items-center">
            <strong className="text-4xl">3290</strong>
            <div className="flex flex-col">
              <strong className="text-2xl">TND</strong>
              <p className="text-xs">Par personne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
