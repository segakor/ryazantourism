/* eslint-disable @next/next/no-img-element */
import { TSinglyRoutes } from "@/types/types";
import { Typography } from "@/components/elements/Typography/Typography";
import { normalizeCount } from "@/utils/normalizeCount";
import { ButtonLink } from "@/components/elements/ButtonNew";
import Image from "next/image";
import { createShimmer } from "@/utils/shimer";

const Item = ({ item }: { item: TSinglyRoutes }) => {

  return (
    <div className="rounded-[40px] flex flex-col bg-[var(--color-partner-card-grey)] overflow-hidden">
      <div className="bg-[var(--color-grey)] h-[200px] md:w-[408px] w-full">
        <div className={`w-full relative pt-[200px]`}>
          <Image
            src={item.imgUrl}
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
      <div className="p-[30px] flex flex-col justify-between gap-7 h-full">
        <div className="grid gap-3">
          <Typography variant="h5" className="font-medium">
            {item.title}
          </Typography>
        </div>
        <ButtonLink
          href={`/marshruty/samostoyatelnye-marshruty/${item.id}`}
          variant="greenBlack"
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
