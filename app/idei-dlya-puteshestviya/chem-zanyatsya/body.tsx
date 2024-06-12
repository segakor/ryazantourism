"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { PlaceCard } from "@/components/modules/PlaceCard/PlaceCard";
import { tabsChemZanyatsya } from "@/constants/contstants";
import { useState } from "react";
import { TPlaceCard as TPlaceCard } from "@/types/types";

const Body = ({ data }: { data: TPlaceCard[] }) => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.category.name === tab) : data;

  return (
    <section className="grid_layout">
      <div className="wrapper_tabs">
        <Tabs tabs={tabsChemZanyatsya} onChange={onChangeTab} />
      </div>
      <PlaceCard data={filteredData} />
    </section>
  );
};

export default Body;
