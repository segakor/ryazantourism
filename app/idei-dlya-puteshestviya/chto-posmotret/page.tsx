import { HeroPage } from "@/components/modules/HeroPage";
import Body from "./body";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Что посмотреть? - Всё о туризме в Рязани и Рязанской области",
};

const Page = () => {
  return (
    <div>
      <HeroPage
        imgUrl="/heroPages/idei-dlya-puteshestviya/chto-posmotret.jpg"
        title="Что посмотреть?"
        desc="Все популярные объекты города и области"
      />
      <Body />
    </div>
  );
};

export default Page;
