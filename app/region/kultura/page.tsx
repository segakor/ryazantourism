import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { WrapperGreyPages } from "@/components/wrapper";
import { template } from "@/constants/pages/region/kultura";
import { TLongReadBody } from "@/types/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Культура - Всё о туризме в Рязани и Рязанской области",
};

const Kultura = () => {
  return (
    <WrapperGreyPages>
      <HeroPage imgUrl="/heroPages/region/kultura.jpg" title="Культура" />
      <LongRead body={template as TLongReadBody[]} />
    </WrapperGreyPages>
  );
};

export default Kultura;
