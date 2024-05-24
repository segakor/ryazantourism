"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { Documents } from "@/components/modules/Document/Document";
import { PlaceCard } from "@/components/modules/PlaceCard/PlaceCard";
import { tabsZdorove } from "@/constants/contstants";
import { TDocument } from "@/types/types";

const Body = ({ data }: { data: TDocument[] }) => {
  return (
    <section className="grid_layout">
      <Documents data={data} />
    </section>
  );
};

export default Body;
