import { HeroPage } from "@/components/modules/HeroPage";

import type { Metadata } from "next";
import Body from "./body";

export const metadata: Metadata = {
  title: "Наследие Рязани - Всё о туризме в Рязани и Рязанской области",
};

const NasledieRyazani = () => {
  return (
    <div className="pages">
      <HeroPage
        imgUrl="/heroPages/region/nasledie_rzn.jpg"
        title="Наследие Рязани"
        desc="Виртуальная прогулка по главным улицам старого центра. Мы только начали работу над составлением летописи рязанской архитектуры, но обещаем — однажды тут будет очень интересно."
      />
      <Body />
    </div>
  );
};

export default NasledieRyazani;
