"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { useState } from "react";
import { Search } from "@/components/elements/Search/Search";
import { Otvety } from "@/components/modules/Otvety/Otvet";
import { TOtvet } from "@/types/types";

const Body = ({ data }: { data: TOtvet[] }) => {
  const [tab, setTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const tabs = [{ label: "Все", id: "all" }];

  data.forEach((item) => {
    if (tabs.find((tab) => tab.id === item.category)) {
      return;
    }
    tabs.push({
      id: item.category,
      label: item.category,
    });
  });

  const filteredData = searchValue
    ? data.filter((item) =>
      item.keywords.includes(searchValue.toLocaleLowerCase())
    )
    : tab !== "all"
      ? data.filter((item) => item.category === tab)
      : data;

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  return (
    <section className="grid_layout">
      <Search onChange={onSearch} />
      <Tabs tabs={tabs} onChange={onChangeTab} isOtvety />
      <Otvety data={filteredData} tabs={tabs} />
    </section>
  );
};

export default Body;
