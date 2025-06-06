"use client";
import "./style.css";
import { ReactNode } from "react";
import { Typography } from "@/components/elements/Typography/Typography";
import { createSidebarItem } from "@/utils/longread/createSidebarItem";
import { scrollIntoView } from "@/utils/longread/scrollIntoView";


type Props = {
  body: string;
  children?: ReactNode;
  noMargin?: boolean;
  noSidebar?: boolean;
  sideBarText?: string;
  fullW?: boolean;
};

export const LongReadRender = ({
  body,
  children,
  noMargin,
  noSidebar,
  sideBarText,
  fullW
}: Props) => {
  const bodyWithStyles = body
    .replaceAll("<h3>", "<h3 class='md:text-[38px] text-[30px] leading-tight font-medium'>")
    .replaceAll("<h5>", "<h5 class='md:text-[20px] text-[20px] leading-tight font-semibold'>")
    .replaceAll("<p>", "<p class='text3 styled_list styled_link'>")
    .replaceAll("quoteBlock", "quoteBlock")
    .replaceAll(
      "<img",
      "<img class='rounded-[30px] max-h-[456px] object-cover w-full'"
    );

  const bodyItem = body ? (
    <div
      className={`longread_body ${noMargin ? "mt-auto" : "mt-[-7.5rem]"
        } md:w-[80%] w-full ${noSidebar && "no_sidebar"} ${fullW && 'md:w-full'} styled_list styled_link`}
      dangerouslySetInnerHTML={{ __html: bodyWithStyles }}
    />
  ) : (
    <div></div>
  );

  const sideBarItem = createSidebarItem(body)

  return (
    <section className="grid_layout">
      <div className=" absolute invisible before:content-[url('/factBlock/fact.svg')]" />
      <div className="absolute invisible before:content-[url('/quoteBlock/quote.svg')]" />
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
    </section>
  );
};
