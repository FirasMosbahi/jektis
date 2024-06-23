"use client";

import { AddIcon, Close, Trash, TwoUsers } from "@jektis/components/icons";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Room } from "@jektis/forms-data/hotel-filter-form-data";

function arrayFromNumbers(num: number, array: any[]): any[] {
  for (let i = array.length; i < num; i++) {
    array.push({ age: 11 });
  }
  return array;
}

function RoomInput({
  roomId,
  room,
  onChange,
  onEnfantAgeChange,
  onDelete,
}: {
  roomId: number;
  onChange: (field: "adultes" | "bebe", value: number) => void;
  onEnfantAgeChange: (value: { age: number }[]) => void;
  onDelete: () => void;
  room: Room;
}) {
  const [enfantsAge, setEnfantsAge] = useState<{ age: number }[]>([]);
  const enfantsNumber = useMemo(() => {
    return enfantsAge.length;
  }, [enfantsAge]);
  return (
    <div className="mb-6">
      <div className="flex flex-row pb-4 justify-between">
        <p className="text-black text-[18px] font-semibold ">
          Chambre {roomId + 1}
        </p>
        {roomId > 0 ? <Trash onClick={onDelete} className="size-6" /> : <div />}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-4">
          <div>
            <label
              htmlFor="adultes"
              className="block text-[14px] text-gray-900"
            >
              Adulte(s)
            </label>
            <select
              value={room.adultes}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                if (
                  (Number.parseInt(e.target.value) ?? 0) +
                    room.bebe +
                    enfantsNumber >
                  4
                ) {
                  return;
                }
                e.preventDefault();
                onChange("adultes", Number.parseInt(e.target.value) ?? 0);
              }}
              id="adultes"
              className=" h-10 w-24 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-1.5"
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="enfants"
              className="block  text-[14px] text-gray-900"
            >
              Enfant(s)
            </label>
            <select
              value={enfantsNumber}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                if (
                  (Number.parseInt(e.target.value) ?? 0) +
                    room.bebe +
                    room.adultes >
                  4
                ) {
                  return;
                }
                e.preventDefault();
                setEnfantsAge((prevState) => {
                  return [
                    ...arrayFromNumbers(
                      Number.parseInt(e.target.value) ?? 0,
                      prevState,
                    ),
                  ];
                });
                // onChange("enfants", Number.parseInt(e.target.value) ?? 0);
              }}
              id="enfants"
              className=" h-10 w-24 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-1.5"
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <label
              htmlFor="enfants"
              className="block  text-[14px]  text-gray-900"
            >
              (2-11 ans)
            </label>
          </div>
          <div>
            <label htmlFor="bebe" className="block  text-[14px]  text-gray-900">
              Bébé(s)
            </label>
            <select
              value={room.bebe}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                if (
                  (Number.parseInt(e.target.value) ?? 0) +
                    enfantsNumber +
                    room.adultes >
                  4
                ) {
                  return;
                }
                e.preventDefault();
                onChange("bebe", Number.parseInt(e.target.value) ?? 0);
              }}
              id="bebe"
              className=" h-10 w-24 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-1.5"
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
            <label htmlFor="bebe" className="block  text-[14px] text-gray-900">
              (inf à 2 ans)
            </label>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          {enfantsAge.length > 0 &&
            enfantsAge.map((e, index) => (
              <div key={index + 1}>
                <label
                  htmlFor={`age enfant ${index + 1}`}
                  className="block  text-[14px] text-gray-900"
                >
                  Age Enfant {index + 1}
                </label>
                <select
                  value={e.age}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    if (
                      (Number.parseInt(e.target.value) ?? 0) > 11 ||
                      (Number.parseInt(e.target.value) ?? 0) < 2
                    ) {
                      return;
                    }
                    e.preventDefault();
                    // onChange("bebe", Number.parseInt(e.target.value) ?? 0);
                    setEnfantsAge((prevState) => {
                      const result = prevState;
                      result[index].age = Number.parseInt(e.target.value) ?? 11;
                      onEnfantAgeChange(result);
                      return [...result];
                    });
                  }}
                  id={`age enfant ${index + 1}`}
                  className=" h-10 w-24 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-1.5"
                >
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={3}>8</option>
                  <option value={8}>9</option>
                  <option value={9}>10</option>
                  <option value={10}>11</option>
                  <option value={11}>12</option>
                </select>
              </div>
            ))}
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
    { bebe: 0, enfants: [], adultes: 0 },
  ]);

  const sumRooms = useMemo(() => {
    let chambres: number = 0;
    let adultes: number = 0;
    let enfants: number = 0;
    let bebe: number = 0;
    rooms.forEach((room) => {
      chambres++;
      adultes += room.adultes;
      enfants += room.enfants.length;
      bebe += room.bebe;
    });
    return { chambres, adultes, enfants, bebe };
  }, [rooms]);

  return (
    <div className="border border-gray-300 mx-4 py-8 px-4">
      <div
        className="flex flex-row items-center lg:gap-4 gap-2 cursor-pointer justify-between"
        onClick={() => setIsPopupOpen(true)}
      >
        <TwoUsers className="lg:size-6 size-5" />
        <p className="text-black lg:text-[18px] flex-1 font-semibold">
          {sumRooms.chambres} Chambre , {sumRooms.adultes} Adultes,{" "}
          {sumRooms.enfants} enfants , {sumRooms.bebe} bébés
        </p>
      </div>
      {isPopupOpen && (
        <form className="absolute opacity-100 flex flex-col justify-between top-[10%] left-[7%] z-20 bg-white px-6 lg:w-[450px] w-[350px] py-4 min-h-[350px] lg:min-h-[250px]">
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
                    setRooms((prevState) =>
                      prevState.map((room, i) => {
                        if (index === i) {
                          return { ...room, [field]: value };
                        } else {
                          return room;
                        }
                      }),
                    );
                  }}
                  onEnfantAgeChange={(value) =>
                    setRooms((prevState) =>
                      prevState.map((room, i) => {
                        if (index === i) {
                          return { ...room, enfants: value };
                        } else {
                          return room;
                        }
                      }),
                    )
                  }
                  onDelete={() =>
                    setRooms((prevState) =>
                      prevState.filter((_, i) => i !== index),
                    )
                  }
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
                  { adultes: 0, bebe: 0, enfants: [] },
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
                      room.adultes >= 0 &&
                      room.enfants.length >= 0 &&
                      room.bebe >= 0,
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
