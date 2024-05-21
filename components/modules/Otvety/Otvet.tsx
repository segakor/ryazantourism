"use client";
import ButtonSpoiler from "@/components/elements/Button/SpoilerButton";
import "./style.css";
import { useState } from "react";
import { TOtvet } from "@/types/types";

export const Otvety = ({ data }: { data: TOtvet[] }) => {
  return (
    <div className="otvety_group">
      {data.map((item, index) => (
        <Otvet key={index} item={item} />
      ))}
    </div>
  );
};

export const Otvet = ({ item }: { item: TOtvet }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="otvet_wrapper">
      <div
        className={`otvet_header ${isOpen && "otvet_header_active"}`}
        onClick={handleClick}
      >
        <div>
          <ButtonSpoiler />
        </div>
        <div className="text1">{item.question}</div>
      </div>

      <div className={`otvet_body ${isOpen && "otvet_body_active"}`}>
        <div className="otvet_body_content">
          {item.answer.map((item, index) => (
            <div key={index} className="otvet_body_content_inner">
              <div className="otvet_body_content_inner_title h5">
                <span className="otvet_body_content_inner_title_number">
                  {index + 1}
                </span>
                {item.title}
              </div>
              <div
                className="otvet_body_content_inner_desc active_link"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
