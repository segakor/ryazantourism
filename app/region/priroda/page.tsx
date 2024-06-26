import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { template } from "@/constants/pages/region/priroda";
import { TLongReadBody } from "@/types/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Природа - Всё о туризме в Рязани и Рязанской области",
};

const Priroda = () => {
  return (
    <div className="pages">
      <HeroPage imgUrl="/heroPages/region/priroda.jpg" title="Природа" />
      <LongRead body={template as TLongReadBody[]} />
    </div>
  );
};

export default Priroda;
