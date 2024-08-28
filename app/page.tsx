import { EventMainCard } from "@/components/modules/EventCard/EventMainCard";
import { HeroMain } from "@/components/modules/HeroMain";
import { MainBannerRoutes } from "@/components/modules/MainBannerRoutes";
import { MainNavigation } from "@/components/modules/MainNavigation";
import { News } from "@/components/modules/News";
import { news } from "@/constants/pages/ty-s-mestnym/novosri-regiona";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Всё о туризме в Рязани и Рязанской области",
  description:
    "Собрали для вас только лучшие места, которые помогут вам насладиться Рязанью. Вы можете исследовать Рязань как самостоятельно, так и с помощью наших опытных экскурсоводов!",
};

const Main = async () => {

  return (
    <>
      <HeroMain />
      <div className="grid_layout">
        <MainNavigation />
        <MainBannerRoutes />
        <EventMainCard />
        <News type="city" news={news.slice(0,4)} />
      </div>
    </>
  );
};

export default Main;
