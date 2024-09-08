import { NasledieCard } from "@/components/modules/ArchCard/NasledieCard";
import { nasledieKasimov } from "@/constants/pages/nasledie-kasimov/nasledie-kasimov";

const Body = () => {
  return (
    <section className="grid_layout">
      <div className="md:pt-40 pt-20">
        {/*  @ts-ignore */}
        <NasledieCard data={nasledieKasimov} href='nasledie-kasimova' />
      </div>
    </section>
  );
};

export default Body;
