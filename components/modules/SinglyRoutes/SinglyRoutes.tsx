/* eslint-disable @next/next/no-img-element */
import { TagList, TSinglyRoutes } from "@/types/types";
import { Typography } from "@/components/elements/Typography/Typography";
import { ButtonLink } from "@/components/elements/ButtonNew";
import Image from "next/image";
import { createShimmer } from "@/utils/shimer";
import { Tags } from "@/components/elements/Tags/Tags";
import { getImageUrl } from "@/utils/getImageUrl";

const Item = ({ item }: { item: TSinglyRoutes }) => {
  return (
    <div className="rounded-[40px] flex flex-col bg-[var(--color-partner-card-grey)] shadow-lg overflow-hidden">
      <div className="relative">
        <div className="absolute p-7 z-[2]">
          <Tags tags={item.tags as TagList[]} />
        </div>
        <div className="bg-[var(--color-grey)] h-[200px] md:w-[408px] w-full">
          <div className={`w-full relative pt-[200px]`}>
            <Image
              src={getImageUrl(item.storage_image.imagePath)}
              alt="img"
              objectFit="cover"
              fill
              className={`w-full h-full top-0 left-0 object-cover rounded-rounded-t-lg brightness-[90%]`}
              placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="p-[30px] flex flex-col justify-between gap-7 h-full">
        <div className="grid gap-3">
          <Typography variant="h5" className="font-medium">
            {item.title}
          </Typography>
          <div
            className='partner-card-text opacity-50'
            dangerouslySetInnerHTML={{ __html: item.subTitle }}
          />
        </div>
        <ButtonLink
          href={
            !item.linkPath
              ? `/marshruty/samostoyatelnye-marshruty/${item.id}`
              : item.linkPath
          }
          variant="greenBlack"
          target={item.linkPath && "_blank"}
        >
          К сценарию
        </ButtonLink>
      </div>
    </div>
  );
};

export const SinglyRoutest = ({ data }: { data: TSinglyRoutes[] }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
      {data.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};
