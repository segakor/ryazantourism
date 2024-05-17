import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { template } from "@/constants/pages/region/arhitektura";
import { LongReadBody } from "@/types/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Архитектура - Всё о туризме в Рязани и Рязанской области",
};

const Arhitektura = () => {
  return (
    <div className="pages">
      <HeroPage
        imgUrl="/heroPages/region/arhitektura.jpg"
        title="Архитектура"
      />
      <LongRead body={template as LongReadBody[]} />
    </div>
  );
};

export default Arhitektura;
