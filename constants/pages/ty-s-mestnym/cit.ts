import { emails } from "@/constants/contstants";

export const template = [
  {
    element: "LONG_READ_BLOCK",
    title: "Что такое ТИЦ?",
    subElements: [
      {
        element: "TEXT_BLOCK",
        text: "Привет, турист!\n\nТебя приветствует команда Туристского информационного центра Рязанской области. Мы лучше всех знаем город и область и готовы помочь тебе в поездке. Поможем подобрать гида или спланировать самостоятельное путешествие. Расскажем о самых популярных достопримечательностях или неочевидных объектах, если ты любишь нетривиальные приключения. Посоветуем, где остановиться на ночлег или найти блюда локальной кухни. Мы знаем все об интересном отдыхе с детьми и объясним, как быстро добраться до Касимова, Константинова, Солотчи.\n\nНаш визит-центр находится в самом центре города на Почтовой, 54. Заходи за бесплатной картой города и узнавай все самое интересное о Рязани от местных!",
      },
    ],
  },
  {
    element: "LONG_READ_BLOCK",
    title: "Контакты",
    subElements: [
      {
        element: "TEXT_BLOCK",
        text: `Находится в самом центре Рязани на Почтовой, 54.\n\n Пн-вс 10.00—18.00\n\n+7 (4912) 77 74 14, +7 (910) 577 03 03\n\nМожно написать нашим сотрудникам в <a href='https://play.google.com/store/apps/details?id=app.turizm.ryzan&pli=1' target='_blank'>Телеграм</a> и <a href='https://play.google.com/store/apps/details?id=app.turizm.ryzan&pli=1' target='_blank'>WhatsApp</a>. Мы на связи в рабочее время с 10.00 до 18.00.\n\n<a href='mailto:${emails.cit}'>${emails.cit}</a>`,
      },
      {
        element: "LONG_READ_ITEM_BLOCK",
        srcImg: "https://i.ibb.co/JQ8cWXQ/image.jpg",
      },
    ],
  },
];
