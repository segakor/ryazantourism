import { HeroPage } from "@/components/modules/HeroPage"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Архитектура - Всё о туризме в Рязани и Рязанской области",
};

const Arhitektura = () => {
  return  <div className="pages">
  <HeroPage imgUrl="/heroPages/region/arhitektura.jpg" title="Архитектура" />
</div>
}

export default Arhitektura