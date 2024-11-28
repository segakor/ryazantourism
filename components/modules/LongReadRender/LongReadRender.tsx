"use client";
import "./style.css";
import { ReactNode, useRef } from "react";
import { Typography } from "@/components/elements/Typography/Typography";

type Props = {
  body: string;
  children?: ReactNode;
  noMargin?: boolean;
  noSidebar?: boolean;
  sideBarText?: string;
};

export const LongReadRender = ({
  body,
  children,
  noMargin,
  noSidebar,
  sideBarText,
}: Props) => {
  const scrollIntoView = (elementId?: string) => {
    //@ts-ignore
    document
      .getElementById(elementId || "")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const bodyWithStyles = body
    .replaceAll("<h1>", "<h1 class='md:text-[40px] text-[30px] leading-tight>")
    .replaceAll("<p>", "<p class='text3 styled_list styled_link'>")
    .replaceAll(
      "<img",
      "<img class='rounded-[30px] max-h-[456px] object-cover w-full'"
    );

  const bodyItem = body ? (
    <div
      className={`longread_body ${noMargin ? "mt-auto" : "mt-[-7.5rem]"
        } md:w-[80%] w-full ${noSidebar && "no_sidebar"}`}
      dangerouslySetInnerHTML={{ __html: bodyWithStyles }}
    />
  ) : (
    <div></div>
  );

  const sideBarItem = ["1", "2"];//TODO: вытащить h1

  return (
    <section className="grid_layout">
      <div className="logread_wrapper">
        {bodyItem}
        {!noSidebar && (
          <div className="md:block hidden">
            <div className="longread_sidebar_body">
              {!!sideBarItem.length && (
                <Typography variant="h4">Разделы</Typography>
              )}
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
          </div>
        )}
        {sideBarText && (
          <div className="md:block hidden max-w-[200px]">
            <div className="longread_sidebar_body">
              <Typography variant="h4">Контакты</Typography>
              <div
                className="text1 text-[var(--color-grey)]"
                dangerouslySetInnerHTML={{ __html: sideBarText }}
              />
            </div>
          </div>
        )}
      </div>
      <div className="invisible before:content-[url('/factBlock/fact.svg')]" />
      <div className="invisible before:content-[url('/quoteBlock/quote.svg')]" />
    </section>
  );
};
