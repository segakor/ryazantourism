"use client";
import { useState } from "react";
import { Tags } from "@/components/elements/Tags/Tags";
import { TagList, TPlaceCard } from "@/types/types";
import Image from "next/image";
import { createShimmer } from "@/utils/shimer";
import { Typography } from "@/components/elements/Typography/Typography";
import { ButtonLink } from "@/components/elements/ButtonNew";
import program from "../../../public/tags/program.svg";
import Link from "next/link";

export const PlaceCard = ({ data }: { data: TPlaceCard[] }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mb-40">
      {data?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

const Card = ({ item }: { item: TPlaceCard }) => {
  const findLoyaltyIndex = item.description.indexOf("Программа лояльности:");
  const loyaltyText =
    findLoyaltyIndex > 0 &&
    item.description
      .substring(findLoyaltyIndex, item.description.length)
      .replace("Программа лояльности:", "");
  const text =
    findLoyaltyIndex > 0
      ? item.description.substring(0, findLoyaltyIndex)
      : item.description;

  const [isFullText, setIsFullText] = useState(false);

  const textLength = text.length > 254;

  const notFullText =
    textLength && !isFullText ? text?.slice(0, 254) + " ..." : text;

  const tags = item.tags.map((item) => item.id) as TagList[];

  return (
    <div className="rounded-[40px] flex flex-col bg-[var(--color-partner-card-grey)] shadow-lg overflow-hidden">
      <div className="relative">
        <div className="absolute p-7 z-[2]">
          <Tags tags={tags} />
        </div>
        <div className="grid h-[200px] w-full rounded-t-[40px] overflow-hidden">
          <div className={`w-full relative`}>
            <Image
              src={item.image_path}
              alt="img"
              objectFit="cover"
              fill
              className={`w-full h-full top-0 left-0 object-cover rounded-rounded-t-lg  brightness-[90%]`}
              placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="p-[30px] flex flex-col justify-between h-full">
        <div className="grid gap-3">
          <Typography variant="h5" className="font-semibold">
            {item.name}
          </Typography>
          <div className="partner-card-text flex gap-2">
            <span>
              {notFullText}{" "}
              {textLength && !isFullText && (
                <a
                  className="text-[var(--color-purple)] cursor-pointer"
                  onClick={() => setIsFullText(true)}
                >
                  Показать полностью
                </a>
              )}
            </span>
          </div>
          <div className="note-text flex gap-2">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="min-w-3 min-h-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 6.85831C0 3.61134 2.71333 0.986938 5.99539 0.986938C9.28669 0.986938 12 3.61134 12 6.85831C12 8.4945 11.405 10.0135 10.4256 11.301C9.34506 12.7212 8.0133 13.9586 6.51428 14.9299C6.1712 15.1543 5.86157 15.1713 5.48503 14.9299C3.97747 13.9586 2.64571 12.7212 1.57447 11.301C0.594343 10.0135 0 8.4945 0 6.85831ZM4.01953 7.04108C4.01953 8.12882 4.90713 8.98433 5.99545 8.98433C7.08449 8.98433 7.98063 8.12882 7.98063 7.04108C7.98063 5.96182 7.08449 5.06467 5.99545 5.06467C4.90713 5.06467 4.01953 5.96182 4.01953 7.04108Z"
                fill="black"
              />
            </svg>
            {item.address}
          </div>
        </div>
        <div className="grid">
          {loyaltyText && (
            <Link
              href="https://t.me/visitRyazanBot"
              target="_blank"
              className="flex items-center text-[var(--color-blue)] hover:text-[var(--color-green)] transition-all gap-3 mt-3 styled_link"
            >
              <div className="min-w-[40px] min-h-[40px]">
                <Image
                  priority
                  src={program}
                  alt={"tag"}
                  width={40}
                  unoptimized
                />
              </div>
              <div className="loyalty-text">{loyaltyText}</div>
            </Link>
          )}
          <ButtonLink
            href={item.url}
            variant="greenBlack"
            wide
            target="_blank"
            className="mt-3"
          >
            Подробнее
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
