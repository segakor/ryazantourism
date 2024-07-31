"use client";
import "./style.css";
import { QuoteBlock } from "@/components/elements/LongReadBlocks/QuoteBlock/QuoteBlock";
import { FactBlock } from "@/components/elements/LongReadBlocks/FactBlock/FactBlock";
import { LeadBlock } from "@/components/elements/LongReadBlocks/LeadBlock/LeadBlock";
import { ELEMENT_TYPE, TLongReadBody } from "@/types/types";
import { LongReadBlock } from "@/components/elements/LongReadBlocks/LongReadBlock/LongReadBlock";
import { ReactNode } from "react";
import { SingleBlock } from "@/components/elements/LongReadBlocks/SingleBlock/SingleBlock";
import { Typography } from "@/components/elements/Typography/Typography";

const createElement = (elementType: ELEMENT_TYPE, props: any) => {
  if (elementType === ELEMENT_TYPE.FACT_BLOCK) {
    return <FactBlock {...props} />;
  }
  if (elementType === ELEMENT_TYPE.LEAD_BLOCK) {
    return <LeadBlock {...props} />;
  }
  if (elementType === ELEMENT_TYPE.QUOTE_BLOCK) {
    return <QuoteBlock {...props} />;
  }
  if (elementType === ELEMENT_TYPE.LONG_READ_BLOCK) {
    return <LongReadBlock {...props} />;
  }
  if (elementType === ELEMENT_TYPE.SINGLE_BLOCK) {
    return <SingleBlock {...props} />;
  }
  return null;
};

type Props = {
  body: TLongReadBody[];
  children?: ReactNode;
  noMargin?: boolean;
  noSidebar?: boolean;
};

export const LongRead = ({ body, children, noMargin, noSidebar }: Props) => {
  const scrollIntoView = (elementId?: string) => {
    //@ts-ignore
    document
      .getElementById(elementId || "")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const sideBarItem = body
    ?.filter((item) => item.element === ELEMENT_TYPE.LONG_READ_BLOCK)
    ?.map((item) => item?.title);

  return (
    <section className="grid_layout">
      <div className="logread_wrapper">
        <div
          className={`longread_body ${noMargin ? "mt-auto" : "mt-[-7.5rem]"} ${
            noSidebar ? "w-full" : "md:w-[80%] w-full"
          }`}
        >
          {body?.map((item, index) => (
            <div key={index}>
              {createElement(item.element as ELEMENT_TYPE, item)}
            </div>
          ))}
          {children}
        </div>
        {!noSidebar && <div className="md:block hidden">
          <div className="longread_sidebar_body">
            {!!sideBarItem.length && <Typography variant="h4">Разделы</Typography>}
            <>
              {sideBarItem?.map((item, index) => (
                <div
                  className="longread_sidebar_item text1"
                  key={index}
                  onClick={() => scrollIntoView(item)}
                >
                  {item}
                </div>
              ))}
            </>
          </div>
        </div>}
      </div>
    </section>
  );
};
