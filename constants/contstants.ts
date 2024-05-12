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
      { label: "Кухня Рязанского края", path: "/region/kuhnya-ryazanskogo-kraya" },
      { label: "Архитектура", path: "/region/arhitektura" },
      { label: "События", path: "/region/sobytiya" },
      { label: "Наследие Рязани", path: "/region/nasledie-ryazani" },
      { label: "Наследие Касимова", path: "/region/nasledie-kasimova" },
    ],
  },
  {
    item: "Идеи для путешествия",
    subItem: [
      { label: "Что посмотреть?", path: "/idei-dlya-puteshestviya/chto-posmotret" },
      { label: "Чем заняться?", path: "/idei-dlya-puteshestviya/chem-zanyatsya" },
      { label: "Где поесть?", path: "/idei-dlya-puteshestviya/gde-poest" },
      { label: "Где остановиться?", path: "/idei-dlya-puteshestviya/gde-ostanovitsya" },
      { label: "Сувениры", path: "/idei-dlya-puteshestviya/suveniry" },
      { label: "Вечер в городе", path: "/idei-dlya-puteshestviya/vecher-v-gorode" },
      { label: "Здоровье", path: "/idei-dlya-puteshestviya/zdorove" },
    ],
  },
  {
    item: "Ты с местными",
    subItem: [
      { label: "Визит центр для туристов", path: "/istoria" },
      { label: "Ответы на вопросы", path: "/Культура" },
      { label: "Ваши отзывы", path: "/Природа" },
      { label: "Мобильное приложение", path: "/Кухня Рязанского края" },
    ],
  },
  {
    item: "Маршруты",
    subItem: [
      { label: "Организованные машруты", path: "/istoria" },
      { label: "Самостоятельные машруты", path: "/istoria" },
    ],
  },
  {
    item: "Профессионалам",
    subItem: [
      { label: "Агенство развития туризма", path: "/istoria" },
      { label: "Проекты", path: "/istoria" },
      { label: "База знаний", path: "/istoria" },
      { label: "Реестр туроператоров", path: "/istoria" },
      { label: "Новости арт", path: "/istoria" },
    ],
  },
  {
    item: "Галерея",
    subItem: [],
    path: "/istoria",
  },
  {
    item: "Контакты",
    subItem: [],
    path: "/istoria",
  },
];

export const mainNavigation = [
  {
    imgUrl: "/mainNavigation/navigation1.jpg",
    title: "Что посмотреть?",
    desc: "Все популярные объекты города и области",
  },
  {
    imgUrl: "/mainNavigation/navigation2.jpg",
    title: "Чем заняться?",
    desc: "Подсказки для творческих, активных и неугомонных путешественников",
  },
  {
    imgUrl: "/mainNavigation/navigation3.jpg",
    title: "Где поесть?",
    desc: "Самые вкусные заведения Рязанской области",
  },
  {
    imgUrl: "/mainNavigation/navigation4.jpg",
    title: "Где остановиться?",
    desc: "От модного отеля в центре до уютного глемпинга в сельской глубинке",
  },
  {
    imgUrl: "/mainNavigation/navigation5.jpg",
    title: "Сувениры",
    desc: "Что привезти с собой из путешествия",
  },
  {
    imgUrl: "/mainNavigation/navigation6.jpg",
    title: "Вечер в городе",
    desc: "Развлечения на любой вкус",
  },
  {
    imgUrl: "/mainNavigation/navigation7.jpg",
    title: "Здоровье",
    desc: "Для тех, кто совмещает отдых и заботу об организме",
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
  { label: "Музеи", id: "museums" },
  { label: "Архитектура", id: "architecture" },
  { label: "Природа", id: "nature" },
  { label: "Памятники", id: "monuments" },
  { label: "Арт-объекты", id: "artObjects" },
  { label: "Театры", id: "theaters" },
]

export const tabsChemZanyatsya = [
  { label: "Все", id: "all" },
  { label: "Развлечения", id: "Развлечения" },
  { label: "Творчество", id: "Творчество" },
  { label: "Частные музеи", id: "Частные музеи" },
  { label: "Активный отдых", id: "Активный отдых" },
]

export const tabsGdePoest = [
  { label: "Все", id: "all" },
  { label: "Рестораны", id: "Рестораны" },
  { label: "Кофейни", id: "Кофейни" },
  { label: "Стритфуд", id: "Стритфуд" },
 
]

export const tabGdePoest = [
  { label: "Все", id: "all" },
  { label: "Отели", id: "Отели" },
  { label: "Гостевые дома", id: "Гостевые дома" },
  { label: "Глэмпинг", id: "Глэмпинг" },
]

export const tabsVecherVGorode = [
  { label: "Все", id: "all" },
  { label: "Бары", id: "Бары" },
  { label: "Кальянные", id: "Кальянные" },
]

export const tabsZdorove = [
  { label: "Все", id: "all" },
  { label: "Стоматология", id: "Стоматология" },
  { label: "Клиники", id: "Клиники" },
  { label: "Санатории", id: "Санатории" },
  { label: "Студии красоты и здоровья", id: "Студии красоты и здоровья" },
]