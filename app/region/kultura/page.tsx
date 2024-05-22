import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { template } from "@/constants/pages/region/kultura";
import { TLongReadBody } from "@/types/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Культура - Всё о туризме в Рязани и Рязанской области",
};

const Kultura = () => {
  return (
    <div className="pages">
      <HeroPage imgUrl="/heroPages/region/kultura.jpg" title="Культура" />
      <LongRead body={template as TLongReadBody[]} />
    </div>
  );
};

export default Kultura;
