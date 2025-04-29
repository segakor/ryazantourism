"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { tabsPromTurizm } from "@/constants/contstants";
import { useState } from "react";
import { PromTurizmCard } from "@/components/modules/PromTurizmCard/PromTurizmCard";
import { useSearchParams } from "next/navigation";
import { WrapperTabs } from "@/components/wrapper";
import { TPromturizm } from "@/types/types";

const Body = ({ data }: { data: TPromturizm[] }) => {
  const searchParams = useSearchParams();
  const defaultParams = searchParams.get("default");
  const [tab, setTab] = useState(defaultParams);

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.tags.includes(tab as any)) : data;

  return (
    <section className="grid_layout">
      <WrapperTabs>
        <Tabs
          tabs={tabsPromTurizm}
          onChange={onChangeTab}
          defaultValue={defaultParams || "all"}
        />
      </WrapperTabs>
      <PromTurizmCard data={filteredData} />
    </section>
  );
};

export default Body;
