"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { tabsPromTurizm } from "@/constants/contstants";
import { useState } from "react";
import { TPromTurizmCard } from "@/types/types";
import { PromTurizmCard } from "@/components/modules/PromTurizmCard/PromTurizmCard";
import { useSearchParams } from "next/navigation";

const Body = ({ data }: { data: TPromTurizmCard[] }) => {
  const searchParams = useSearchParams();
  const defaultParams = searchParams.get("default");
  const [tab, setTab] = useState(defaultParams);

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all" ? data.filter((item) => item.tag.includes(tab as any)) : data;

  return (
    <section className="grid_layout">
      <div className="wrapper_tabs">
        <Tabs
          tabs={tabsPromTurizm}
          onChange={onChangeTab}
          defaultValue={defaultParams || "all"}
        />
      </div>
      <PromTurizmCard data={filteredData} />
    </section>
  );
};

export default Body;
