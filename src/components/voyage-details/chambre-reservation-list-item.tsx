import React from "react";
import { Minus, Plus } from "@jektis/components/icons";
import Center, { Axes } from "@jektis/components/generic/center";

export default function ChambreReservationListItem({
  title,
  qty,
  onUpdate,
  price,
}: {
  title: string;
  qty: number;
  onUpdate: (qty: number) => void;
  price: number;
}): React.ReactNode {
  return (
    <div className="grid mr-2 grid-cols-11 rounded-md shadow-sm mt-1 bg-[#ececec]">
      <div className="flex flex-col items-center col-span-3 lg:col-span-2  text-xl font-medium text-white border-r-2 border-white ">
        <div className="flex text-black flex-row h-fit my-4 gap-4 mx-1 bg-white justify-between border-2 rounded border-[#d9d9d9]">
          <Minus
            className="lg:h-7 lg:w-7 xl:h-10 xl:w-10 bg-[#d9d9d9] cursor-pointer"
            onClick={() => onUpdate(qty - 1)}
          />
          <Center axe={Axes.all}>{qty}</Center>
          <Plus
            className="lg:h-7 lg:w-7 xl:h-10 xl:w-10 bg-[#d9d9d9] cursor-pointer"
            onClick={() => onUpdate(qty + 1)}
          />
        </div>
      </div>
      <div className="col-span-6 lg:col-span-7 flex flex-row gap-4 items-center pl-4 justify-start text-sm lg:text-xl w-full font-medium border-r-2 border-white">
        <strong className="text-black">{title}</strong>
      </div>
      <div className="col-span-2 flex flex-row justify-center text-xl lg:text-3xl font-medium">
        <div className="flex flex-col items-center justify-center">
          <strong className="text-[#366999]">
            {qty * price}
            <sup>DT</sup>
          </strong>
        </div>
      </div>
    </div>
  );
}
