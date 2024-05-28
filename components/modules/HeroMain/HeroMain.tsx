/* eslint-disable @next/next/no-img-element */
"use client";
import "./style.css";
import Slider /* , { slickGoTo } */ from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroMap } from "@/constants/contstants";
import { useRef, useState } from "react";
import Button from "@/components/elements/Button/Button";
import RoundButton from "@/components/elements/Button/RoundButton";

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

  return (
    <div className="bg_color">
      <Slider {...settings} ref={sliderRef}>
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
      </Slider>
    </div>
  );
};
