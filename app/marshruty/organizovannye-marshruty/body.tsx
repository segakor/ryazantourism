"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { PlaceCard } from "@/components/modules/PlaceCard/PlaceCard";
import { tabsZdorove } from "@/constants/contstants";
import { useState } from "react";
import { TPlaceCard } from "@/types/types";
import { OrganizedBannerRoutes } from "@/components/modules/OrganizedBannerRoutes";

const Body = () => {

  return (
    <section className="grid_layout">
      <OrganizedBannerRoutes/>
      {/* <PlaceCard data={filteredData} /> */}
    </section>
  );
};

export default Body;
