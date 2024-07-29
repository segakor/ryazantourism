/* eslint-disable @next/next/no-img-element */

import { Typography } from "@/components/elements/Typography/Typography";

/* eslint-disable jsx-a11y/alt-text */
export const Napravleniya = () => {
  const cardData = [
    {
      title: "Стратегическое планирование",
      desc: "Разрабатываем стратегии развития отрасли. Формируем образ региона на туристической карте России",
      imgUrl: "/art/1.png",
    },
    {
      title: "Развитие бизнеса",
      desc: "Привлекаем гранты на развитие идей в области туризма. Помогаем объединять интересы бизнеса, общественности и власти",
      imgUrl: "/art/2.png",
    },
    {
      title: "Коммуникации",
      desc: "Создаем и модерируем профессиональные дискуссии. Курируем межведомственные проекты по туризму",
      imgUrl: "/art/3.png",
    },
    {
      title: "Имидж региона",
      desc: "Участвуем в выставках, представляем туристический потенциал области",
      imgUrl: "/art/4.png",
    },
    {
      title: "Аналитика",
      desc: "Обрабатываем обратную связь от бизнеса, общественности, туристов. Проводим аудиты качества услуг в сфере туризма",
      imgUrl: "/art/5.png",
    },
    {
      title: "Консультация и обучение",
      desc: "Проводим обучение для представителей отрасли и общественных организаций, стратегические сессии по урбанистике и развитию туристической отрасли в регионе",
      imgUrl: "/art/6.png",
    },
    {
      title: "Туристические проекты",
      desc: "Создаем турпродукт для привлечения потока гостей региона",
      imgUrl: "/art/7.png",
    },
  ];

  return (
    <div className="pt-24 overflow-x-scroll no-scrollbar">
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPathDirectionCard" clipPathUnits="objectBoundingBox">
            <path
              d="M0.949,0 H0.718 C0.69,0,0.667,0.023,0.667,0.051 V0.051 C0.667,0.08,0.644,0.103,0.615,0.103 H0.051 C0.023,0.103,0,0.126,0,0.154 V0.949 C0,0.977,0.023,1,0.051,1 H0.949 C0.977,1,1,0.977,1,0.949 V0.051 C1,0.023,0.977,0,0.949,0"
              fill="black"
            ></path>
          </clipPath>
        </defs>
      </svg>
      <Typography variant="h2" className="mb-16 text-center">Направления деятельности</Typography>
      <div className="flex gap-5 md:justify-center md:flex-wrap justify-normal flex-nowrap overflow-x-scroll no-scrollbar">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="flex-[0_0_19.6875rem] md:flex-[0_1_23rem] group/item flex-col min-h-[24.375rem] bg-[#f0f0f0] rounded-xl hover:bg-[var(--color-green)] transition-all"
            style={{
              clipPath: 'url("#svgPathDirectionCard")',
            }}
          >
            <div className="flex justify-end items-end mt-4 md:pr-7 pr-5">
              <div className="flex items-center justify-center w-[4.375rem] h-[4.375rem] bg-white rounded-lg">
                <img src={item.imgUrl} />
              </div>
            </div>
            <div className="p-10">
              <div className="text-2xl font-medium mb-5">{item.title}</div>
              <p className="text-base text-gray-400 group-hover/item:text-black transition-all">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
