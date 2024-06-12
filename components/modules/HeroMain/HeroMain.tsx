/* eslint-disable @next/next/no-img-element */
"use client";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { heroMap } from "@/constants/contstants";
/* import RoundButton from "@/components/elements/Button/RoundButton"; */
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import LinkButton from "@/components/elements/Button/LinkButton";

export const HeroMain = () => {

  return (
    <div className="bg_color">
      <Swiper
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop
        pagination={{
          clickable: true,
        }}

        modules={[
         Pagination,
          EffectFade,
          Autoplay ,
        ]}
        className="mySwiper"
      >
        {heroMap.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="hero_wrapper">
              <img className="hero_image" src={item.imgUrl} alt="Фон" />
              <div className="hero_inner">
                <div className="hero_inner_body">
                  <div className="h3">{item.title}</div>
                  <p>{item.desc}</p>
                  <div className="hero_button">
                    <LinkButton href={item.link} target="_self">
                      Подробнее
                    </LinkButton>
                  </div>
                  {/*  <div className="hero_button_action">
                    <RoundButton
                      type="prev"
                      onClick={() => {
                        sliderRef.current.slickGoTo(currentSlide - 1);
                      }}
                    />
                    <RoundButton
                      type="next"
                      onClick={() => {
                        sliderRef.current.slickGoTo(currentSlide + 1);
                      }}
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
