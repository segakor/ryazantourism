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
import { sobytiyaCards } from "@/constants/pages/sobytiaya/sobytiya";
import { Typography } from "@/components/elements/Typography/Typography";
import { swiperStyle } from "@/constants/swiperStyle";
import { ButtonLink } from "@/components/elements/ButtonNew";

const eventsDates = sobytiyaCards.map((item) => item.dates).flat();

export const EventMainCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const onChangeDate = (e: Date) => {
    setSelectedDate(e);
  };

  const filterEvents = sobytiyaCards.filter((item) =>
    item.dates.includes(format(selectedDate, "yyyy-MM-dd"))
  );

  return (
    <div className="grid md:gap-20 gap-10">
      <Typography variant="h2" className="font-medium">
        Календарь событий
      </Typography>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[28px] min-h-full">
        <CalendarSlide onChange={onChangeDate} eventDates={eventsDates} />
        <div className="h-full overflow-hidden bg-black rounded-[14px] md:h-auto">
          {!!filterEvents.length ? (
            <Swiper
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              //@ts-ignore
              style={swiperStyle}
              className="swiper_calendar md:h-[584px] h-[350px] rounded-[14px]"
            >
              {filterEvents.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-auto md:h-[584px] h-full rounded-[14px] p-6 md:p-10 border-solid bg-[#7f6cfa]">
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
}: {
  title: string;
  imgUrl: string;
  dates: string[];
}) => {
  return (
    <div
      className="event_card_item_inner bg-cover md:max-h-auto max-h-450px"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.16%, rgba(0, 0, 0, 0.8) 78.18%, rgba(0, 0, 0, 0.8) 78.19%), url(${imgUrl})`,
      }}
    >
      <div className="h5">{title}</div>
      <ButtonLink href={""} variant="greenWhite">
        Перейти
      </ButtonLink>
    </div>
  );
};
