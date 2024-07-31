/* eslint-disable @next/next/no-img-element */
import LinkButton from "@/components/elements/Button/LinkButton";
import "./style.css";
import { Typography } from "@/components/elements/Typography/Typography";

type Props = {
  type: "city" | "art";
};

export const News = ({ type }: Props) => {
  const title = type === "city" ? "Рязани и Рязанской области" : "туризме";

  return (
    <div
      className={`grid md:gap-20 gap-10  ${
        type === "art" && "md:max-w-[82.5rem] md:m-auto"
      }`}
    >
      <div className="flex md:flex-row flex-col md:gap-0 gap-4">
        <Typography variant="h2" className="font-medium">
          Актуальная информация <br></br> о происходящем в {title}
        </Typography>
        <div className="w-[283px]">
          <LinkButton isBlackHover href="">
            Все новости
          </LinkButton>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(4,minmax(308px,1fr))] gap-6 overflow-x-scroll md:overflow-x-visible">
        <div className="news_card hover:bg-[#b9fa4f] transition-all group/item">
          <div className="h6 news_card_title">
            Музейный центр РИАМЗ приглашает на открытие выставки «Связь
            поколений»
          </div>
          <img
            className="group-hover/item:opacity-100 opacity-0 transition-all"
            src={"/news/arrows.svg"}
            alt=""
          />
          <div className="news_card_date">
            <Typography variant="h3" className="font-medium">
              24
            </Typography>
            <div className="h6">марта 2024</div>
          </div>
        </div>
        <div className="news_card hover:bg-[#b9fa4f] transition-all group/item">
          <div className="h6 news_card_title">
            Музейный центр РИАМЗ приглашает на открытие выставки «Связь
            поколений»
          </div>
          <img
            className="group-hover/item:opacity-100 opacity-0 transition-all"
            src={"/news/arrows.svg"}
            alt=""
          />
          <div className="news_card_date">
            <Typography variant="h3" className="font-medium">
              24
            </Typography>
            <div className="h6">марта 2024</div>
          </div>
        </div>
        <div className="news_card hover:bg-[#b9fa4f] transition-all group/item">
          <div className="h6 news_card_title">
            Музейный центр РИАМЗ приглашает на открытие выставки «Связь
            поколений»
          </div>
          <img
            className="group-hover/item:opacity-100 opacity-0 transition-all"
            src={"/news/arrows.svg"}
            alt=""
          />
          <div className="news_card_date">
            <Typography variant="h3" className="font-medium">
              24
            </Typography>
            <div className="h6">марта 2024</div>
          </div>
        </div>
        <div className="news_card hover:bg-[#b9fa4f] transition-all group/item">
          <div className="h6 news_card_title">
            Музейный центр РИАМЗ приглашает на открытие выставки «Связь
            поколений»
          </div>
          <img
            className="group-hover/item:opacity-100 opacity-0 transition-all"
            src={"/news/arrows.svg"}
            alt=""
          />
          <div className="news_card_date">
            <Typography variant="h3" className="font-medium">
              24
            </Typography>
            <div className="h6">марта 2024</div>
          </div>
        </div>
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
