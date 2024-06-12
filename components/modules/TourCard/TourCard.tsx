/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import LinkButton from "@/components/elements/Button/LinkButton";
import { data } from "@/constants/pages/marshruty/samostoyatelnye-marshruty/3dtour";

const TourCardItem = ({ item }: { item: { title: string; link: string; srcImg:string } }) => {
  return (
    <div className="tour_card_item">
      <div className="tour_card_item_header">
        <img
          className="tour_card_item_image"
          src={item.srcImg}
          alt="Фон"
        />
      </div>
      <div className="tour_card_item_body">
        <div className="tour_card_item_body_inner">
          <h5 className="h5">{item.title}</h5>
        </div>
        <div className="tour_card_item_footer">
          <LinkButton href={item.link} target="_blank">
            подробнее
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export const TourCard = () => {
  return (
    <div className="tour_card_group">
      {data.map((item, index) => (
        <TourCardItem key={index} item={item} />
      ))}
    </div>
  );
};
