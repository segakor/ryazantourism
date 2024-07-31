"use client";
import { NasledieCard } from "@/components/modules/ArchCard/NasledieCard";
import { nasledieKasimov } from "@/constants/pages/nasledie-kasimov/nasledie-kasimov";

const Body = () => {
  return (
    <section className="grid_layout">
      <div className="mb-40 mt-40">
        <NasledieCard data={nasledieKasimov} href='nasledie-kasimova' />
      </div>
    </section>
  );
};

export default Body;
