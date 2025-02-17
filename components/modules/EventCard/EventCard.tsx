"use client";
/* eslint-disable @next/next/no-img-element */
import { CalendarSlide } from "@/components/modules/Calendar/CalendarSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Typography } from "@/components/elements/Typography/Typography";
import { swiperStyle } from "@/constants/swiperStyle";
import { ButtonLink } from "@/components/elements/ButtonNew";
import { parseCookies } from "nookies";
import { MODE_VISUALLY_KEY_NAME } from "@/components/elements/ModeVisually/ModeVisually";
import { getImageUrl } from "@/utils/getImageUrl";
import { TOrganizovannyeMarshruty } from "@/types/types";
import { API_URL_ORG_MARSH } from "@/constants/apiUrl";

export const EventCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [data, setData] = useState<TOrganizovannyeMarshruty[]>([]);

  const onChangeDate = (e: Date) => {
    setSelectedDate(e);
  };

  const filterEvents = data.filter((item: any) =>
    item.dates.includes(format(selectedDate, "yyyy-MM-dd"))
  );

  const [modeVisually, setModeVisually] = useState("");

  const getDates = async () => {
    try {
      const res = await fetch(
        API_URL_ORG_MARSH
      );
      const data = await res.json();
      setData(data?.rows);
    } catch (error) { }
  };

  //TODO: отрефакторить!!!

  useEffect(() => {
    const cookies = parseCookies();
    const value = cookies[MODE_VISUALLY_KEY_NAME];

    getDates();

    setModeVisually(value);
  }, []);

  const isModeEnabled = modeVisually === "1";

  return (
    <div>
      <Typography variant="h3" className="font-medium mb-14">
        Туры от туроператоров
      </Typography>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[28px]">
        <CalendarSlide
          onChange={onChangeDate}
          eventDates={data?.map((item) => item.dates).flat() || []}
          isModeEnabled={isModeEnabled}
        />
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
                  <Card {...item} startDate={selectedDate} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div
              className={`w-auto flex justify-center md:h-[584px] h-full rounded-[14px] 
                p-6 md:p-10 border-solid ${isModeEnabled ? "bg-black" : "bg-[#7f6cfa]"
                }`}
            >
              <div className="flex flex-col items-center justify-center gap-5">
                <Typography className={"text-white"} variant="h4">
                  В этот день событий нет
                </Typography>
                <div className={"text-white"}>Попробуйте выбрать другой</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Card = ({ id, title, storage_image, price, days, startDate }: any) => {
  return (
    <div
      className="text-white md:p-10 p-5 flex h-full flex-col justify-end bg-cover gap-4"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.16%, rgba(0, 0, 0, 0.8) 78.18%, rgba(0, 0, 0, 0.8) 78.19%), url('${getImageUrl(
          storage_image?.imagePath
        )}')`,
      }}
    >
      <Typography variant="h4">{title}</Typography>
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
        href={{
          pathname: `/marshruty/organizovannye-marshruty/${id}`,
          query: { startDate: startDate.toLocaleDateString("ru") },
        }}
        variant="greenWhite"
      >
        Посмотреть
      </ButtonLink>
    </div>
  );
};
