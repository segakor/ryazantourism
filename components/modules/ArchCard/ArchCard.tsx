/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { Tags } from "@/components/elements/Tags/Tags";
import { TagList, TArchCard } from "@/types/types";


const Card = ({ item }: { item: TArchCard }) => {

  const tags = item.tags?.map((item) => item.id) as TagList[];

  return (
    <div className="arch_card_item">
      <img className="arch_image" src={item.imgUrl} alt="" />
      <div className="arch_card_item_inner">
        <div className="arch_card_item_header">
          <Tags tags={tags} />
          <Icons icon="goTo" />
        </div>
        <div className="arch_card_item_body">
          <div className="h5">{item.title}</div>
          <div className="text4">{item.desc}</div>
          <div className="note-text arch_address">
            <Icons icon="location" />
            {item.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ArchCard = ({ data }: { data: TArchCard[] }) => {
  return (
    <div className="arch_card_group">
      {data.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};
