/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
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
      className="group/item rounded-[40px] flex flex-col justify-between text-white cursor-pointer 
      relative overflow-hidden bg-[ var(--color-grey)]"
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
          unoptimized
        />
      </div>
      <div className="absolute w-full p-[40px] h-full flex justify-between flex-col">
        <div className="flex justify-between">
          <Tags tags={tags} />
          <div className="bg-white flex justify-end rounded-full items-center group-hover/item:bg-[var(--color-green)] transition-all">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" />
              <path
                d="M25.5303 20.5303C25.8232 20.2374 25.8232 19.7626 25.5303 19.4697L20.7574 14.6967C20.4645 14.4038 19.9896 14.4038 19.6967 14.6967C19.4038 14.9896 19.4038 15.4645 19.6967 15.7574L23.9393 20L19.6967 24.2426C19.4038 24.5355 19.4038 25.0104 19.6967 25.3033C19.9896 25.5962 20.4645 25.5962 20.7574 25.3033L25.5303 20.5303ZM15 20.75H25V19.25H15V20.75Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="grid gap-3">
          <Typography variant="h5" className="font-semibold">
            {item.title}
          </Typography>
          <div className="text4">{item.desc}</div>
          <div className="note-text flex gap-[10px]">
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
