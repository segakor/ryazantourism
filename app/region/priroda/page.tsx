import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { WrapperGreyPages } from "@/components/wrapper";
import { template } from "@/constants/pages/region/priroda";
import { TLongReadBody } from "@/types/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Природа - Всё о туризме в Рязани и Рязанской области",
};

const Priroda = () => {
  return (
    <WrapperGreyPages>
      <HeroPage imgUrl="/heroPages/region/priroda.jpg" title="Природа" />
      <LongRead body={template as TLongReadBody[]} />
    </WrapperGreyPages>
  );
};

export default Priroda;
