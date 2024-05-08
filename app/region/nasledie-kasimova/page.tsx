import { HeroPage } from "@/components/modules/HeroPage"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Наследие Касимова - Всё о туризме в Рязани и Рязанской области",
};

const NasledieKasimova = () => {
  return  <div className="pages">
  <HeroPage imgUrl="/heroPages/region/arhitektura.jpg" title="Наследие Касимова" />
</div>
}

export default NasledieKasimova