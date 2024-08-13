/* eslint-disable @next/next/no-img-element */
"use client";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { heroMap } from "@/constants/contstants";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Typography } from "@/components/elements/Typography/Typography";
import { swiperStyle } from "@/constants/swiperStyle";
import { useMediaQuery } from "react-responsive";
import { ButtonLink } from "@/components/elements/ButtonNew";

export const HeroMain = () => {
  const mdMedia = useMediaQuery({ query: "(min-width: 768px)" });

  /* const swiperPagination = !mdMedia && { "--swiper-pagination-bottom": "80px" }; */

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
        //@ts-ignore
        style={{
          ...swiperStyle,
          height: "100vh",
          //@ts-ignore
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
                  <div className="w-[268px]">
                    <ButtonLink
                      href={item.link}
                      variant="greenWhite"
                      wide
                    >
                      Подробнее
                    </ButtonLink>
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
