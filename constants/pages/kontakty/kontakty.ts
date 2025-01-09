import { emails } from "@/constants/contstants";

export const template = [
  {
    element: "LONG_READ_BLOCK",
    title: "Туристский информационный центр",
    subElements: [
      {
        element: "TEXT_BLOCK",
        text: `Находится в самом центре Рязани на Почтовой, 54.\n\n Пн-вс 10.00—18.00\n\n+7 (4912) 77 74 14, +7 (910) 577 03 03\n\nМожно написать нашим сотрудникам в <a href='https://play.google.com/store/apps/details?id=app.turizm.ryzan&pli=1' target='_blank'>Телеграм</a> и <a href='https://play.google.com/store/apps/details?id=app.turizm.ryzan&pli=1' target='_blank'>WhatsApp</a>. Мы на связи в рабочее время с 10.00 до 18.00.\n\n<a href='mailto:${emails.cit}'>${emails.cit}</a>`,
      },
    ],
  },
  {
    element: "LONG_READ_BLOCK",
    title: "АНО «Агентство развития туризма Рязанской области»",
    subElements: [
      {
        element: "TEXT_BLOCK",
        text: `Рязань, Право-Лыбедская, 27а2, офис 147\n\nПн-пт 9.00—18.00\n\n+7 (4912) 95 62 00\n\n<a href='mailto:${emails.art}'>${emails.art}</a>`,
      },
    ],
  },
  {
    element: "LONG_READ_BLOCK",
    title: "Комитет инвестиций и туризма Рязанской области",
    subElements: [
      {
        element: "TEXT_BLOCK",
        text: "Рязань, Семинарская, 15, корп. 2\n\nПн-чт 9.00—18.00, пт 9.00—16.45\n\n+7 (4912) 70 71 30 (отдел развития туризма)\n\n<a target='_blank' href='https://investturkom.ryazan.gov.ru'>investturkom.ryazan.gov.ru</a>",
      },
    ],
  },
];
