"use client";
import { useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";

export const CalendarSlide = () => {
  const today = startOfToday();
  const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const colStartClasses = [
    "col-start-1",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayOfMonth), { weekStartsOn: 1 }),
  });

  const getPrevMonth = (event:any) => {
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = (event: any) => {
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  const capitalizeFirstLetter = (query: string): string => {
    return query.charAt(0).toUpperCase() + query.substring(1);
  };

  return (
    <div className="w-auto rounded-3xl p-6 sm:p-10 border-solid bg-[#7f6cfa]">
      <div className="flex items-center justify-between">
        <p className="h4 text-xl text-white">
          {format(firstDayOfMonth, "MMMM yyyy")}
        </p>
        <div className="flex items-center justify-evenly gap-6 sm:gap-12">
          <button
            aria-label="calendar backward"
            className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100 text-white"
            onClick={getPrevMonth}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
          <button
            aria-label="calendar forward"
            className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100 text-white"
            onClick={getNextMonth}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler  icon-tabler-chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
      <hr className="my-4 sm:my-6" />
      <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
        {days.map((day, idx) => {
          return (
            <div
              key={idx}
              className={`font-semibold ${
                (idx === 5 || idx === 6) && "text-red-600"
              }`}
            >
              {capitalizeFirstLetter(day)}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-7 gap-2 sm:gap-8 mt-8 place-items-center">
        {daysInMonth.map((day:any, idx) => {
          return (
            <div key={idx} className={colStartClasses[getDay(day - 1)]}>
              <p
                className={`text-2xl cursor-pointer flex items-center justify-center font-medium h-8 w-8 rounded-full  hover:text-white ${
                  isSameMonth(day, today) ? "text-gray-900" : "text-[#a598fb]"
                } ${!isToday(day) && "hover:bg-[#b6acfc] w-[40px] h-[40px]"} ${
                  isToday(day) &&
                  "bg-[var(--color-green)] w-[40px] h-[40px] text-white"
                }`}
              >
                {format(day, "d")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
