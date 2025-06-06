"use client";
import ButtonSpoiler from "@/components/elements/Button/SpoilerButton";
import "./style.css";
import { useState } from "react";
import { TOtvet } from "@/types/types";

export const Otvety = ({ data }: { data: TOtvet[] }) => {
  return (
    <div className="otvety_group">
      {data.map((item) => (
        <Otvet key={item.id} item={item} />
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
        <div className="text1">{item.title}</div>
      </div>

      <div className={`otvet_body ${isOpen && "otvet_body_active"}`}>
        <div className="otvet_body_content">
          {item.answers.map((item, index) => (
            <div key={index} className="otvet_body_content_inner">
              <div className="otvet_body_content_inner_title h5">
                <span className="otvet_body_content_inner_title_number">
                  {index + 1}
                </span>
                {item.title}
              </div>
              <div
                className="otvet_body_content_inner_desc styled_link styled_list"
                dangerouslySetInnerHTML={{ __html: item.template }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
