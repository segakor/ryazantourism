"use client";
/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import Button from "@/components/elements/Button/Button";
import { CalendarSlide } from "@/components/elements/Calendar/CalendarSlide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

export const EventCard = () => {
  /*   const adaptiveWidthSwiper = window?.screen.width - 25 */

  return (
    <div>
      <div className="h3 title">Туры от туроператоров</div>
      <div className="wrapper_event">
        <CalendarSlide />
        <div
          className="wrapper_swiper" /* style={{width:adaptiveWidthSwiper}} */
        >
          <Swiper
            navigation={true}
            pagination={{
              /* dynamicBullets: true, */
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="swiper"
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div
      className="event_card_item_inner"
      style={{
        backgroundImage: `linear-gradient(356.75deg, rgba(0, 0, 0, 0.2) 13.4%, rgba(0, 0, 0, 0) 97.73%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${"https://static.tildacdn.com/tild3262-3939-4161-b965-383961636262/SobPl-044.jpg"})`,
      }}
    >
      <div className="h5">
        Цикл кинопоказов с участием Эраста Гарина — «Каин XVIII»
      </div>
      <div className="h5">
        Цикл кинопоказов с участием Эраста Гарина — «Каин XVIII»
      </div>
      <Button label="Перейти" onClick={() => alert("das")} />
    </div>
  );
};
