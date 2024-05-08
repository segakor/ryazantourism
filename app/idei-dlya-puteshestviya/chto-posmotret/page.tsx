import { ArchCard } from "@/components/modules/ArchCard/ArchCard";
import { HeroPage } from "@/components/modules/HeroPage";
import { data } from "@/constants/pages/chto-posmotret";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Что посмотреть? - Всё о туризме в Рязани и Рязанской области",
};

const Page = () => {
  return (
    <div className="pages">
      <HeroPage
        imgUrl="/heroPages/idei-dlya-puteshestviya/chto-posmotret.jpg"
        title="Что посмотреть?"
        desc="Все популярные объекты города и области"
      />
      <section className="grid_layout">
        <ArchCard data={data} />
      </section>
    </div>
  );
};

export default Page;
