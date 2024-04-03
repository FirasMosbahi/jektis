import React, { useMemo } from "react";
import HomeFilterSection from "@jektis/components/mobile-home-page/HomeFilterSection";
import { HomeFilterFormsEnum } from "@jektis/enums/home.filter.enum";

const filtersData = [
  {
    image: "/home-page/hotel.png",
    alt: "hotel",
    title: "Hotels en Tunisie",
    filter: HomeFilterFormsEnum.HOTELS,
  },
  {
    image: "/home-page/vol.png",
    alt: "vol",
    title: "Vols",
    filter: HomeFilterFormsEnum.VOLS,
  },
  {
    image: "/home-page/voyage.png",
    alt: "voyage",
    title: "Voyages",
    filter: HomeFilterFormsEnum.VOYAGES,
  },
];

export default function HomeFilterSelectForm({
  selected,
  onSelect,
}: {
  selected: HomeFilterFormsEnum;
  onSelect: (filter: HomeFilterFormsEnum) => void;
}) {
  const [show, setShow] = React.useState(false);
  const choosenForm = useMemo(
    () => filtersData.filter((f) => f.filter === selected)[0],
    [selected, filtersData],
  );
  return (
    <form>
      <HomeFilterSection
        {...choosenForm}
        onClick={(filter) => {
          onSelect(filter);
          setShow(true);
        }}
        isSelected={true}
      />
      {show && (
        <div
          id="dropdownHover"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            {filtersData
              .filter((f) => f.filter !== selected)
              .map((f, index) => (
                <li key={index}>
                  <HomeFilterSection
                    {...f}
                    onClick={(filter) => {
                      onSelect(filter);
                      setShow(false);
                    }}
                    isSelected={false}
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
    </form>
  );
}
