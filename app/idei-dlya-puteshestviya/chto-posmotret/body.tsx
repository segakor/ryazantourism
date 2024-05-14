"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { tabsChemZanyatsya } from "@/constants/contstants";
import { useState } from "react";
import { data } from "@/constants/pages/chto-posmotret";
import { ArchCard } from "@/components/modules/ArchCard/ArchCard";

const Body = () => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.category.name === tab) : data;

  return (
    <section className="grid_layout">
      <Tabs tabs={tabsChemZanyatsya} onChange={onChangeTab} />
      <ArchCard data={filteredData} />
    </section>
  );
};

export default Body;
