"use client";
import "./style.css";
import Slider/* , { slickGoTo } */ from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroMap } from "@/constants/contstants";
import { Button } from "@/components/elements/Button/Button";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  let sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: false,
    slidesToScroll: 1,
    /* fade: true, */
    infinite: true,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (current:any) => {
      console.log({ current });
      /* setCurrentSlide(current) */
    },
    beforeChange: (prevSlide:any, currentSlide:any) => {
      console.log({ prevSlide, currentSlide });
    },
  };

/*   setInterval(() => {
    console.log("tick");
  }, 2000); */

/*   const intervalId = setInterval(() => {
    console.log("tick");
  }, 4000);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, []); */

  return (
    <Slider {...settings} ref={sliderRef}>
      {heroMap.map((item, index) => (
        <div className="hero_wrapper" key={index}>
          <img className="hero_image" src={item.img_url} alt="Фон" />
          <div className="hero_inner">
            <div className="hero_inner_body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="hero_button">
                <Button name={"Подробнее"} onClick={() => alert("asdsa")} />
              </div>
              {/*  <div>
                <Button
                  name={"назад"}
                  onClick={() => {
                    sliderRef.current.slickGoTo(currentSlide - 1);
                  }}
                />
              </div>
              <div>
                <Button
                  name={"Далее"}
                  onClick={() => {
                    sliderRef.current.slickGoTo(currentSlide + 1);
                  }}
                />
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
