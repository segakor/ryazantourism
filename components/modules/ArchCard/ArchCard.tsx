/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { Tags } from "@/components/elements/Tags/Tags";
import { TagList, TArchCard } from "@/types/types";
import Image from "next/image";
import { createShimmer } from "@/utils/shimer";
import { Typography } from "@/components/elements/Typography/Typography";
import Link from "next/link";

//TODO: Image сделать один на всех
const Card = ({ item }: { item: TArchCard }) => {
  const tags = item.tags?.map((item) => item.id) as TagList[];

  return (
    <Link
      href={`/idei-dlya-puteshestviya/chto-posmotret/${item.id}`}
      className="arch_card_item group/item"
    >
      <div className={`w-full relative pt-[100%]`}>
        <Image
          src={item.imgUrl}
          alt="img"
          objectFit="cover"
          fill
          className={`w-full h-full top-0 left-0 object-cover rounded-[30px] brightness-[60%] group-hover/item:scale-[115%] group-hover/item:transition-all transition-all`}
          placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
          priority
        />
      </div>
      <div className="arch_card_item_inner">
        <div className="arch_card_item_header">
          <Tags tags={tags} />
          <Icons icon="goTo" />
        </div>
        <div className="arch_card_item_body">
          <Typography variant="h5" className="font-semibold">
            {item.title}
          </Typography>
          <div className="text4">{item.desc}</div>
          <div className="note-text arch_address">
            <Icons icon="location" />
            {item.address}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ArchCard = ({ data }: { data: TArchCard[] }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mb-40">
      {data.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};
