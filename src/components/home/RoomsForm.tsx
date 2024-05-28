"use client";

import { AddIcon, Close, TwoUsers } from "@jektis/components/icons";
import React, { useCallback, useMemo } from "react";
import { Room } from "@jektis/forms-data/home-filter-form-data";

function RoomInput({
  roomId,
  room,
  onChange,
}: {
  roomId: number;
  onChange: (field: "adultes" | "enfants" | "bebe", value: number) => void;
  room: Room;
}) {
  return (
    <div className="mb-6">
      <p className="text-black text-[18px] font-semibold pb-3">
        Chambre {roomId + 1}
      </p>
      <div className="flex flex-row gap-4">
        <div>
          <label htmlFor="adultes" className="block mb-2   text-gray-900">
            Adultes
          </label>
          <input
            value={room.adultes}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              onChange("adultes", Number.parseInt(e.target.value) ?? 0);
            }}
            type="number"
            id="adultes"
            className=" h-8 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="enfants" className="block mb-2  text-gray-900">
            Enfant(s)
          </label>
          <input
            value={room.enfants}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              onChange("enfants", Number.parseInt(e.target.value) ?? 0);
            }}
            type="number"
            id="enfants"
            className=" h-8 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="bebe" className="block mb-2  text-gray-900">
            Bébé(s)
          </label>
          <input
            value={room.bebe}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              onChange("bebe", Number.parseInt(e.target.value) ?? 0);
            }}
            type="number"
            id="bebe"
            className=" h-8 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>
    </div>
  );
}

export default function RoomsForm({
  onSubmit,
  isPopupOpen,
  setIsPopupOpen,
}: {
  onSubmit: (value: Room[]) => void;
  isPopupOpen: boolean;
  setIsPopupOpen: (state: boolean) => void;
}) {
  const [rooms, setRooms] = React.useState<Room[]>([
    // { bebe: 0, enfants: 0, adultes: 0 },
  ]);

  const sumRooms = useMemo(() => {
    let chambres: number = 0;
    let adultes: number = 0;
    let enfants: number = 0;
    let bebe: number = 0;
    rooms.forEach((room) => {
      chambres++;
      adultes += room.adultes;
      enfants += room.enfants;
      bebe += room.bebe;
    });
    return { chambres, adultes, enfants, bebe };
  }, [rooms]);

  return (
    <div className="flex flex-row items-center justify-between border border-gray-300 mx-4 py-8 px-4">
      <TwoUsers className="lg:size-6 size-5" />
      <p className="text-black text-[18px] w-[80%] font-semibold">
        {sumRooms.chambres} Chambre , {sumRooms.adultes} Adultes,{" "}
        {sumRooms.enfants} enfants , {sumRooms.bebe} bébés
      </p>
      <AddIcon
        onClick={() => setIsPopupOpen(true)}
        className="size-8 cursor-pointer"
      />
      {isPopupOpen && (
        <form className="absolute opacity-100 flex flex-col justify-between top-[10%] left-[7%] z-20 bg-white px-6 w-[450px] py-4 min-h-[250px]">
          <div>
            <div className="flex flex-row pb-2 justify-between border-b-2 border-b-gray-700 items-center">
              <p className="text-black text-[17px]">
                Séléctionnez vos chambres
              </p>{" "}
              <Close
                className="size-4 cursor-pointer"
                onClick={() => setIsPopupOpen(false)}
              />
            </div>
            <div className="py-2 flex flex-col">
              {rooms.map((room, index) => (
                <RoomInput
                  room={room}
                  roomId={index}
                  onChange={(field, value) => {
                    if (room.enfants + room.bebe + room.adultes < 4) {
                      setRooms((prevState) =>
                        prevState.map((room, i) => {
                          if (index === i) {
                            return { ...room, [field]: value };
                          } else {
                            return room;
                          }
                        }),
                      );
                    }
                  }}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-4 pb-1">
            <div
              className="flex flex-row items-center gap-2 cursor-pointer"
              onClick={() =>
                setRooms((prevState) => [
                  ...prevState,
                  { adultes: 0, bebe: 0, enfants: 0 },
                ])
              }
            >
              <AddIcon />{" "}
              <p className="text-black leading-none">Ajouter une chambre</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                onSubmit(
                  rooms.filter(
                    (room) =>
                      room.adultes >= 0 && room.enfants >= 0 && room.bebe >= 0,
                  ),
                );
                setIsPopupOpen(false);
              }}
              type="button"
              className="text-white px-6 py-1 border border-transparent rounded-lg bg-[#839fc4]"
            >
              Valider
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
