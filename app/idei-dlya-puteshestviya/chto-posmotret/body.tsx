"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { tabsChtoPosmotret } from "@/constants/contstants";
import { useState } from "react";
import { chtoPosmotret } from "@/constants/pages/idei-dlya-puteshestviya/chto-posmotret";
import { ArchCard } from "@/components/modules/ArchCard/ArchCard";

const Body = () => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? chtoPosmotret.filter((item) => item.category.name === tab) : chtoPosmotret;

  return (
    <section className="grid_layout">
      <div className="wrapper_tabs">
        <Tabs tabs={tabsChtoPosmotret} onChange={onChangeTab} />
      </div>
      <ArchCard data={filteredData} />
    </section>
  );
};

export default Body;
