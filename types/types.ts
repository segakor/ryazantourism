export enum ELEMENT_TYPE {
  LEAD_BLOCK = "LEAD_BLOCK",
  FACT_BLOCK = "FACT_BLOCK",
  QUOTE_BLOCK = "QUOTE_BLOCK",
  LONG_READ_BLOCK = "LONG_READ_BLOCK",
}

export enum SUB_ELEMENT_TYPE {
  TEXT_BLOCK = "TEXT_BLOCK",
  LONG_READ_ITEM_BLOCK = "LONG_READ_ITEM_BLOCK",
  LINK_BLOCK = "LINK_BLOCK",
  LIST_BLOCK = "LIST_BLOCK",
  ADDRESS_BLOCK = "ADDRESS_BLOCK",
  FACT_BLOCK = "FACT_BLOCK",
}

export type LongReadBody = {
  element: ELEMENT_TYPE;
  subElements: {
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
};

export type TArchCard = {
  title: string; // название карточки
  address: string; //address
  desc: string;
  imgUrl: string;
  tags: { id: number; name: number }[];
  category: { name: string };
};

export type ResponsePlaceCard = { data: TPlaceCard[] };

export type TOtvet = {
  question: string;
  answer: {title:string; desc:string}[];
  keyword: string[];
  category: { name: string };
};
