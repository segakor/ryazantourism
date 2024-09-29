"use client";
import "./style.css";
import { ReactNode } from "react";
import { Typography } from "@/components/elements/Typography/Typography";

type Props = {
  body: string;
  children?: ReactNode;
  noMargin?: boolean;
  noSidebar?: boolean;
};

export const LongReadRender = ({
  body,
  children,
  noMargin,
  noSidebar,
}: Props) => {
  const scrollIntoView = (elementId?: string) => {
    //@ts-ignore
    document
      .getElementById(elementId || "")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  /* const sideBarItem = body
    ?.filter((item) => item.element === ELEMENT_TYPE.LONG_READ_BLOCK)
    ?.map((item) => item && item?.title).filter(function (item) {
      return typeof item === 'string';
    }) */

  const bodyWithStyles = body
    .replaceAll(
      "<h1>",
      "<h1 class='md:text-[40px] text-[30px] leading-tight'>"
    )
    .replaceAll("<p>", "<p class='text3 styled_list styled_link'>")
    .replaceAll(
      "<blockquote>",
      "<blockquote class='p-[30px] bg-[#5363f7] rounded-[30px] text-white flex gap-4 relative'>"
    );

  console.log(bodyWithStyles);

  const bodyItem = body ? (
    <div
      className={`longread_body ${noMargin ? "mt-auto" : "mt-[-7.5rem]"
        } md:w-[80%] w-full ${noSidebar && "no_sidebar"}`}
      dangerouslySetInnerHTML={{ __html: bodyWithStyles }}
    />
  ) : (
    <div></div>
  );

  return (
    <section className="grid_layout">
      <div className="logread_wrapper">
        {bodyItem}
        {!noSidebar && (
          <div className="md:block hidden">
            <div className="longread_sidebar_body">
              <Typography variant="h4">Разделы</Typography>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
