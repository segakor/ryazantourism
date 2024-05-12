/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { Tags } from "@/components/elements/Tags/Tags";
import { TagList } from "@/types/types";

type ArchCard = {
  imgUrl: string;
  title: string;
  desc: string;
  address: string;
  tags: { id: number; name: string }[];
};

const Card = ({ item }: { item: ArchCard }) => {
  const tags = item.tags.map((item) => item.id) as TagList[];

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

export const ArchCard = ({ data }: { data: ArchCard[] }) => {
  return (
    <div className="arch_card_group">
      {data.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};
