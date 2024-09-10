"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { BibliotekaNavigationFlat } from "@/components/modules/BibliotekaNavigation/BibliotekaNavigation";
import { VdohnovitsiyaGalery } from "@/components/modules/VdohnovitsiyaGalery/VdohnovitsiyaGalery";
import { WrapperTabs } from "@/components/wrapper";
import { tabsVdohnovitsiya } from "@/constants/contstants";
import { vdohnovitsiya } from "@/constants/pages/biblioteka/vdohnovitsiya/vdohnovitsiya";
import { shuffle } from "@/utils/shuffle";
import { useState } from "react";

const Body = () => {
  const [tab, setTab] = useState("all");

  const onChangeTab = (e: string) => {
    setTab(e);
  };

  const filteredData =
    tab !== "all"
      ? vdohnovitsiya.filter((item) => item.category === tab)
      : shuffle(vdohnovitsiya);

  return (
    <section className="grid_layout">
      <WrapperTabs>
        <Tabs tabs={tabsVdohnovitsiya} onChange={onChangeTab} />
      </WrapperTabs>
      <VdohnovitsiyaGalery data={filteredData} />
      <BibliotekaNavigationFlat exclude="vdohnovitsiya" />
    </section>
  );
};

export default Body;
