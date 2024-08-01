"use client";
import { useState } from "react";
import { Tab } from "./Tab";

type tTab = {
  label: string;
  id: string;
};

export const Tabs = ({
  tabs,
  onChange,
  isOtvety,
}: {
  tabs: tTab[];
  onChange: (tabId: string) => void;
  isOtvety?: boolean;
}) => {
  const [active, setActive] = useState("all");

  const scrollIntoView = (elementId?: string) => {
    //@ts-ignore
    document
      .getElementById(elementId || "")
      .scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  };

  const onClick = (id: string) => {
    setActive(id);
    scrollIntoView(id);
    onChange(id);
  };
  return (
    <div className={`flex gap-5 flex-nowrap overflow-x-auto ${isOtvety && "tabs_otvety"} no-scrollbar`}>
      {tabs.map((item, index) => (
        <Tab
          {...item}
          onClick={() => onClick(item.id)}
          isActive={active === item.id}
          key={index}
        />
      ))}
    </div>
  );
};
