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
  startOfDay,
  isEqual,
} from "date-fns";
import { ru } from "date-fns/locale";

type Props = {
  onChange: (e: Date) => void;
  eventDates: string[];
};

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

export const CalendarSlide = ({ onChange, eventDates }: Props) => {
  const today = startOfToday();

  const [currentDay, setCurrentDay] = useState<Date>(startOfDay(new Date()));

  const onClickDay = (e: Date) => {
    onChange(e);
    setCurrentDay(startOfDay(e));
  };

  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayOfMonth), { weekStartsOn: 1 }),
  });

 /*  const disabledPrev = true;
  const disabledNext = true; *///TODO: возможно стоит ограничить клик

  const getPrevMonth = (event: any) => {
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

  const isEventDay = (day: Date) =>
    eventDates?.map((item) => isEqual(startOfDay(item), day)).includes(true);

  return (
    <div className="w-auto rounded-3xl p-6 sm:p-10 border-solid bg-[#7f6cfa]">
      <div className="flex items-center justify-between">
        <p className="h4 text-xl text-white">
          {format(firstDayOfMonth, "LLLL yyyy", { locale: ru })}
        </p>
        <div className="flex items-center justify-evenly gap-6 sm:gap-12">
          <button
            aria-label="calendar backward"
            className="hover:text-gray-400 text-gray-800 dark:text-gray-100 text-white"
            onClick={getPrevMonth}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
          <button
            aria-label="calendar forward"
            className="hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100 text-white"
            onClick={getNextMonth}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler  icon-tabler-chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
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
                idx === 5 || idx === 6 ? "text-red-600" : "text-white"
              }`}
            >
              {capitalizeFirstLetter(day)}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-7 gap-2 sm:gap-6 mt-8 place-items-center">
        {daysInMonth.map((day: any, idx) => {
          return (
            <div
              key={idx}
              className={colStartClasses[getDay(day - 1)]}
              onClick={() => {
                isEventDay(day) && onClickDay(day);
              }}
            >
              <p
                className={`w-[40px] h-[40px] 
                  text-xl cursor-pointer
                  flex items-center justify-center 
                  font-medium h-8 w-8 rounded-full  
                  hover:text-gray-900
                  transition-all
                  ${isSameMonth(day, today) ? "text-white" : "text-[#a598fb]"} 
                  ${!isToday(day) && "hover:bg-[#b6acfc]"} 
                  ${
                    isEqual(currentDay, day) &&
                    "bg-[var(--color-green)] text-white"
                  } 
                  ${
                    !isEqual(currentDay, day) &&
                    isEventDay(day) &&
                    "border-dashed border-2 border-indigo-600"
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
