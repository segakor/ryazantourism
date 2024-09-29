export const url = {
  apple: "https://apps.apple.com/us/app/рязань-путеводитель/id6449663634",
  android:
    "https://play.google.com/store/apps/details?id=app.turizm.ryzan&pli=1",
  vk: "https://vk.com/ryazantourism",
  tg: "https://t.me/visitryazan",
  ok: "https://ok.ru/groupryazantourism",
  dzen: "https://dzen.ru/tiruzmrzn",
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
    item: "Туристам",
    subItem: [
      { label: "Визит-центр для туристов", path: "/ty-s-mestnym/cit" },
      { label: "Новости региона", path: "/ty-s-mestnym/novosty-regiona" },
      { label: "Ответы на вопросы", path: "/ty-s-mestnym/otvety-na-voprosy" },
      { label: "Ваши отзывы", path: "/ty-s-mestnym/obratnaya-svyaz" },
      {
        label: "Мобильное приложение",
        path: "/ty-s-mestnym/mobilnoe-prilozhenie",
      },
    ],
  },
  {
    item: "Профессионалам",
    subItem: [
      {
        label: "Агентство развития туризма",
        path: "/professionalam/agentstvo-razvitiya-turizma",
      },
      { label: "База знаний", path: "/professionalam/baza-znanij" },
      {
        label: "Реестр туроператоров",
        path: "/professionalam/reestr-turoperatorov",
      },
      { label: "Новости АРТ", path: "/professionalam/novosti-art" },
    ],
  },
  {
    item: "Проекты",
    subItem: [
      { label: "Рязань в медиа", path: "/biblioteka" },
      { label: "Промтуризм", path: "/promturizm" },
      {
        label: "Мампус",
        path: "http://apps-rzn.site/mampus",
        target: "_blank",
      },
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
    imgUrl: "/bibliotekaNavigation/posmotret_small.jpg",
    title: "Посмотреть",
    desc: "В Рязань любят приезжать блогеры и журналисты. Смотрите, зачем",
    path: "/biblioteka/posmotret",
  },
  {
    id: "pochitat",
    imgUrl: "/bibliotekaNavigation/pochitat_small.jpg",
    title: "Почитать",
    desc: "Что нужно узнать о Рязани и области, прежде чем собраться в гости",
    path: "/biblioteka/pochitat",
  },
  {
    id: "poslushat",
    imgUrl: "/bibliotekaNavigation/poslushat_small.jpg",
    title: "Послушать",
    desc: "Для тех, кто любит ушами: аудиогиды, подкасты и личные истории",
    path: "/biblioteka/poslushat",
  },
  {
    id: "vdohnovitsiya",
    imgUrl: "/bibliotekaNavigation/vdohnovitsiya_small.jpg",
    title: "Вдохновиться",
    desc: "Эти снимки могли стать еще лучше, если бы на них оказались вы",
    path: "/biblioteka/vdohnovitsiya",
  },
];

export const promTurizmNavigation = [
  {
    imgUrl: "/promTurizmNavigation/1.jpg",
    title: "Индивидуальным туристам",
    path: "/promturizm/list?default=individual",
  },
  {
    imgUrl: "/promTurizmNavigation/2.png",
    title: "Туристическим группам",
    path: "/promturizm/list?default=group",
  },
  {
    imgUrl: "/promTurizmNavigation/3.png",
    title: "Школьникам",
    path: "/promturizm/list?default=school",
  },
  {
    imgUrl: "/promTurizmNavigation/4.png",
    title: "Студентам",
    path: "/promturizm/list?default=student",
  },
];

export const heroMap = [
  {
    title: "История",
    desc: "Тысячелетнее путешествие во времени: громкие имена, интересные факты, невероятные сюжеты",
    imgUrl: "/hero/history.png",
    link: "/region/istoriya",
  },
  {
    title: "Культура",
    desc: "Что? Где? Когда? Список заведений и событий, которые стоит включить в план вашей поездки",
    imgUrl: "/hero/culture.png",
    link: "/region/kultura",
  },
  {
    title: "Природа",
    desc: "Вам дворцов заманчивые своды не заменят никогда свободы? Выбирайте, куда выбраться из города",
    imgUrl: "/hero/nature.png",
    link: "/region/priroda",
  },
  {
    title: "Кухня Рязанского края",
    desc: "Гастрономический фестиваль и лучшие локальные блюда в меню местных ресторанов",
    imgUrl: "/hero/food.png",
    link: "/region/kuhnya-ryazanskogo-kraya",
  },
  {
    title: "Архитектура",
    desc: "Путеводитель по значимым постройкам с XVI века до наших дней. В объективе Рязань и область",
    imgUrl: "/hero/architecture.png",
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

export const tabsVdohnovitsiya = [
  { label: "Все", id: "all" },
  { label: "Рязань", id: "Рязань" },
  { label: "Солотча", id: "Солотча" },
  { label: "Деревянное зодчество", id: "Деревянное зодчество" },
  { label: "Касимов", id: "Касимов" },
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
  { label: "Однодневные", id: "Однодневные" },
  { label: "Многодневные", id: "Многодневные" },
];

export const tabsPromTurizm = [
  { label: "Все", id: "all" },
  { label: "Индивидуальным туристам", id: "individual" },
  { label: "Туристическим группам", id: "group" },
  { label: "Школьникам", id: "school" },
  { label: "Студентам", id: "student" },
];

export const organizedBannerCard = [
  {
    title: "Вас встретят",
    desc: "Каждую субботу с конца апреля по конец октября мы встречаем гостей города около «АМАКС Конгресс-отель» (Первомайский просп., 54). Время старта 12.00.",
    srcImg: "/routesCard/icon_1.png",
  },
  {
    title: "Покажут лучшее",
    desc: "Профессиональные гиды проведут для вас бесплатную обзорную экскурсию по Рязани и познакомят с нашими главными достопримечательностями.",
    srcImg: "/routesCard/icon_2.png",
  },
  {
    title: "Расскажут о самом полезном и выгодном",
    desc: "Вы узнаете о локальных сервисах, которые помогут сэкономить время, деньги и нервы в вашей поездке.",
    srcImg: "/routesCard/icon_3.png",
  },
  {
    title: "Обеспечат необходимым",
    desc: "Конечная точка экскурсии — гостеприимный визит-центр на пешеходной улице Почтовой. Здесь вы найдете материалы для отдыха или дальнейшего самостоятельного изучения города: путеводитель проекта, карту Рязани, тематические буклеты и сувениры.",
    srcImg: "/routesCard/icon_4.png",
  },
];

export const napravleniyaArt = [
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
