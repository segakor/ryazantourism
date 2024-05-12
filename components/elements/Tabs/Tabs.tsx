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
}: {
  tabs: tTab[];
  onChange: (tabId: string) => void;
}) => {
  const [active, setActive] = useState("all");

  const scrollIntoView = (elementId?: string) => {
    //@ts-ignore
    document
      .getElementById(elementId || "")
      .scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  const onClick = (id: string) => {
    setActive(id);
    scrollIntoView(id)
    onChange(id);
  };
  return (
    <div className="tabs">
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
