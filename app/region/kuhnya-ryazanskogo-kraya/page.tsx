import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { WrapperGreyPages } from "@/components/wrapper";
import { template } from "@/constants/pages/region/kuhnya-ryazanskogo-kraya";
import { TLongReadBody } from "@/types/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кухня рязанского края - Всё о туризме в Рязани и Рязанской области",
};

const Kuhnya = () => {
  return (
    <WrapperGreyPages>
      <HeroPage
        imgUrl="/heroPages/region/kuhnya.jpg"
        title="Кухня Рязанского края"
      />
      <LongRead body={template as TLongReadBody[]} />
    </WrapperGreyPages>
  );
};

export default Kuhnya;
