"use client";
/* eslint-disable @next/next/no-img-element */
import { CalendarSlide } from "@/components/modules/Calendar/CalendarSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useCallback, useEffect, useState } from "react";
import { Typography } from "@/components/elements/Typography/Typography";
import { swiperStyle } from "@/constants/swiperStyle";
import { ButtonLink } from "@/components/elements/ButtonNew";
import { API_URL_CALENDAR, API_URL_CALENDAR_DETAIL } from "@/constants/apiUrl";
import { Tags } from "@/components/elements/Tags/Tags";
import { TagList } from "@/types/types";

export const EventMainCard = () => {
  const [dates, setDates] = useState([]);
  const [details, setDetails] = useState<
    {
      name: string;
      buy_ticket_url: string;
      image_path: string;
      tags: { id: number }[];
    }[]
  >([]);

  const onChangeDate = useCallback((e: Date) => {
    getDetails(e.toLocaleDateString());
  }, []);

  const getDetails = async (date: string) => {
    try {
      const res = await fetch(
        API_URL_CALENDAR_DETAIL.replace("$date_raplace", date)
      );
      const data = await res.json();
      setDetails(data.data);
    } catch (error) {}
  };

  const getDates = async () => {
    try {
      const res = await fetch(API_URL_CALENDAR);
      const data = await res.json();
      setDates(data);
    } catch (error) {}
  };

  useEffect(() => {
    getDates();
    onChangeDate(new Date());
  }, [onChangeDate]);

  //TODO:порефакторить

  return (
    <div className="grid md:gap-20 gap-10">
      <Typography variant="h2" className="font-medium">
        Календарь событий
      </Typography>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[28px] min-h-full">
        <CalendarSlide onChange={onChangeDate} eventDates={dates} />
        <div className="h-full overflow-hidden bg-black rounded-[14px] md:h-auto">
          {!!details.length ? (
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
              {details.map((item, index) => (
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
  name,
  buy_ticket_url,
  image_path,
  tags,
}: {
  name: string;
  buy_ticket_url: string;
  image_path: string;
  tags: { id: number }[];
}) => {
  const tagList = tags?.map((item) => item.id) as TagList[];

  return (
    <div
      className="text-white md:p-10 p-5 flex h-full flex-col justify-between bg-cover md:max-h-auto max-h-450px"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.16%, rgba(0, 0, 0, 0.8) 78.18%, rgba(0, 0, 0, 0.8) 78.19%), url(${image_path})`,
      }}
    >
      <Tags tags={tagList}/>
      <div className="grid gap-5">
        <Typography variant="h5">{name}</Typography>
        <ButtonLink href={buy_ticket_url} variant="greenWhite" target="_blank">
          Перейти
        </ButtonLink>
      </div>
    </div>
  );
};
