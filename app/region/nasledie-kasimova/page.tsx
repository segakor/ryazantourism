import { HeroPage } from "@/components/modules/HeroPage";

import type { Metadata } from "next";
import Body from "./body";
import { WrapperGreyPages } from "@/components/wrapper";

export const metadata: Metadata = {
  title: "Наследие Касимова - Всё о туризме в Рязани и Рязанской области",
};

const NasledieRyazani = () => {
  return (
    <WrapperGreyPages>
      <HeroPage
        imgUrl="/heroPages/region/nasledie_kasimov.jpg"
        title="Наследие Касимова"
      />
      <Body />
    </WrapperGreyPages>
  );
};

export default NasledieRyazani;
