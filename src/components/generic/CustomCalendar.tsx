"use client";

import { CalendarIcon } from "@jektis/components/icons";
import { Datepicker } from "flowbite-react";
import { useEffect, useState } from "react";
import { days, months } from "@jektis/utils/date-utils";

export const theme = {
  root: {
    base: "lg:relative",
  },
  popup: {
    root: {
      base: "lg:absolute top-10 z-50 block pt-2",
      inline: "lg:relative top-0 z-auto",
      inner: "inline-block rounded-lg bg-white p-4 shadow-lg",
    },
    header: {
      base: "",
      title: "px-2 py-3 text-center font-semibold text-gray-900",
      selectors: {
        base: "mb-2 flex justify-between",
        button: {
          base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",
          prev: "",
          next: "",
          view: "",
        },
      },
    },
    view: {
      base: "p-1",
    },
    footer: {
      base: "mt-2 hidden flex space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
        today: "bg-cyan-700 text-white hover:bg-cyan-800",
        clear:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
      },
    },
  },
  views: {
    days: {
      header: {
        base: "mb-1 grid grid-cols-7",
        title: "h-6 text-center text-sm font-medium leading-6 text-gray-500",
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
  },
};

export default function CustomCalendar({
  label,
  setValue,
  value,
  afterOpenCalendar,
  afterCloseCalendar,
}: {
  label: string;
  setValue: (value: Date) => boolean;
  value: Date;
  afterOpenCalendar: () => void;
  afterCloseCalendar: () => void;
}) {
  const [date, setDate] = useState<Date>(value);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const handleDatePickerChange = (date: Date) => {
    const change = setValue(date);
    change && setDate(date);
    setIsCalendarOpen(false);
    afterCloseCalendar();
  };
  return isCalendarOpen ? (
    <Datepicker
      name="selectedDate"
      value={value.toDateString()}
      onSelectedDateChanged={handleDatePickerChange}
      inline={true}
      theme={theme}
    />
  ) : (
    <div className="flex flex-col gap-1 lg:w-[150px] w-[120px]">
      <p className="text-gray-400 text-center">{label}</p>
      <div className="lg:relative text-black max-w-sm flex flex-row lg:gap-4 gap-2">
        <div
          onClick={() => {
            setIsCalendarOpen(true);
            afterOpenCalendar();
          }}
          className="flex flex-col h-full items-start"
        >
          <CalendarIcon className="size-7" />
        </div>
        <div className="flex flex-row items-center lg:gap-4 gap-2">
          <p className="lg:text-[40px] text-[36px] leading-none font-extrabold">
            {date.getDate()}
          </p>
          <div className="flex flex-col lg:text-[18px] text-[16px] font-bold">
            <p className="leading-none">{days[date.getDay()].slice(0, 3)}</p>
            <p className="leading-none">
              {months[date.getMonth()].slice(0, 3)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
