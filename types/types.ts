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

export type TagList = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

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
  active: boolean;
};

export type TArchCard = {
  id: number;
  title: string;
  subTitle: string;
  address: string;
  storage_image: TStorageImage;
  category: string;
  tags: TagList[];
  template: string;
  contacts: string;
};

export type ResponsePlaceCard = { data: TPlaceCard[] };

export type TNasledieCard = {
  id: number;
  title: string;
  desc: string;
  imgUrl: string;
  template: TLongReadBody[];
  sideBarText?: string;
};

export type TOtvet = {
  id: number;
  title: string;
  answers: { title: string; template: string }[];
  keywords: string;
  category: string;
};

export type TDocument = {
  type: string;
  name: string;
  link: string;
  year?: string;
};

export type TGid = {
  id: number;
  title: string;
  fio: string;
  phone: string;
  isActive: boolean;
  bodyText: string;
  imageId: number;
  storage_image: TStorageImage;
};

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

export type TStorageImage = {
  imagePath: string;
};
export type TNews = {
  id: number;
  title: string;
  bodyText: string;
  storage_image: TStorageImage;
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
  active: boolean;
};

export type TOrganizovannyeMarshruty = {
  id: number;
  title: string;
  email: string;
  dates: string[];
  price: string;
  includePrice: string;
  days: string;
  storage_image: TStorageImage;
  template: string;
};

export type TSamostoyatelnyeMarshruty = {
  id: number;
  title: string;
  subTitle: string;
  storage_image: TStorageImage;
  category: string;
  tags: number[];
  template: string;
  linkPath: string;
  sequence: number;
};
