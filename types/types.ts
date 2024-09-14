export enum ELEMENT_TYPE {
  LEAD_BLOCK = "LEAD_BLOCK",
  FACT_BLOCK = "FACT_BLOCK",
  QUOTE_BLOCK = "QUOTE_BLOCK",
  LONG_READ_BLOCK = "LONG_READ_BLOCK",
  SINGLE_BLOCK = "SINGLE_BLOCK",
}

export enum SUB_ELEMENT_TYPE {
  TEXT_BLOCK = "TEXT_BLOCK",
  LONG_READ_ITEM_BLOCK = "LONG_READ_ITEM_BLOCK",
  LINK_BLOCK = "LINK_BLOCK",
  FACT_BLOCK = "FACT_BLOCK",
}

export type TLongReadBody = {
  element: ELEMENT_TYPE;
  subElements?: {
    element: SUB_ELEMENT_TYPE;
  }[];
  title?: string;
};

export type TagList = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type TPlaceCard = {
  name: string; // название карточки
  address: string; //address
  url_name: string; //название кнопки
  url: string; //  ссылка на кнопке
  description: string;
  image_path: string;
  tags: { id: number; name: string }[];
  category: { name: string };
  template: TLongReadBody[];
};

export type TArchCard = {
  id: number;
  title: string; // название карточки
  address: string; //address
  desc: string;
  imgUrl: string;
  tags: { id: number; name: number }[];
  category: { name: string };
};

export type ResponsePlaceCard = { data: TPlaceCard[] };

export type TNasledieCard = {
  id: number;
  title: string;
  desc: string;
  imgUrl: string;
  template: TLongReadBody[];
};

export type TOtvet = {
  question: string;
  answer: { title: string; desc: string }[];
  keyword: string[];
  category: { name: string };
};

export type TDocument = {
  type: string;
  name: string;
  link: string;
  year?: string;
};

export type TGid = {
  fio: string;
  shortDecs: string;
  desc: string;
  phone: string;
  srcImg: string;
};

export type TSinglyRoutes = {
  id: number;
  title: string;
  category: { name: string };
  /*   duration: { days: number; hours: number; minutes: number }; */
  imgUrl: string;
  template: TLongReadBody[];
};

export type TSinglyRoutesDetails = {
  description: string;
  images: { url: string }[];
  title: string;
  sights: {
    id: number;
    image_path: string;
    name: string;
    point_x: number;
    point_y: number;
  }[];
  duration: { days: number; hours: number; minutes: number };
};

export type ResponseSinglyRoutes = { data: TSinglyRoutes[] };

export type ResponseSinglyRoutesDetails = TSinglyRoutesDetails;

export type TBibliotekaNavigation = {
  id: string;
  imgUrl: string;
  title: string;
  desc: string;
  path: string;
};

export type TPosmotretCard = {
  title: string;
  desc: string;
  prolongation: number;
  date: string;
  imgUrl: string;
  linkName: string;
  link: string;
};

export type TPoslushatCard = {
  title: string;
  desc: string;
  prolongation: number;
  date: string;
  imgUrl: string;
  linkIzi?: string;
  linkYa?: string;
};

export type TPochitatCard = {
  title: string;
  desc: string;
  imgUrl: string;
  linkLitres?: string;
  linkOzon?: string;
  tag?: string[];
  fileUrl?: string;
  defaultLink?: string;
};

export type TNewsArt = {
  id: number;
  title: string;
  desc: string;
  imgUrl: string;
};

export type TPromTurizmCard = {
  title: string;
  desc: string;
  address: string;
  ageLimit: number;
  tag: Array<"group" | "school" | "student" | "individual">;
  imgUrl: string[];
  popupDesc: string;
  url: string;
};

export type TOrgEventCard = {
  id: number;
  title: string;
  imgUrl: string;
  dates: string[];
  includePrice: string;
  price: string;
  days: string;
  template: TLongReadBody[];
};

export type TNews = {
  id: number;
  title: string;
  desc: string;
  imgUrl: string;
  date: string;
};

export type TMailBody = {
  tour: string;
  fio: string;
  tel: string;
  date: string;
  count: string;
};

export type TEventCardMain = {
  name: string;
  buy_ticket_url: string;
  image_path: string;
  tags: { id: number }[];
  description: string;
  event_date: string;
};
