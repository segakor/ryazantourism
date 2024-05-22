import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { template } from "@/constants/pages/region/kuhnya-ryazanskogo-kraya";
import { TLongReadBody } from "@/types/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кухня рязанского края - Всё о туризме в Рязани и Рязанской области",
};

const Kuhnya = () => {
  return (
    <div className="pages">
      <HeroPage
        imgUrl="/heroPages/region/kuhnya.jpg"
        title="Кухня рязанского края"
      />
      <LongRead body={template as TLongReadBody[]} />
    </div>
  );
};

export default Kuhnya;
