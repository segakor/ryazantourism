"use client";
import { LongReadBlock } from "@/components/elements/LongReadBlocks";
import "./style.css";
import { QuoteBlock } from "@/components/elements/LongReadBlocks/QuoteBlock";
import { FactBlock } from "@/components/elements/LongReadBlocks/FactBlock";
import { LeadBlock } from "@/components/elements/LongReadBlocks/LeadBlock";
import { prirodaTemplate } from "@/constants/pages/priroda";
import { ELEMENT_TYPE } from "@/types/types";

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
  return null;
};

const sideBarItem = prirodaTemplate
  .filter((item) => item.element === ELEMENT_TYPE.LONG_READ_BLOCK)
  .map((item) => item.title);

export const LongRead = () => {
  return (
    <section className="grid_layout">
      <div className="logread_wrapper">
        <div className="longread_body">
          {prirodaTemplate.map((item, index) => (
            <div key={index}>
              {createElement(item.element as ELEMENT_TYPE, item)}
            </div>
          ))}
        </div>
        <div>
          <div className="longread_sidebar">
            <div className="h4">Разделы</div>
            <>
              {sideBarItem.map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    document
                      .getElementById(item)
                      .scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  {item}
                </div>
              ))}
            </>
          </div>
        </div>
      </div>
    </section>
  );
};
