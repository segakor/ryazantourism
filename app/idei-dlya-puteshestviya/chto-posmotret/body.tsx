"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { tabsChtoPosmotret } from "@/constants/contstants";
import { useState } from "react";
import { ArchCard } from "@/components/modules/ArchCard/ArchCard";
import { WrapperTabs } from "@/components/wrapper";
import { TArchCard } from "@/types/types";

const Body = ({ data }: { data: TArchCard[] }) => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.category === tab) : data;

  return (
    <section className="grid_layout">
      <WrapperTabs>
        <Tabs tabs={tabsChtoPosmotret} onChange={onChangeTab} />
      </WrapperTabs>
      <ArchCard data={filteredData} />
    </section>
  );
};

export default Body;
