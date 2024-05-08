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
  ADRESS_BLOCK = "ADRESS_BLOCK"
}

export type LongReadBody = {
  element: ELEMENT_TYPE;
  subElements: {
    element: SUB_ELEMENT_TYPE;
  }[];
  title?:string;
};
