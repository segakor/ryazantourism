import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { WrapperGreyPages } from "@/components/wrapper";
import { template } from "@/constants/pages/region/istoriya";
import { TLongReadBody } from "@/types/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "История - Всё о туризме в Рязани и Рязанской области",
};

const Istoriya = () => {
  return (
    <WrapperGreyPages>
      <HeroPage imgUrl="/heroPages/region/istoriya.jpg" title="История" />
      <LongRead body={template as TLongReadBody[]} />
    </WrapperGreyPages>
  );
};

export default Istoriya;
