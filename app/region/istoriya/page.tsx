import { HeroPage } from "@/components/modules/HeroPage";
import { LongRead } from "@/components/modules/LongRead";
import { template } from "@/constants/pages/region/istoriya";
import { LongReadBody } from "@/types/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "История - Всё о туризме в Рязани и Рязанской области",
};

const Istoriya = () => {
  return (
    <div className="pages">
      <HeroPage imgUrl="/heroPages/region/istoriya.jpg" title="История" />
      <LongRead body={template as LongReadBody[]} />
    </div>
  );
};

export default Istoriya;
