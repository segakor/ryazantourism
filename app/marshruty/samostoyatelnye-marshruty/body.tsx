"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { tabsSinglyRoutes } from "@/constants/contstants";
import { useState } from "react";
import { SinglyRoutest } from "@/components/modules/SinglyRoutes/SinglyRoutes";
import { TSinglyRoutes } from "@/types/types";

const Body = ({ data }: { data: TSinglyRoutes[] }) => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.category.name === tab) : data;

  return (
    <section className="grid_layout">
      <Tabs tabs={tabsSinglyRoutes} onChange={onChangeTab} />
      <SinglyRoutest data={filteredData} />
    </section>
  );
};

export default Body;
