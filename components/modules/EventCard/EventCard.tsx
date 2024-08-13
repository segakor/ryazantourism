"use client";
/* eslint-disable @next/next/no-img-element */
import "./style.css";
import { CalendarSlide } from "@/components/modules/Calendar/CalendarSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { format } from "date-fns";
import { eventCards } from "@/constants/pages/organizovannye-marshruty/eventCards";
import { Typography } from "@/components/elements/Typography/Typography";
import { swiperStyle } from "@/constants/swiperStyle";
import { ButtonLink } from "@/components/elements/ButtonNew";
/* import { TOrgEventCard } from "@/types/types"; */

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
        <div className="h-full overflow-hidden bg-black rounded-[14px] md:h-auto">
          {!!filterEvents.length ? (
            <Swiper
              navigation={true}
              pagination={{
                clickable: true,
              }}
              //@ts-ignore
              style={swiperStyle}
              modules={[Pagination, Navigation]}
              className="swiper_calendar md:h-[584px] h-[350px] rounded-[14px]"
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

const Card = ({ id, title, imgUrl, dates, price, days }: any) => {
  return (
    <div
      className="event_card_item_inner bg-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.16%, rgba(0, 0, 0, 0.8) 78.18%, rgba(0, 0, 0, 0.8) 78.19%), url(${imgUrl})`,
      }}
    >
      <div className="h5">{title}</div>
      <div className="flex flex-wrap gap-3">
        <span>
          <div className="inline-block rounded-full md:py-2 py-1 px-4 bg-[rgba(255,255,255,0.5)] ">
            <div className="flex gap-2 items-center md:text-m text-sm">
              Продолжительность: {days}
            </div>
          </div>
        </span>
        <span>
          <div className="inline-block rounded-full md:py-2 py-1 px-4 bg-[rgba(255,255,255,0.5)] ">
            <div className="flex gap-2 items-center md:text-m text-sm">
              Стоимость: {price}
            </div>
          </div>
        </span>
      </div>
      <ButtonLink
        href={`/marshruty/organizovannye-marshruty/${id}`}
        variant="greenWhite"
      >
        Посмотреть
      </ButtonLink>
    </div>
  );
};
