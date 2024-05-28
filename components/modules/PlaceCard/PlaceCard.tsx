/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
/* import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */
import "./style.css";
import Icons from "@/components/elements/Logo/Icons";
import { Tag, Tags } from "@/components/elements/Tags/Tags";
import Button from "@/components/elements/Button/Button";
import { TagList, TPlaceCard } from "@/types/types";


export const PlaceCard = ({ data }: { data: TPlaceCard[] }) => {
  return (
    <div className="place_card_group">
      {data?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

const Card = ({ item }: { item: TPlaceCard }) => {
  const [isFullText, setIsFullText] = useState(false);

  const textLength = item.description.length > 254;

  const notFullText =
    textLength && !isFullText
      ? item.description?.slice(0, 254) + " ..."
      : item.description;

  const tags = item.tags.map((item) => item.id) as TagList[];

  return (
    <div className="place_card_item">
      <div className="place_card_item_header">
        <div className="place_card_item_header_tags">
          <Tags tags={tags} />
        </div>
        <img className="place_card_image" src={item.image_path} alt="Фон" />
      </div>
      <div className="place_card_item_body">
        <div className="place_card_item_body_inner">
          <h5 className="h5">{item.name}</h5>
          <div className="partner-card-text place_card_item_body_desc">
            <span>
              {notFullText}{" "}
              {textLength && !isFullText && (
                <a onClick={() => setIsFullText(true)}>Показать полностью</a>
              )}
            </span>
          </div>
          <div className="note-text place_card_item_body_address">
            <Icons icon="location" />
            {item.address}
          </div>
        </div>
        <div className="place_card_item_footer">
          <div className="place_card_item_footer_loyalty">
            <Tag tag={10} />
            <div className="loyalty-text">
              Скидка 20% на экскурсии и мастер-классы для участников карты
              лояльности
            </div>
          </div>
          <div>
            <Button
              label={item.url_name}
              onClick={() => window.open(item.url)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
