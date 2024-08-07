"use client";
/* eslint-disable @next/next/no-img-element */
import "./style.css";
import { CalendarSlide } from "@/components/elements/Calendar/CalendarSlide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { eventCards } from "@/constants/pages/organizovannye-marshruty/eventCards";
import { Typography } from "@/components/elements/Typography/Typography";

const eventsDates = eventCards.map((item) => item.dates).flat();

export const EventCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const onChangeDate = (e: Date) => {
    setSelectedDate(e);
  };

  const filterEvents = eventCards.filter((item) =>
    item.dates.includes(format(selectedDate, "yyyy-MM-dd"))
  );

  return (
    <div>
      <Typography variant="h3" className="font-medium mb-14">
        Туры от туроператоров
      </Typography>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[28px]">
        <CalendarSlide onChange={onChangeDate} eventDates={eventsDates} />
        <div className="swiper_wrapper_event">
          {!!filterEvents.length ? (
            <Swiper
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="swiper"
            >
              {filterEvents.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-auto md:h-[584px] rounded-[14px] p-6 md:p-10 border-solid bg-[#7f6cfa]">
              <div className="h3">
                На сегодня нет событий - NOTE: Кирилл надо чето придумать
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Card = ({
  title,
  imgUrl,
  dates,
  price,
  days,
}: {
  title: string;
  imgUrl: string;
  dates: string[];
  price: number;
  days: number;
}) => {
  return (
    <div
      className="event_card_item_inner"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.16%, rgba(0, 0, 0, 0.8) 78.18%, rgba(0, 0, 0, 0.8) 78.19%), url(${imgUrl})`,
      }}
    >
      <div className="h5">{title}</div>
      <div>
        <p className="event_card_item_decs">Продолжительность: {days} д.</p>
        <p className="event_card_item_decs">
          Стоимость: {price.toLocaleString()} руб./чел.
        </p>
      </div>
      <Link href={""} target="_blank">
        <div
          className="group/item bg-[var(--color-white)] hover:bg-[var(--color-green)] text-black
          transition-all md:py-5 py-4 px-10 inline-block rounded-full "
        >
          <div className="flex gap-2 items-center">Перейти</div>
        </div>
      </Link>
    </div>
  );
};
