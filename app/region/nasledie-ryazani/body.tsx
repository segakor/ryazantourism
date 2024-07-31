"use client";
import { nasledieRyazani } from "@/constants/pages/nasledie-ryazani/nasledie-ryazani";
import { NasledieCard } from "@/components/modules/ArchCard/NasledieCard";

const Body = () => {
  return (
    <section className="grid_layout">
      <div className="mb-40 mt-40">
        <NasledieCard data={nasledieRyazani} href="nasledie-ryazani" />
      </div>
    </section>
  );
};

export default Body;
