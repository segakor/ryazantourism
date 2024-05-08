import { HeroPage } from "@/components/modules/HeroPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "История - Всё о туризме в Рязани и Рязанской области",
};

const Istoriya = () => {
  return (
    <div className="pages">
      <HeroPage imgUrl="/heroPages/region/istoriya.jpg" title="История" />
    </div>
  );
};

export default Istoriya;
