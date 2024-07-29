/* eslint-disable @next/next/no-img-element */
"use client";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { heroMap } from "@/constants/contstants";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import LinkButton from "@/components/elements/Button/LinkButton";
import { Typography } from "@/components/elements/Typography/Typography";

export const HeroMain = () => {
  return (
    <div className="swiper_wrapper">
      <Swiper
        speed={1000}
        autoplay={{
          delay: 3000,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        style={{
          height: "100vh",
        }}
        className="mySwiper"
      >
        {heroMap.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="hero_wrapper">
              <img className="hero_image" src={item.imgUrl} alt="Фон" />
              <div className="hero_inner">
                <div className="hero_inner_body">
                  <Typography variant="h1">{item.title}</Typography>
                  <p>{item.desc}</p>
                  <div className="hero_button">
                    <LinkButton href={item.link} target="_self">
                      Подробнее
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
