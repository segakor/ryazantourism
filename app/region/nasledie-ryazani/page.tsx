import { HeroPage } from "@/components/modules/HeroPage"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Наследие Рязани - Всё о туризме в Рязани и Рязанской области",
};

const NasledieRyazani= () => {
  return  <div className="pages">
  <HeroPage imgUrl="/heroPages/region/arhitektura.jpg" title="Наследие Рязани" />
</div>
}

export default NasledieRyazani