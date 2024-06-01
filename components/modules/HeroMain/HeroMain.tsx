/* eslint-disable @next/next/no-img-element */
"use client";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { heroMap } from "@/constants/contstants";
import { useRef, useState } from "react";
import Button from "@/components/elements/Button/Button";
import RoundButton from "@/components/elements/Button/RoundButton";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const HeroMain = () => {
  let sliderRef = useRef(null) as any;
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: false,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    afterChange: (current: any) => {
      /* console.log({ current }); */
      setCurrentSlide(current);
    },
    /*  beforeChange: (prevSlide: any, currentSlide: any) => {
      console.log({ prevSlide, currentSlide });
    }, */
  };

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  /*   const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }; */

  return (
    <div className="bg_color">
      {/*  <Slider {...settings} ref={sliderRef}>
        {heroMap.map((item, index) => (
          <div className="hero_wrapper" key={index}>
            <img className="hero_image" src={item.imgUrl} alt="Фон" />
            <div className="hero_inner">
              <div className="hero_inner_body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="hero_button">
                  <Button
                    label={"Подробнее"}
                    onClick={() => window.open(item.link, "_self")}
                  />
                </div>
                <div className="hero_button_action">
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider> */}
      <Swiper
        /* spaceBetween={30} */
        /* centeredSlides={true} */
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        /*  navigation={true} */
        modules={[/* Autoplay, */ Pagination /* Navigation */]}
        /* onAutoplayTimeLeft={onAutoplayTimeLeft} */
        className="mySwiper"
      >
        {heroMap.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="hero_wrapper">
              <img className="hero_image" src={item.imgUrl} alt="Фон" />
              <div className="hero_inner">
                <div className="hero_inner_body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="hero_button">
                    <Button
                      label={"Подробнее"}
                      onClick={() => window.open(item.link, "_self")}
                    />
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
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </div>
  );
};
