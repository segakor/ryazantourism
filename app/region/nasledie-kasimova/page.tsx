import { HeroPage } from "@/components/modules/HeroPage";

import type { Metadata } from "next";
import Body from "./body";

export const metadata: Metadata = {
  title: "Наследие Касимова - Всё о туризме в Рязани и Рязанской области",
};

const NasledieRyazani = () => {
  return (
    <div className="pages">
      <HeroPage
        imgUrl="/heroPages/region/nasledie_kasimov.jpg"
        title="Наследие Касимова"
      />
      <Body />
    </div>
  );
};

export default NasledieRyazani;
