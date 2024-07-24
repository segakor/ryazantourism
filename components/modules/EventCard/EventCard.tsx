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
import LinkButton from "@/components/elements/Button/LinkButton";
import { eventCards } from "@/constants/pages/organizovannye-marshruty/eventCards";

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
      <div className="h3 title">Туры от туроператоров</div>
      <div className="wrapper_event">
        <CalendarSlide onChange={onChangeDate} eventDates={eventsDates} />
        <div className="wrapper_swiper">
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
      <LinkButton href="">Перейти</LinkButton>
    </div>
  );
};
