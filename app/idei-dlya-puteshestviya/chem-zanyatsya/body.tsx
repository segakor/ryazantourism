"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { PlaceCard } from "@/components/modules/PlaceCard/PlaceCard";
import { tabsChemZanyatsya } from "@/constants/contstants";
import { useState } from "react";
import { PlaceCard as tPlaceCard } from "@/types/types";

const Body = ({ data }: { data: tPlaceCard[] }) => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.category.name === tab) : data;

  return (
    <section className="grid_layout">
      <Tabs tabs={tabsChemZanyatsya} onChange={onChangeTab} />
      <PlaceCard data={filteredData} />
    </section>
  );
};

export default Body;
