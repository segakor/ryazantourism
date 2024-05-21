"use client";
import ButtonSpoiler from "@/components/elements/Button/SpoilerButton";
import "./style.css";
import { useState } from "react";

export const Otvety = () => {};

export const Otvet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="otvet_wrapper">
      <div className={`otvet_header ${isOpen && "otvet_header_active"}`} onClick={handleClick}>
        <div>
          <ButtonSpoiler />
        </div>
        <div className="text1">
          Как самостоятельно добраться в Константиново?
        </div>
      </div>

      <div className={`otvet_body ${isOpen && "otvet_body_active"}`}>
        <div className="otvet_body_content">
          <div className="otvet_body_content_inner">
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          <div>spoiler-active</div>
          </div>
        </div>
      </div>
    </div>
  );
};
