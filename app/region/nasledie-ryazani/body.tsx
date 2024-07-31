"use client";
import { data } from "@/constants/pages/nasledie-ryazani/nasledie-ryazani";
import { NasledieCard } from "@/components/modules/ArchCard/NasledieCard";

const Body = () => {

  return (
    <section className="grid_layout">
      <div className="mb-40 mt-40">
      <NasledieCard data={data} />
      </div>
    </section>
  );
};

export default Body;