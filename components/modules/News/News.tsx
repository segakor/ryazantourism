/* eslint-disable @next/next/no-img-element */
import { ButtonLink } from "@/components/elements/ButtonNew";
import "./style.css";
import { Typography } from "@/components/elements/Typography/Typography";
import { TNews } from "@/types/types";
import { parse } from "date-fns";
import Link from "next/link";

type Props = {
  type: "city" | "art";
  news: TNews[];
};

export const News = ({ type, news }: Props) => {
  const dict = {
    city: {
      title: "Актуальная информация о происходящем в регионе",
      href: "/ty-s-mestnym/novosty-regiona",
    },
    art: {
      title: "Актуальная информация о происходящем в туризме",
      href: "/professionalam/novosti-art",
    },
  };

  const getDate = (date: string) => {
    const d = parse(date, "dd.MM.yyyy", new Date());

    return d
      .toLocaleString("ru", {
        day: "numeric",
        year: "numeric",
        month: "long",
      })
      .split(" ");
  };

  return (
    <div
      className={`grid md:gap-20 gap-10  ${
        type === "art" && "md:max-w-[82.5rem] md:m-auto"
      }`}
    >
      <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between">
        <Typography variant="h2" className="font-medium">
          {dict[type].title}
        </Typography>
        <div className="w-[247px]">
          <ButtonLink href={dict[type].href} variant="greenBlack">
            Все новости
          </ButtonLink>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(4,minmax(308px,1fr))] gap-6 overflow-x-scroll md:overflow-x-visible">
        {news.map((item, index) => (
          <Link
            href={`${dict[type].href}/${item.id}`}
            className="news_card hover:bg-[#b9fa4f] transition-all group/item"
            key={index}
          >
            <div className="h6 news_card_title">{item.title}</div>
            <img
              className="group-hover/item:opacity-100 opacity-0 transition-all"
              src={"/news/arrows.svg"}
              alt=""
            />
            <div className="grid gap-1">
              <Typography variant="h3" className="font-medium">
                {getDate(item.date)[0]}
              </Typography>
              <Typography variant="h6" className="font-medium">
                {getDate(item.date)[1]} {getDate(item.date)[2]}
              </Typography>
            </div>
          </Link>
        ))}
      </div>
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPathNewsCard" clipPathUnits="objectBoundingBox">
            <path
              d="M0.065,0 C0.029,0,0,0.021,0,0.048 V0.952 C0,0.979,0.029,1,0.065,1 H0.935 C0.971,1,1,0.979,1,0.952 V0.143 C1,0.117,0.971,0.095,0.935,0.095 H0.61 C0.575,0.095,0.545,0.074,0.545,0.048 V0.048 C0.545,0.021,0.516,0,0.481,0 H0.065"
              fill="black"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
