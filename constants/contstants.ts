export const url = {
  apple: "https://apps.apple.com/us/app/рязань-путеводитель/id6449663634",
  android:
    "https://play.google.com/store/apps/details?id=app.turizm.ryzan&pli=1",
  vk: "https://vk.com/ryazantourism",
  tg: "https://t.me/visitryazan",
  ok: "https://ok.ru/groupryazantourism",
};

export const headerMenu = [
  {
    item: "Регион",
    subItem: [
      { label: "История", path: "/region/istoriya" },
      { label: "Культура", path: "/region/kultura" },
      { label: "Природа", path: "/region/priroda" },
      {
        label: "Кухня Рязанского края",
        path: "/region/kuhnya-ryazanskogo-kraya",
      },
      { label: "Архитектура", path: "/region/arhitektura" },
      { label: "События", path: "/region/sobytiya" },
      { label: "Наследие Рязани", path: "/region/nasledie-ryazani" },
      { label: "Наследие Касимова", path: "/region/nasledie-kasimova" },
    ],
  },
  {
    item: "Идеи для путешествия",
    subItem: [
      {
        label: "Что посмотреть?",
        path: "/idei-dlya-puteshestviya/chto-posmotret",
      },
      {
        label: "Чем заняться?",
        path: "/idei-dlya-puteshestviya/chem-zanyatsya",
      },
      { label: "Где поесть?", path: "/idei-dlya-puteshestviya/gde-poest" },
      {
        label: "Где остановиться?",
        path: "/idei-dlya-puteshestviya/gde-ostanovitsya",
      },
      { label: "Сувениры", path: "/idei-dlya-puteshestviya/suveniry" },
      {
        label: "Вечер в городе",
        path: "/idei-dlya-puteshestviya/vecher-v-gorode",
      },
      { label: "Здоровье", path: "/idei-dlya-puteshestviya/zdorove" },
    ],
  },
  {
    item: "Инфо-центр",
    subItem: [
      { label: "Визит центр для туристов", path: "/ty-s-mestnym/cit" },
      { label: "Ответы на вопросы", path: "/ty-s-mestnym/otvety-na-voprosy" },
      { label: "Ваши отзывы", path: "/ty-s-mestnym/obratnaya-svyaz" },
      {
        label: "Мобильное приложение",
        path: "/ty-s-mestnym/mobilnoe-prilozhenie",
      },
    ],
  },
  {
    item: "Маршруты",
    subItem: [
      {
        label: "Организованные машруты",
        path: "/marshruty/organizovannye-marshruty",
      },
      {
        label: "Самостоятельные машруты",
        path: "/marshruty/samostoyatelnye-marshruty",
      },
    ],
  },
  {
    item: "Профессионалам",
    subItem: [
      {
        label: "Агенство развития туризма",
        path: "/professionalam/agentstvo-razvitiya-turizma",
      },
      { label: "База знаний", path: "/professionalam/baza-znanij" },
      {
        label: "Реестр туроператоров",
        path: "/professionalam/reestr-turoperatorov",
      },
      { label: "Новости арт", path: "/professionalam/novosti-art" },
    ],
  },
  {
    item: "Проекты",
    subItem: [
     /*  {
        label: "Промтуризм",
        path: "/professionalam/agentstvo-razvitiya-turizma",
      },
      {
        label: "Автотуризм",
        path: "/professionalam/agentstvo-razvitiya-turizma",
      }, */
      { label: "Библиотека", path: "/biblioteka" },
      /* { label: "Школа", path: "/professionalam/agentstvo-razvitiya-turizma" }, */
    ],
  },
  {
    item: "Контакты",
    subItem: [],
    path: "/kontakty",
  },
];

export const mainNavigation = [
  {
    imgUrl: "/mainNavigation/navigation1.jpg",
    title: "Что посмотреть?",
    desc: "Все популярные объекты города и области",
    path: "/idei-dlya-puteshestviya/chto-posmotret",
  },
  {
    imgUrl: "/mainNavigation/navigation2.jpg",
    title: "Чем заняться?",
    desc: "Подсказки для творческих, активных и неугомонных путешественников",
    path: "/idei-dlya-puteshestviya/chem-zanyatsya",
  },
  {
    imgUrl: "/mainNavigation/navigation3.jpg",
    title: "Где поесть?",
    desc: "Самые вкусные заведения Рязанской области",
    path: "/idei-dlya-puteshestviya/gde-poest",
  },
  {
    imgUrl: "/mainNavigation/navigation4.jpg",
    title: "Где остановиться?",
    desc: "От модного отеля в центре до уютного глемпинга в сельской глубинке",
    path: "/idei-dlya-puteshestviya/gde-ostanovitsya",
  },
  {
    imgUrl: "/mainNavigation/navigation5.jpg",
    title: "Сувениры",
    desc: "Что привезти с собой из путешествия",
    path: "/idei-dlya-puteshestviya/suveniry",
  },
  {
    imgUrl: "/mainNavigation/navigation6.jpg",
    title: "Вечер в городе",
    desc: "Развлечения на любой вкус",
    path: "/idei-dlya-puteshestviya/vecher-v-gorode",
  },
  {
    imgUrl: "/mainNavigation/navigation7.jpg",
    title: "Здоровье",
    desc: "Для тех, кто совмещает отдых и заботу об организме",
    path: "/idei-dlya-puteshestviya/zdorove",
  },
];

export const bibliotekaNavigation = [
  {
    id: "posmotret",
    imgUrl: "/bibliotekaNavigation/1.png",
    title: "Посмотреть",
    desc: "В Рязань любят приезжать блогеры и журналисты. Смотрите, зачем",
    path: "/posmotret",
  },
  {
    id: "pochitat",
    imgUrl: "/bibliotekaNavigation/2.png",
    title: "Почитать",
    desc: "Что нужно узнать о Рязани и области, прежде чем собраться в гости",
    path: "/pochitat",
  },
  {
    id: "poslushat",
    imgUrl: "/bibliotekaNavigation/3.png",
    title: "Послушать",
    desc: "Для тех, кто любит ушами: аудиогиды, подкасты и личные истории",
    path: "/poslushat",
  },
  {
    id: "vdohnovitsiya",
    imgUrl: "/bibliotekaNavigation/4.png",
    title: "Вдохновиться",
    desc: "Эти снимки могли стать еще лучше, если бы на них оказались вы",
    path: "/vdohnovitsiya",
  },
];

export const heroMap = [
  {
    title: "История",
    desc: "Тысячелетнее путешествие во времени: громкие имена, интересные факты, невероятные сюжеты",
    imgUrl: "/hero/hero1.jpg",
    link: "/region/istoriya",
  },
  {
    title: "Культура",
    desc: "Что? Где? Когда? Список заведений и событий, которые стоит включить в план вашей поездки",
    imgUrl: "/hero/hero2.jpg",
    link: "/region/kultura",
  },
  {
    title: "Природа",
    desc: "Вам дворцов заманчивые своды не заменят никогда свободы? Выбирайте, куда выбраться из города",
    imgUrl: "/hero/hero3.jpg",
    link: "/region/priroda",
  },
  {
    title: "Кухня рязанского края",
    desc: "Гастрономический фестиваль и лучшие локальные блюда в меню местных ресторанов",
    imgUrl: "/hero/hero4.jpg",
    link: "/region/kuhnya-ryazanskogo-kraya",
  },
  {
    title: "Архитектура",
    desc: "Путеводитель по значимым постройкам с XVI века до наших дней. В объективе Рязань и область",
    imgUrl: "/hero/hero5.jpg",
    link: "/region/arhitektura",
  },
];

export const tabsChtoPosmotret = [
  { label: "Все", id: "all" },
  { label: "Музеи", id: "Музеи" },
  { label: "Архитектура", id: "Архитектура" },
  { label: "Природа", id: "Природа" },
  { label: "Памятники", id: "Памятники" },
  { label: "Арт-объекты", id: "Арт-объекты" },
  { label: "Театры", id: "Театры" },
];

export const tabsChemZanyatsya = [
  { label: "Все", id: "all" },
  { label: "Развлечения", id: "Развлечения" },
  { label: "Творчество", id: "Творчество" },
  { label: "Частные музеи", id: "Частные музеи" },
  { label: "Активный отдых", id: "Активный отдых" },
];

export const tabsGdePoest = [
  { label: "Все", id: "all" },
  { label: "Рестораны", id: "Рестораны" },
  { label: "Кофейни", id: "Кофейни" },
  { label: "Стритфуд", id: "Стритфуд" },
];

export const tabsGdeOstanivitsya = [
  { label: "Все", id: "all" },
  { label: "Отели", id: "Отели" },
  { label: "Гостевые дома", id: "Гостевые дома" },
  { label: "Глэмпинг", id: "Глэмпинг" },
];

export const tabsVecherVGorode = [
  { label: "Все", id: "all" },
  { label: "Бары", id: "Бары" },
  { label: "Кальянные", id: "Кальянные" },
];

export const tabsZdorove = [
  { label: "Все", id: "all" },
  { label: "Стоматология", id: "Стоматология" },
  { label: "Клиники", id: "Клиники" },
  { label: "Санатории", id: "Санатории" },
  { label: "Студии красоты и здоровья", id: "Студии красоты и здоровья" },
];

export const tabsSinglyRoutes = [
  { label: "Все", id: "all" },
  { label: "Пеший", id: "Пеший" },
  { label: "Автомобильный", id: "Автомобильный" },
];
