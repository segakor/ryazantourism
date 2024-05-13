import { HeroMain } from "@/components/modules/HeroMain";
import { MainBannerRoutes } from "@/components/modules/MainBannerRoutes";
import { MainNavigation } from "@/components/modules/MainNavigation";
import { News } from "@/components/modules/News";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Всё о туризме в Рязани и Рязанской области",
  description:
    "Собрали для вас только лучшие места, которые помогут вам насладиться Рязанью. Вы можете исследовать Рязань как самостоятельно, так и с помощью наших опытных экскурсоводов!",
};

export default async function Home() {
  return (
    <main>
      <HeroMain />
      <div className="home_page">
        <MainNavigation />
        <MainBannerRoutes />
        <News />
      </div>
    </main>
  );
}
