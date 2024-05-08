import { HeroPage } from "@/components/modules/HeroPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Культура - Всё о туризме в Рязани и Рязанской области",
};

const Kultura = () => {
  return (
    <div className="pages">
      <HeroPage imgUrl="/heroPages/region/kultura.jpg" title="Культура" />
    </div>
  );
};

export default Kultura;
