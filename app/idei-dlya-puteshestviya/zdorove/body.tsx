"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { PlaceCard } from "@/components/modules/PlaceCard/PlaceCard";
import { tabsZdorove } from "@/constants/contstants";
import { useState } from "react";
import { TPlaceCard } from "@/types/types";
import { WrapperTabs } from "@/components/wrapper";

const Body = ({ data }: { data: TPlaceCard[] }) => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.category.name === tab) : data;

  return (
    <section className="grid_layout">
      <WrapperTabs>
        <Tabs tabs={tabsZdorove} onChange={onChangeTab} />
      </WrapperTabs>
      <PlaceCard data={filteredData} />
    </section>
  );
};

export default Body;
