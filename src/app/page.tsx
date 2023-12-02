import React from "react";
import CustomPage from "@jektis/components/generic/CustomPage";
import HomeFilter from "@jektis/components/home/home-filter";
import VoyageCard from "@jektis/components/home/voyage-card";
import CityCard from "@jektis/components/home/city-card";
import VoyageCardWithImg from "@jektis/components/home/voyage-card-with-image";
import Promo from "@jektis/components/home/promo";

export default function Index(): React.ReactNode {
  return (
    <CustomPage>
      <div className="flex flex-row items-start w-full mb-12 gap-12">
        <HomeFilter />
        <div className="flex-1">
          <Promo />
        </div>
      </div>
      <div className="bg-white px-4">
        <div className="flex flex-col lg:flex-row gap-4 mt-16">
          <div className="flex-1">
            <VoyageCard title="Voyages Organisées" />
          </div>
          <div className="flex-1">
            <VoyageCardWithImg
              title="Circuits Sud"
              imageUrl="https://th.bing.com/th/id/OIP.R3osXfaOo7ZExMdxL5Y09QHaE8?rs=1&pid=ImgDetMain"
            />
          </div>
        </div>
        <div className="flex text-xs sm:text-md md:text-xl flex-row mb-4 mt-8 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
          <strong className="ml-1 xs:ml-4">Voyages de Noces</strong>
          <p className="ml-1 xs:mr-4">Voir Tous</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <CityCard isHorizontal={false} />
          <CityCard isHorizontal={false} />
          <CityCard isHorizontal={false} />
        </div>
        <div className="flex flex-row mb-4 mt-8 border rounded-xl justify-between bg-gradient-to-r from-[#004fa6] to-[#02c9b2] p-1">
          <strong className="ml-4">Hotels en Tunisie :</strong>
          <p className="mr-4">Voir Tous</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-24">
          <VoyageCardWithImg imageUrl={"/hotel-categories/hotel-sur-mer.jpg"} />
          <VoyageCardWithImg
            imageUrl={"/hotel-categories/hotel-recommandé.jpg"}
          />
          <VoyageCardWithImg
            imageUrl={"/hotel-categories/hotel-all-inclusive.jpg"}
          />
          <VoyageCardWithImg
            imageUrl={"/hotel-categories/hotel-toboggan.jpg"}
          />
        </div>
      </div>
    </CustomPage>
  );
}
