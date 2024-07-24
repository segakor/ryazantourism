"use client";

import { useState } from "react";

const dict = [
  {
    id: "1",
    tab: (
      <>
        <div>
          Формируем
          <br />
          лучший
          <br />
          продукт
        </div>
      </>
    ),
    ul: [
      "Выстраиваем взаимодействие с бизнесом, помогаем идеи переводить в проекты и воплощать в жизнь",
      "Повышаем качество услуг в сфере гостеприимства",
      "Мониторим качество оказываемых услуг. Проводим аудит на соответствие ожиданиям потребителей",
      "Проводим обучающие семинары, дискуссионные площадки, стратегические сессии",
      "Проводим отраслевые конкурсы для бизнеса и персонала индустрии гостеприимства",
      "Сотрудничаем с федеральными организациями и проводим работу в регионах",
      "Разрабатываем и внедряем региональные стандарты гостеприимства",
    ],
  },
  {
    id: "2",
    tab: (
      <>
        <div>
          Привлекаем
          <br />
          для вас
          <br />
          инвестиции
        </div>
      </>
    ),
    ul: [
      "Повышаем качество услуг в сфере гостеприимства",
      "Выстраиваем взаимодействие с бизнесом, помогаем идеи переводить в проекты и воплощать в жизнь",
      "Проводим отраслевые конкурсы для бизнеса и персонала индустрии гостеприимства",
    ],
  },
  {
    id: "3",
    tab: (
      <>
        <div>
          Продвигаем
          <br />
          регион как лучшее
          <br />
          место для туристов
        </div>
      </>
    ),
    ul: [
      "Разрабатываем и внедряем региональные стандарты гостеприимства",
      "Сотрудничаем с федеральными организациями и проводим работу в регионах",
    ],
  },
];

const svgArrows = (
  <svg
    width="130"
    height="22"
    viewBox="0 0 130 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_428_18104)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0L9.4215 1.53237L17.7892 9.9H0V12.1H17.7892L9.4446 20.4445L11 22C15.0271 17.9729 18.1456 14.8544 22 11L11 0Z"
        fill=""
      ></path>
    </g>
    <g clip-path="url(#clip1_428_18104)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 0L45.4215 1.53237L53.7892 9.9H36V12.1H53.7892L45.4446 20.4445L47 22C51.0271 17.9729 54.1456 14.8544 58 11L47 0Z"
        fill=""
        fillOpacity="0.5"
      ></path>
    </g>
    <g clip-path="url(#clip2_428_18104)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M83 0L81.4215 1.53237L89.7892 9.9H72V12.1H89.7892L81.4446 20.4445L83 22C87.0271 17.9729 90.1456 14.8544 94 11L83 0Z"
        fill=""
        fillOpacity="0.2"
      ></path>
    </g>
    <g clip-path="url(#clip3_428_18104)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119 0L117.422 1.53237L125.789 9.9H108V12.1H125.789L117.445 20.4445L119 22C123.027 17.9729 126.146 14.8544 130 11L119 0Z"
        fill=""
        fillOpacity="0.1"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_428_18104">
        <rect width="22" height="22" fill="white"></rect>
      </clipPath>
      <clipPath id="clip1_428_18104">
        <rect
          width="22"
          height="22"
          fill="white"
          transform="translate(36)"
        ></rect>
      </clipPath>
      <clipPath id="clip2_428_18104">
        <rect
          width="22"
          height="22"
          fill="white"
          transform="translate(72)"
        ></rect>
      </clipPath>
      <clipPath id="clip3_428_18104">
        <rect
          width="22"
          height="22"
          fill="white"
          transform="translate(108)"
        ></rect>
      </clipPath>
    </defs>
  </svg>
);

export const TabPanelPoleznyi = () => {
  const [isOpen, setIsOpen] = useState("1");

  const currentDict = dict.filter((item) => item.id === isOpen);

  const scrollIntoView = (elementId?: string) => {
    //@ts-ignore
    document.getElementById(elementId || "").scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const onClick = (id: string) => {
    setIsOpen(id);
    scrollIntoView(id);
  };

  return (
    <div className="md:max-w-[82.5rem] md:m-auto overflow-x-scroll no-scrollbar">
      <h2 className="text-center h2 mb-16">Чем мы можем быть полезны</h2>
      <nav className="flex gap-2 justify-normal md:justify-center overflow-x-scroll no-scrollbar">
        <>
          {dict.map((item, index) => (
            <div
              key={index}
              id={item.id}
              onClick={() => onClick(item.id)}
              className={`flex flex-col flex-[0_0_15.625rem] md:flex-[0_1_15.625rem] bg-[#4f60fa] rounded-2xl cursor-pointer relative  before:absolute 
              before:bg-[url('/art/tabFooter.svg')] before:top-full before:left-[30%] before:w-[86px] mb-[10px]  ${
                isOpen === item.id && "before:h-[10px]"
              } `}
            >
              <div className="p-5">
                <div
                  className={`mb-12  ${
                    isOpen === item.id
                      ? "[&>svg]:fill-white"
                      : "[&>svg]:fill-black"
                  }`}
                >
                  {svgArrows}
                </div>
                <div className="text-white text-lg font-medium">{item.tab}</div>
              </div>
            </div>
          ))}
        </>
      </nav>
      <div className="flex bg-[#4f60fa] rounded-3xl">
        {currentDict.map((item, index) => (
          <ul
            key={index}
            className="md:p-16 p-8 grid md:grid-cols-2 grid-cols-1 gap-x-[3.75rem] gap-y-7 relative"
          >
            {item.ul?.map((item, index) => (
              <li
                key={index}
                className="text-white text-lg
                content-none
                before:absolute 
                before:rounded-[50%] 
                before:w-6 
                before:h-6 
                before:border-solid
                before:border-[8px]
                "
              >
                <div className="pl-10">{item}</div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
