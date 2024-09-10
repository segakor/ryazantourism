import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { WrapperGreyPages } from "@/components/wrapper";
import { template } from "@/constants/pages/region/arhitektura";
import { TLongReadBody } from "@/types/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Архитектура - Всё о туризме в Рязани и Рязанской области",
};

const Arhitektura = () => {
  return (
    <WrapperGreyPages>
      <HeroPage
        imgUrl="/heroPages/region/arhitektura.jpg"
        title="Архитектура"
      />
      <LongRead body={template as TLongReadBody[]} />
    </WrapperGreyPages>
  );
};

export default Arhitektura;
