"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { data } from "@/constants/pages/ty-s-mestnym/otvety-na-voprosy";
import { useState } from "react";
import { Search } from "@/components/elements/Search/Search";
import { Otvety } from "@/components/modules/Otvety/Otvet";

const Body = () => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const tabs = [{ label: "Все", id: "all" }];

  data.forEach((item) => {
    if (tabs.find((tab) => tab.id === item.category.name)) {
      return;
    }
    tabs.push({
      id: item.category.name,
      label: item.category.name,
    });
  });

  const filteredData =
    tab !== "all" ? data.filter((item) => item.category.name === tab) : data;

  return (
    <section className="grid_layout">
      <Search />
      <Tabs tabs={tabs} onChange={onChangeTab} isOtvety />
      <Otvety data={filteredData} />
    </section>
  );
};

export default Body;
