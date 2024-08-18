/* eslint-disable @next/next/no-img-element */
import { TSinglyRoutes } from "@/types/types";
import { Typography } from "@/components/elements/Typography/Typography";
import { normalizeCount } from "@/utils/normalizeCount";
import { ButtonLink } from "@/components/elements/ButtonNew";
import Image from "next/image";
import { createShimmer } from "@/utils/shimer";

const Item = ({ item }: { item: TSinglyRoutes }) => {
  const daysVal = !!item.duration.days && (
    <>
      {item.duration.days}{" "}
      {normalizeCount(item.duration.days, ["день", "дня", "дней"])}{" "}
    </>
  );
  const hoursVal = !!item.duration.hours && (
    <>
      {" "}
      {item.duration.hours}{" "}
      {normalizeCount(item.duration.hours, ["час", "часа", "часов"])}
    </>
  );
  return (
    <div className="rounded-[40px] flex flex-col bg-[var(--color-partner-card-grey)] overflow-hidden">
      <div className="bg-[var(--color-grey)] h-[200px] md:w-[408px] w-full">
        <div className={`w-full relative pt-[200px]`}>
          <Image
            src={item.images[0].url}
            alt="img"
            objectFit="cover"
            fill
            className={`w-full h-full top-0 left-0 object-cover rounded-rounded-t-lg brightness-[90%]`}
            placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
            priority
          />
        </div>
      </div>
      <div className="p-[30px] flex flex-col justify-between gap-7 h-full">
        <div className="grid gap-3">
          <Typography variant="h5" className="font-medium">
            {item.title}
          </Typography>
          <div className="note-text flex gap-3">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 6.85831C0 3.61134 2.71333 0.986938 5.99539 0.986938C9.28669 0.986938 12 3.61134 12 6.85831C12 8.4945 11.405 10.0135 10.4256 11.301C9.34506 12.7212 8.0133 13.9586 6.51428 14.9299C6.1712 15.1543 5.86157 15.1713 5.48503 14.9299C3.97747 13.9586 2.64571 12.7212 1.57447 11.301C0.594343 10.0135 0 8.4945 0 6.85831ZM4.01953 7.04108C4.01953 8.12882 4.90713 8.98433 5.99545 8.98433C7.08449 8.98433 7.98063 8.12882 7.98063 7.04108C7.98063 5.96182 7.08449 5.06467 5.99545 5.06467C4.90713 5.06467 4.01953 5.96182 4.01953 7.04108Z"
                fill="black"
              />
            </svg>
            {daysVal}
            {hoursVal}
          </div>
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
