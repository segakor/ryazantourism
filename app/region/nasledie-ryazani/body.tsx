import { nasledieRyazani } from "@/constants/pages/nasledie-ryazani/nasledie-ryazani";
import { NasledieCard } from "@/components/modules/ArchCard/NasledieCard";

const Body = () => {
  return (
    <section className="grid_layout">
      <div className="md:pt-40 pt-20">
        {/*  @ts-ignore */}
        <NasledieCard data={nasledieRyazani} href="nasledie-ryazani" />
      </div>
    </section>
  );
};

export default Body;
