import { SUB_ELEMENT_TYPE } from "@/types/types";
import { TextBlock } from "../TextBlock/TextBlock";
import { LinkBlock } from "../LinkBlock/LinkBlock";
import { LongReadItemBlock } from "../LongReadItemBlock/LongReadItemBlock";
import { AddressBlock } from "../AddressBlock/AddressBlock";
import { FactBlock } from "../FactBlock/FactBlock";
import "./style.css";
import { Typography } from "../../Typography/Typography";

const createElement = (subElementType: SUB_ELEMENT_TYPE, props: any) => {
  if (subElementType === SUB_ELEMENT_TYPE.TEXT_BLOCK) {
    return <TextBlock {...props} />;
  }
  if (subElementType === SUB_ELEMENT_TYPE.LINK_BLOCK) {
    return <LinkBlock {...props} />;
  }
  if (subElementType === SUB_ELEMENT_TYPE.LONG_READ_ITEM_BLOCK) {
    return <LongReadItemBlock {...props} />;
  }
  if (subElementType === SUB_ELEMENT_TYPE.ADDRESS_BLOCK) {
    return <AddressBlock {...props} />;
  }
  if (subElementType === SUB_ELEMENT_TYPE.FACT_BLOCK) {
    return <FactBlock {...props} />;
  }
  return null;
};

export const LongReadBlock = ({
  title,
  subElements,
}: {
  title: string;
  subElements: { element: string; text: string }[];
}) => {
  return (
    <div className="longread_block">
      <Typography variant="h3" id={title} className="font-medium">
        {title}
      </Typography>
      {subElements.map((item, index) => (
        <div key={index}>
          {createElement(item.element as SUB_ELEMENT_TYPE, item)}
        </div>
      ))}
    </div>
  );
};
