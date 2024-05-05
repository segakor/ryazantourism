import { SUB_ELEMENT_TYPE } from "@/types/types";
import { TextBlock } from "./TextBlock";
import { LinkBlock } from "./LinkBlock";
import { LongReadItemBlock } from "./LongReadItemBlock";

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
      <div className="h3" id={title}>{title}</div>
      {subElements.map((item, index) => (
        <div key={index}>
          {createElement(item.element as SUB_ELEMENT_TYPE, item)}
        </div>
      ))}
    </div>
  );
};
