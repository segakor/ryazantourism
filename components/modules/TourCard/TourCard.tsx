/* eslint-disable @next/next/no-img-element */
import { ButtonLink } from "@/components/elements/ButtonNew";
import { Typography } from "@/components/elements/Typography/Typography";
import { data } from "@/constants/pages/marshruty/samostoyatelnye-marshruty/3dtour";
import { createShimmer } from "@/utils/shimer";
import Image from "next/image";

const TourCardItem = ({
  item,
}: {
  item: { title: string; link: string; srcImg: string };
}) => {
  return (
    <div className="rounded-[40px] flex flex-col bg-[var(--color-partner-card-grey)] overflow-hidden">
      <div className="bg-[var(--color-grey)] h-[200px] md:w-[408px] w-full flex">
        <div className={`w-full relative pt-[200px]`}>
          <Image
            src={item.srcImg}
            alt="img"
            objectFit="cover"
            fill
            className={`w-full h-full top-0 left-0 object-cover rounded-rounded-t-lg brightness-[90%]`}
            placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
            priority
          />
        </div>
      </div>
      <div className="p-[30px] flex flex-col justify-between h-full gap-[30px]">
        <div className="grid gap-3">
          <Typography variant="h5" className="font-medium">
            {item.title}
          </Typography>
        </div>
        <ButtonLink href={item.link} target="_blank" variant="greenBlack">
          Подробнее
        </ButtonLink>
      </div>
    </div>
  );
};

export const TourCard = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
      {data.map((item, index) => (
        <TourCardItem key={index} item={item} />
      ))}
    </div>
  );
};
